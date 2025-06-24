"use client"

import * as React from "react"
import { useTranslation, type Language } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Home, User, Briefcase, Bell, Crown, Star, MessageCircle, LayoutDashboard, Award, Play, Lock, Globe
} from "lucide-react"

// --- Demo Data ---
const personalityQuestions = [
  { key: "leadershipQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "teamworkQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "stressQ", options: ["always", "often", "sometimes", "rarely"] },
]
const expertiseQuestions = [
  { key: "problemSolvingQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "communicationQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "innovationQ", options: ["always", "often", "sometimes", "rarely"] },
]
const packages = [
  { key: "free", price: 0, features: ["Kişilik Envanteri", "AI Karne", "Mülakat Hazırlık", "Network Modülü"] },
  { key: "core", price: 299, features: ["Tüm Free özellikler", "Uzmanlık Envanteri", "30 Günlük Simülasyon", "AI CV Oluşturucu", "İş İlanları (1 ay)"] },
  { key: "pro", price: 499, features: ["Tüm Core özellikler", "100 Günlük Simülasyon", "Gelişmiş İş İlanları (3 ay)", "Sınırsız CV Güncelleme", "Öncelikli Destek"] },
  { key: "premium", price: 899, features: ["Tüm Pro özellikler", "Koçluk Seansları", "Analitik Raporlar", "Özel İçerikler"] },
]
const roles = [
  { key: "projectManager", label: "Proje Yöneticisi", demo: [
    { day: 1, task: "Takım tanışması ve onboarding", actions: ["Takımı motive et", "Birebir görüşme yap"] },
    { day: 2, task: "İlk müşteri toplantısı", actions: ["Sunum hazırla", "Müşteriyi dinle"] },
    { day: 3, task: "Kriz yönetimi", actions: ["Takımı topla", "Yöneticiye bildir"] },
  ]},
  { key: "softwareEngineer", label: "Yazılım Geliştirici", demo: [
    { day: 1, task: "Kod ortamı kurulumu", actions: ["Kendi başına kur", "Takımdan yardım iste"] },
    { day: 2, task: "İlk feature geliştirme", actions: ["Dokümantasyon oku", "Direkt kodla"] },
    { day: 3, task: "Code review", actions: ["Kendi başına çöz", "Takımdan feedback al"] },
  ]},
  { key: "salesSpecialist", label: "Satış Uzmanı", demo: [
    { day: 1, task: "Müşteri portföyü analizi", actions: ["Segmentasyon yap", "Rapor hazırla"] },
    { day: 2, task: "İlk satış görüşmesi", actions: ["Sunum yap", "Soruları yanıtla"] },
    { day: 3, task: "Satış sonrası takip", actions: ["Teşekkür maili gönder", "Ek teklif sun"] },
  ]},
]

// --- Main App ---
export default function CareerDiscoveryApp() {
  // Language
  const [language, setLanguage] = React.useState<Language>(() => typeof window !== "undefined" ? (localStorage.getItem("language") as Language) || "tr" : "tr")
  const { t } = useTranslation(language)
  React.useEffect(() => { localStorage.setItem("language", language) }, [language])

  // Navigation
  const [screen, setScreen] = React.useState("home")
  const [packageIdx, setPackageIdx] = React.useState(0)
  const [paymentStatus, setPaymentStatus] = React.useState<"idle"|"success"|"fail">("idle")

  // Assessment
  const [personalityAnswers, setPersonalityAnswers] = React.useState<(string|null)[]>(Array(personalityQuestions.length).fill(null))
  const [expertiseAnswers, setExpertiseAnswers] = React.useState<(string|null)[]>(Array(expertiseQuestions.length).fill(null))
  const [assessmentDone, setAssessmentDone] = React.useState(false)

  // Simulation
  const [selectedRole, setSelectedRole] = React.useState<string|null>(null)
  const [simDay, setSimDay] = React.useState(0)
  const [simXP, setSimXP] = React.useState(0)
  const [simBadges, setSimBadges] = React.useState<string[]>([])
  const [simDone, setSimDone] = React.useState(false)

  // --- UI Components ---
  function LanguageSwitcher() {
    return (
      <div className="flex gap-1 border rounded px-1">
        <Button variant={language==='tr'?'default':'ghost'} size="sm" className="text-xs px-2" onClick={()=>setLanguage('tr')}>TR</Button>
        <Button variant={language==='en'?'default':'ghost'} size="sm" className="text-xs px-2" onClick={()=>setLanguage('en')}>EN</Button>
      </div>
    )
  }

  function Header() {
    return (
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={()=>setScreen("home")}><Home className="w-4 h-4"/>{t('home')}</Button>
          <Button variant="ghost" size="sm" onClick={()=>setScreen("dashboard")}><LayoutDashboard className="w-4 h-4"/>{t('dashboard')}</Button>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher/>
          <Button variant="ghost" size="sm" onClick={()=>setScreen("profile")}><User className="w-4 h-4"/></Button>
        </div>
      </div>
    )
  }

  function BottomNav() {
    if (screen === "assessment" || screen === "payment" || screen === "simulation") return null
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 md:hidden z-50">
        <Button variant="ghost" size="sm" onClick={()=>setScreen("home")}><Home className="w-5 h-5"/><span className="text-xs">{t('home')}</span></Button>
        <Button variant="ghost" size="sm" onClick={()=>setScreen("dashboard")}><LayoutDashboard className="w-5 h-5"/><span className="text-xs">{t('dashboard')}</span></Button>
        <Button variant="ghost" size="sm" onClick={()=>setScreen("profile")}><User className="w-5 h-5"/><span className="text-xs">{t('profile')}</span></Button>
        <Button variant="ghost" size="sm" onClick={()=>setScreen("payment")}><Crown className="w-5 h-5 text-amber-600"/><span className="text-xs">{t('payment')}</span></Button>
      </div>
    )
  }

  // --- Screens ---
  function HomeScreen() {
    return (
      <div className="p-4 space-y-4">
        <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
          <CardHeader><CardTitle className="flex items-center gap-2"><Star className="w-5 h-5 text-teal-600"/>{t('welcomeMessage')}</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" onClick={()=>setScreen("assessment")}>{t('startAssessment')}</Button>
              <Button className="w-full" onClick={()=>setScreen("simulation")}>{t('simulationGame')}</Button>
              <Button className="w-full" onClick={()=>setScreen("payment")}>{t('upgrade')}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  function AssessmentScreen() {
    return (
      <div className="p-4 max-w-lg mx-auto space-y-6">
        <Card>
          <CardHeader><CardTitle>{t('personalityInventory')}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {personalityQuestions.map((q, i) => (
              <div key={q.key} className="space-y-1">
                <div className="font-medium">{t(q.key as any)}</div>
                <div className="flex gap-2 flex-wrap">
                  {q.options.map(opt => (
                    <Button key={opt} variant={personalityAnswers[i]===opt?'default':'outline'} size="sm" onClick={()=>{
                      const arr = [...personalityAnswers]; arr[i]=opt; setPersonalityAnswers(arr)
                    }}>{t(opt as any)}</Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>{t('expertiseInventory')}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {expertiseQuestions.map((q, i) => (
              <div key={q.key} className="space-y-1">
                <div className="font-medium">{t(q.key as any)}</div>
                <div className="flex gap-2 flex-wrap">
                  {q.options.map(opt => (
                    <Button key={opt} variant={expertiseAnswers[i]===opt?'default':'outline'} size="sm" onClick={()=>{
                      const arr = [...expertiseAnswers]; arr[i]=opt; setExpertiseAnswers(arr)
                    }}>{t(opt as any)}</Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Button className="w-full" disabled={personalityAnswers.includes(null)||expertiseAnswers.includes(null)} onClick={()=>{setAssessmentDone(true); setScreen("home")}}>{t('completeAssessment')}</Button>
      </div>
    )
  }

  function PaymentScreen() {
    const [card, setCard] = React.useState({number: '', name: '', expiry: '', cvv: ''})
    return (
      <div className="p-4 max-w-lg mx-auto space-y-6">
        <Card>
          <CardHeader><CardTitle>{t('subscription')}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg, idx) => (
                <div key={pkg.key} className={`border rounded p-3 ${packageIdx===idx?'ring-2 ring-blue-500':''}`}
                  onClick={()=>setPackageIdx(idx)}>
                  <div className="font-bold text-lg">{t(pkg.key as any)}</div>
                  <div className="text-2xl font-bold">{pkg.price===0?t('free'):`₺${pkg.price}`}</div>
                  <ul className="text-xs space-y-1 mt-2">
                    {pkg.features.map((f,i)=>(<li key={i}>• {f}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <form className="space-y-3" onSubmit={e=>{e.preventDefault(); setPaymentStatus("success")}}>
              <Input placeholder={t('cardNumber')} value={card.number} onChange={e=>setCard({...card,number:e.target.value})} required maxLength={19}/>
              <Input placeholder={t('cardName')} value={card.name} onChange={e=>setCard({...card,name:e.target.value})} required/>
              <div className="flex gap-2">
                <Input placeholder={t('cardExpiry')} value={card.expiry} onChange={e=>setCard({...card,expiry:e.target.value})} required maxLength={5}/>
                <Input placeholder={t('cardCvv')} value={card.cvv} onChange={e=>setCard({...card,cvv:e.target.value})} required maxLength={4}/>
              </div>
              <Button className="w-full" type="submit">{t('payNow')}</Button>
            </form>
            {paymentStatus==="success" && <div className="text-green-600 font-bold text-center mt-2">{t('paymentSuccess')}</div>}
            {paymentStatus==="fail" && <div className="text-red-600 font-bold text-center mt-2">{t('paymentFailed')}</div>}
          </CardContent>
        </Card>
      </div>
    )
  }

  function SimulationScreen() {
    // Role selection and gamified demo
    const [role, setRole] = React.useState<string|null>(selectedRole)
    const [day, setDay] = React.useState(simDay)
    const [xp, setXP] = React.useState(simXP)
    const [badges, setBadges] = React.useState<string[]>(simBadges)
    const [done, setDone] = React.useState(simDone)
    const roleObj = roles.find(r=>r.key===role) || roles[0]
    const demo = roleObj.demo
    const isComplete = day >= demo.length
    return (
      <div className="p-4 max-w-lg mx-auto space-y-6">
        {!role ? (
          <Card>
            <CardHeader><CardTitle>{t('selectRole')}</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {roles.map(r=>(
                <Button key={r.key} className="w-full" onClick={()=>{setRole(r.key); setDay(0)}}>{t(r.key as any)}</Button>
              ))}
            </CardContent>
          </Card>
        ) : isComplete ? (
          <Card>
            <CardHeader><CardTitle>{t('simulationComplete')}</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-center">
              <Award className="w-10 h-10 mx-auto text-amber-500"/>
              <div className="font-bold">{t('simulationCompleteMessage')}</div>
              <div>{t('xp')}: <span className="font-bold">{xp}</span></div>
              <div>{t('badge')}: {badges.map(b=>(<Badge key={b} className="mx-1">{b}</Badge>))}</div>
              <Button className="mt-2" onClick={()=>{setRole(null); setDay(0); setXP(0); setBadges([]); setDone(false); setScreen("home")}}>{t('finish')}</Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader><CardTitle>{t('day')} {day+1} / {demo.length}</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="font-bold">{t('task')}: {demo[day].task}</div>
              <div className="space-y-2">
                <div className="font-medium">{t('chooseAction')}</div>
                {demo[day].actions.map((a,i)=>(
                  <Button key={i} className="w-full" onClick={()=>{
                    setXP(xp+10); const newBadges = [...badges]; if(i===0) newBadges.push(t('unlocked')+` ${t('badge')}`); setBadges(newBadges); setDay(day+1)
                  }}>{a}</Button>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Progress value={((day+1)/demo.length)*100} className="flex-1"/>
                <span className="text-xs">{t('progress')}: {day+1}/{demo.length}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge>{t('xp')}: {xp}</Badge>
                {badges.length>0 && <Badge>{t('badge')}</Badge>}
              </div>
            </CardContent>
          </Card>
        )}
        <Button variant="outline" className="w-full" onClick={()=>setScreen("home")}>{t('home')}</Button>
      </div>
    )
  }

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header/>
      {screen==="home" && <HomeScreen/>}
      {screen==="assessment" && <AssessmentScreen/>}
      {screen==="payment" && <PaymentScreen/>}
      {screen==="simulation" && <SimulationScreen/>}
      {/* Diğer ekranlar için benzer şekilde eklenebilir */}
      <BottomNav/>
    </div>
  )
}
