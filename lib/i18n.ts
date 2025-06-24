export type Language = 'en' | 'tr'

export interface Translations {
  // Common
  loading: string
  save: string
  cancel: string
  next: string
  back: string
  submit: string
  close: string
  edit: string
  delete: string
  search: string
  yes: string
  no: string
  continue: string
  finish: string
  start: string
  
  // Navigation
  home: string
  dashboard: string
  profile: string
  settings: string
  notifications: string
  
  // Authentication
  signIn: string
  signUp: string
  email: string
  password: string
  forgotPassword: string
  welcomeBack: string
  
  // Assessment
  personalityInventory: string
  expertiseInventory: string
  roleAssignment: string
  startAssessment: string
  completeAssessment: string
  assessmentProgress: string
  
  // Simulation
  simulationGame: string
  simulationComplete: string
  startSimulation: string
  simulationDay: string
  simulationScore: string
  
  // Career Tools
  cvGenerator: string
  jobBoard: string
  jobApplication: string
  interviewPrep: string
  networking: string
  coaching: string
  
  // Packages
  free: string
  core: string
  pro: string
  premium: string
  upgrade: string
  subscription: string
  payment: string
  
  // User Profile
  name: string
  profession: string
  personalityType: string
  expertiseLevel: string
  assignedRole: string
  competencies: string
  weaknesses: string
  
  // Payment
  cardNumber: string
  cardName: string
  cardExpiry: string
  cardCvv: string
  payNow: string
  paymentSuccess: string
  paymentFailed: string
  
  // Inventory Questions
  leadershipQ: string
  teamworkQ: string
  problemSolvingQ: string
  communicationQ: string
  stressQ: string
  innovationQ: string
  
  // Inventory Options
  always: string
  often: string
  sometimes: string
  rarely: string
  never: string
  
  // Simulation
  selectRole: string
  projectManager: string
  softwareEngineer: string
  salesSpecialist: string
  day: string
  task: string
  chooseAction: string
  progress: string
  xp: string
  badge: string
  
  // Gamification
  completed: string
  unlocked: string
  
  // Messages
  welcomeMessage: string
  assessmentComplete: string
  simulationCompleteMessage: string
  profileUpdated: string
  paymentSuccessful: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    next: 'Next',
    back: 'Back',
    submit: 'Submit',
    close: 'Close',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    yes: 'Yes',
    no: 'No',
    continue: 'Continue',
    finish: 'Finish',
    start: 'Start',
    
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    notifications: 'Notifications',
    
    // Authentication
    signIn: 'Sign In',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    welcomeBack: 'Welcome Back',
    
    // Assessment
    personalityInventory: 'Personality Inventory',
    expertiseInventory: 'Expertise Inventory',
    roleAssignment: 'Role Assignment',
    startAssessment: 'Start Assessment',
    completeAssessment: 'Complete Assessment',
    assessmentProgress: 'Assessment Progress',
    
    // Simulation
    simulationGame: 'Simulation Game',
    simulationComplete: 'Simulation Complete',
    startSimulation: 'Start Simulation',
    simulationDay: 'Day',
    simulationScore: 'Score',
    
    // Career Tools
    cvGenerator: 'CV Generator',
    jobBoard: 'Job Board',
    jobApplication: 'Job Application',
    interviewPrep: 'Interview Prep',
    networking: 'Networking',
    coaching: 'Coaching',
    
    // Packages
    free: 'Free',
    core: 'Core',
    pro: 'Pro',
    premium: 'Premium',
    upgrade: 'Upgrade',
    subscription: 'Subscription',
    payment: 'Payment',
    
    // User Profile
    name: 'Name',
    profession: 'Profession',
    personalityType: 'Personality Type',
    expertiseLevel: 'Expertise Level',
    assignedRole: 'Assigned Role',
    competencies: 'Competencies',
    weaknesses: 'Weaknesses',
    
    // Payment
    cardNumber: 'Card Number',
    cardName: 'Cardholder Name',
    cardExpiry: 'Expiry Date (MM/YY)',
    cardCvv: 'CVV',
    payNow: 'Pay Now',
    paymentSuccess: 'Payment successful! Your package is now active.',
    paymentFailed: 'Payment failed. Please try again.',
    
    // Inventory Questions
    leadershipQ: 'How do you approach leadership in a team?',
    teamworkQ: 'How do you contribute to teamwork?',
    problemSolvingQ: 'How do you solve complex problems?',
    communicationQ: 'How do you communicate with colleagues?',
    stressQ: 'How do you handle stress at work?',
    innovationQ: 'How do you bring innovation to your work?',
    
    // Inventory Options
    always: 'Always',
    often: 'Often',
    sometimes: 'Sometimes',
    rarely: 'Rarely',
    never: 'Never',
    
    // Simulation
    selectRole: 'Select Your Role',
    projectManager: 'Project Manager',
    softwareEngineer: 'Software Engineer',
    salesSpecialist: 'Sales Specialist',
    day: 'Day',
    task: 'Task',
    chooseAction: 'Choose your action',
    progress: 'Progress',
    xp: 'XP',
    badge: 'Badge',
    
    // Gamification
    completed: 'Completed',
    unlocked: 'Unlocked',
    
    // Messages
    welcomeMessage: 'Welcome to Career Discovery',
    assessmentComplete: 'Assessment completed successfully!',
    simulationCompleteMessage: 'Simulation completed!',
    profileUpdated: 'Profile updated successfully!',
    paymentSuccessful: 'Payment successful!',
  },
  tr: {
    // Common
    loading: 'Yükleniyor...',
    save: 'Kaydet',
    cancel: 'İptal',
    next: 'İleri',
    back: 'Geri',
    submit: 'Gönder',
    close: 'Kapat',
    edit: 'Düzenle',
    delete: 'Sil',
    search: 'Ara',
    yes: 'Evet',
    no: 'Hayır',
    continue: 'Devam',
    finish: 'Bitir',
    start: 'Başla',
    
    // Navigation
    home: 'Ana Sayfa',
    dashboard: 'Gösterge Paneli',
    profile: 'Profil',
    settings: 'Ayarlar',
    notifications: 'Bildirimler',
    
    // Authentication
    signIn: 'Giriş Yap',
    signUp: 'Kayıt Ol',
    email: 'E-posta',
    password: 'Şifre',
    forgotPassword: 'Şifremi Unuttum?',
    welcomeBack: 'Tekrar Hoş Geldiniz',
    
    // Assessment
    personalityInventory: 'Kişilik Envanteri',
    expertiseInventory: 'Uzmanlık Envanteri',
    roleAssignment: 'Rol Ataması',
    startAssessment: 'Değerlendirmeyi Başlat',
    completeAssessment: 'Değerlendirmeyi Tamamla',
    assessmentProgress: 'Değerlendirme İlerlemesi',
    
    // Simulation
    simulationGame: 'Simülasyon Oyunu',
    simulationComplete: 'Simülasyon Tamamlandı',
    startSimulation: 'Simülasyonu Başlat',
    simulationDay: 'Gün',
    simulationScore: 'Puan',
    
    // Career Tools
    cvGenerator: 'CV Oluşturucu',
    jobBoard: 'İş İlanları',
    jobApplication: 'İş Başvurusu',
    interviewPrep: 'Mülakat Hazırlığı',
    networking: 'Ağ Kurma',
    coaching: 'Koçluk',
    
    // Packages
    free: 'Ücretsiz',
    core: 'Temel',
    pro: 'Pro',
    premium: 'Premium',
    upgrade: 'Yükselt',
    subscription: 'Abonelik',
    payment: 'Ödeme',
    
    // User Profile
    name: 'Ad',
    profession: 'Meslek',
    personalityType: 'Kişilik Tipi',
    expertiseLevel: 'Uzmanlık Seviyesi',
    assignedRole: 'Atanan Rol',
    competencies: 'Yeterlilikler',
    weaknesses: 'Zayıf Yönler',
    
    // Payment
    cardNumber: 'Kart Numarası',
    cardName: 'Kart Sahibi',
    cardExpiry: 'Son Kullanma Tarihi (AA/YY)',
    cardCvv: 'CVV',
    payNow: 'Şimdi Öde',
    paymentSuccess: 'Ödeme başarılı! Paketin aktif.',
    paymentFailed: 'Ödeme başarısız. Lütfen tekrar deneyin.',
    
    // Inventory Questions
    leadershipQ: 'Bir ekipte liderliği nasıl üstlenirsiniz?',
    teamworkQ: 'Takım çalışmasına nasıl katkı sağlarsınız?',
    problemSolvingQ: 'Karmaşık problemleri nasıl çözersiniz?',
    communicationQ: 'İş arkadaşlarınızla nasıl iletişim kurarsınız?',
    stressQ: 'İş yerinde stresi nasıl yönetirsiniz?',
    innovationQ: 'İşinize nasıl yenilik katarsınız?',
    
    // Inventory Options
    always: 'Her zaman',
    often: 'Sık sık',
    sometimes: 'Bazen',
    rarely: 'Nadiren',
    never: 'Asla',
    
    // Simulation
    selectRole: 'Rolünü Seç',
    projectManager: 'Proje Yöneticisi',
    softwareEngineer: 'Yazılım Geliştirici',
    salesSpecialist: 'Satış Uzmanı',
    day: 'Gün',
    task: 'Görev',
    chooseAction: 'Aksiyonunu seç',
    progress: 'İlerleme',
    xp: 'XP',
    badge: 'Rozet',
    
    // Gamification
    completed: 'Tamamlandı',
    unlocked: 'Açıldı',
    
    // Messages
    welcomeMessage: 'Kariyer Keşfi\'ne Hoş Geldiniz',
    assessmentComplete: 'Değerlendirme başarıyla tamamlandı!',
    simulationCompleteMessage: 'Simülasyon tamamlandı!',
    profileUpdated: 'Profil başarıyla güncellendi!',
    paymentSuccessful: 'Ödeme başarılı!',
  }
}

export function useTranslation(language: Language) {
  return {
    t: (key: keyof Translations) => translations[language][key],
    language,
  }
} 