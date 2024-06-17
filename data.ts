import {
    faCodePullRequest,
    faFile,
    faHouse,
    faMagnifyingGlassChart,
    faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {
    ArrowUpTrayIcon,
    CalendarIcon,
    Cog6ToothIcon,
    ExclamationCircleIcon,
    LockClosedIcon,
    PencilIcon,
    QuestionMarkCircleIcon,
    StarIcon,
    WalletIcon,
} from '@heroicons/react/24/outline'

export const signupField = [
    {
        label: 'Username',
        name: 'username',
    },
    {
        label: 'Tel',
        name: 'phone',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        name: `password`,
        label: `Password`,
    },
    {
        name: `confirm_password`,
        label: `Confirm Password`,
    },
]

export const loginField = [
    {
        label: 'Email',
        name: 'email',
    },
    {
        name: `password`,
        label: `Password`,
    },
]
export const ResetPasswordField = [
    {
        name: `password`,
        label: `New Password`,
    },
    {
        label: 'Confirm Password',
        name: 'confirm_password',
    },
]
export const updatePasswordField = [
    {
        name: `old_password`,
        label: `Old Password`,
    },
    {
        name: 'new_password',
        label: 'New Password',
    },
]

export const whyCardData = [
    {
        imgSrc: '/assets/icon-1.svg',
        title: 'Convenience and time management',
        content:
            'We offer a seamless and convenient means for applicants to apply and receive their academic documents without  the need to physically visit school. Students or graduates ned not bother about time and mobility ',
    },
    {
        imgSrc: '/assets/icon-2.svg',
        title: 'Convenience and time management',
        content:
            'We offer a seamless and convenient means for applicants to apply and receive their academic documents without  the need to physically visit school. Students or graduates ned not bother about time and mobility ',
    },
    {
        imgSrc: '/assets/icon-3.svg',
        title: 'Streamline communication',
        content:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
]

export const howWeWorkData = [
    {
        icon: '/assets/one.svg',
        title: 'Request for a document',
        content:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
    {
        icon: '/assets/two.svg',
        title: 'Agent processing',
        content:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
    {
        icon: '/assets/three.svg',
        title: 'Admin approval',
        content:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
]

export const dashboardLink = [
    {
        icon: faHouse,
        link: '/dashboard',
        name: 'Dashboard',
    },
    {
        icon: faCodePullRequest,
        link: '/request-now',
        name: 'Request',
    },
    {
        icon: faMagnifyingGlassChart,
        link: '/tracking',
        name: 'Tracking',
    },
    {
        icon: faFile,
        link: '/my-docs',
        name: 'My Docs',
    },
]
export const dashboardLink2 = [
    {
        icon: faHouse,
        link: '/dashboard',
        name: 'Dashboard',
    },
    {
        icon: faCodePullRequest,
        link: '/progress',
        name: 'Progess',
    },
    {
        icon: faUpload,
        link: '/upload',
        name: 'Upload',
    },
    {
        icon: faFile,
        link: '/my-docs',
        name: 'My Docs',
    },
]

export const requestStatus = [
    'all',
    'pending',
    'in progress',
    'completed',
    'rejected',
]

export const requestData = [
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress',
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed',
    },
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress',
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed',
    },
]

export const dashboardSummaryData = [
    {
        count: '10',
        option: 'attestations',
    },
    {
        count: '05',
        option: 'transcripts',
    },
    {
        count: '01',
        option: 'certificates',
    },
    {
        count: '01',
        option: 'certificates',
    },
    {
        count: '01',
        option: 'certificates',
    },
]

export const step1Fields = [
    {
        name: `my_school`,
        label: `What is your school?`,
    },
    {
        name: `doc_type`,
        label: `What type of document do you want?`,
    },
    {
        name: `num_doc`,
        label: `Number of documents requested`,
    },
    {
        name: `trans_mode`,
        label: `Transaction mode`,
    },
]

export const step2Fields = [
    {
        name: `name`,
        label: `Name`,
    },
    {
        name: `matricule`,
        label: `Matricule of applicant`,
    },
    {
        name: `faculty`,
        label: `Faculty`,
    },
    {
        name: `department`,
        label: `Department`,
    },
    {
        name: `level`,
        label: `Level`,
    },
]

export const step3Fields = [
    {
        name: `payment_mode`,
        label: `How would you like to pay`,
    },
    {
        name: `phone`,
        label: `Phone number`,
    },
]

export const steps = [
    {
        id: 'Step 1',
        name: 'Document information',
        description:
            'Let’s begin your application process. Please fill in the  form below',
        fields: ['my_school', 'doc_type', 'num_doc', 'trans_mode'],
        label: [
            `What is your school?`,
            `What type of document do you want?`,
            `Number of documents requested`,
            `Transaction mode`,
        ],
    },
    {
        id: 'Step 2',
        name: 'Applicant Information',
        description: 'Please enter the relevant applicant information',
        fields: ['name', 'matricule', 'faculty', 'department', 'level'],
        label: [
            'Name',
            'Matricule of applicant',
            'Faculty',
            'Department',
            'Level',
        ],
    },
    {
        id: 'Step 3',
        name: 'Make Payments',
        description:
            'You can now pay for your desired document to complete the process',
        fields: ['payment_mode', 'phone'],
        label: ['How would you like to pay', 'Phone number'],
    },
]

export const summaryLabel = [
    { label: 'Name of applicant', name: 'name' },
    { label: 'Matricule of applicant', name: 'matricule' },
    { label: 'School', name: 'my_school' },
    { label: 'Faculty', name: 'faculty' },
    { label: 'Department', name: 'department' },
    { label: 'Level', name: 'level' },
    { label: 'Document type', name: 'doc_type' },
    { label: 'Number of document requested', name: 'num_doc' },
    { label: 'Transaction mode', name: 'trans_mode' },
]

export const profileData = [
    {
        icon: PencilIcon,
        label: 'Edit profile',
        link: '/profile-edit',
    },
    {
        icon: LockClosedIcon,
        label: 'Change password',
        link: '/update-password',
    },
    {
        icon: ArrowUpTrayIcon,
        label: 'Logout',
        link: '',
    },
    {
        icon: Cog6ToothIcon,
        label: 'Settings',
        link: 'settings',
    },
    {
        icon: ExclamationCircleIcon,
        label: 'About Pro-Guide',
        link: '/about',
    },
    {
        icon: QuestionMarkCircleIcon,
        label: 'Contact support',
        link: '/contact-support',
    },
]
export const profileDataAgent = [
    {
        icon: PencilIcon,
        label: 'Edit profile',
        link: '/profile-edit',
    },
    {
        icon: LockClosedIcon,
        label: 'Change password',
        link: '/update-password',
    },
    {
        icon: WalletIcon,
        label: 'Withdraw History',
        link: '/withdraw-history',
    },
    {
        icon: StarIcon,
        label: 'Reviews',
        link: '/review',
    },
    {
        icon: ArrowUpTrayIcon,
        label: 'Logout',
        link: '',
    },
    {
        icon: Cog6ToothIcon,
        label: 'Settings',
        link: 'settings',
    },
    {
        icon: ExclamationCircleIcon,
        label: 'About Pro-Guide',
        link: '/about',
    },
    {
        icon: QuestionMarkCircleIcon,
        label: 'Contact support',
        link: '/contact-support',
    },
]

export const editProfileField = [
    {
        label: 'Username',
        name: 'username',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        label: 'Contact',
        name: 'phone',
    },
]
export const contactUs = [
    {
        label: 'Username',
        name: 'username',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        label: 'Message title',
        name: 'message_title',
    },
    {
        label: '',
        name: 'message',
    },
]

export const notificationData = [
    {
        title: 'Transcript now available',
        description:
            'Your transcript is now ready from the admin. Check My Docs to download',
        time: '2 days ago',
        icon: CalendarIcon,
    },
    {
        title: 'Payment completed',
        description:
            'Payment for your English proficiency has just been received. A sum of XAF4,500 has been deducted from your mobile money account',
        time: '6 days ago',
        icon: CalendarIcon,
    },
    {
        title: 'Application pending',
        description:
            'Your application has been successfully submitted. it will soon be assigned an agent',
        time: '20th May 2024',
        icon: CalendarIcon,
    },
    {
        title: 'Your document has been rejected',
        description:
            'Document with ID number #123456 has been rejected possibly because the matricule didn’t match the applicant name',
        time: '20th May 2024',
        icon: CalendarIcon,
    },
]

export const comments = [
    {
        imgSrc: '/assets/avatar.svg',
        name: 'Kathy M',
        comment:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis ',
        commentDate: '22-05-24, 3:30pm',
        stars: 3,
    },
    {
        imgSrc: '/assets/avatar.svg',
        name: 'Kathy M',
        comment:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis ',
        commentDate: '22-05-24, 3:30pm',
        stars: 3,
    },
    {
        imgSrc: '/assets/avatar.svg',
        name: 'Kathy M',
        comment:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis ',
        commentDate: '22-05-24, 3:30pm',
        stars: 3,
    },
]

export const about = [
    {
        title: 'Pro-Guide',
        description:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis .amet fusce elit molestie dignissim. A in sociis at vulputate. A in tout sociis. sit amet consectetur. Id elementum amet et fusce elit molestie dignissim',
    },
    {
        title: 'Mission',
        description:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis .amet fusce elit molestie dignissim. A in sociis at vulputate. A in tout sociis. sit amet consectetur. ',
    },
    {
        title: 'Vision',
        description:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis .amet fusce elit molestie dignissim. A in sociis at vulputate. A in tout sociis. sit amet consectetur. ',
    },
    {
        title: 'Core Values',
        description:
            'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. A in sociis .amet fusce elit molestie dignissim. A in sociis at vulputate. A in tout sociis. sit amet consectetur. ',
    },
]

export const agent = [
    {
        name: 'firstname',
        label: 'First name',
    },
    {
        name: 'lastname',
        label: 'Last name',
    },
    {
        name: 'nic',
        label: 'National Identification Card number(NIC)',
    },
    {
        name: 'handle_doc',
        label: 'What official documents can you handle?',
    },
    {
        name: 'price',
        label: 'How much is your pricing for a service? ',
    },
]

export const headerSignup = 'Pro-Delivery'
export const parSignup = 'Begin  an incredible  journey of success with us'
export const parLogin = 'Welcome back! Let’s pick up from where you ended'
export const parFogotPassword = 'Let’s  help your recover your ProGuide account'

export const socialIcon = ['/assets/google-logo.png']
