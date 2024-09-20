import {
    faBarsProgress,
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
    // LinkIcon,
    LockClosedIcon,
    PencilIcon,
    QuestionMarkCircleIcon,
    StarIcon,
    UserGroupIcon,
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
        label: 'Referal Code',
        name: 'referal_code',
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
export const dashboardLinkAgent = [
    {
        icon: faHouse,
        link: '/agent',
        name: 'Dashboard',
    },
    {
        icon: faBarsProgress,
        link: '/agent/progress',
        name: 'Progess',
    },
    {
        icon: faUpload,
        link: '/agent/upload',
        name: 'Upload',
    },
    {
        icon: faFile,
        link: '/agent/my-docs',
        name: 'My Docs',
    },
]

export const requestStatus = [
    'all',
    'pending',
    'assigned',
    'processing',
    'received',
    'delivered',
    'Completed',
]

export const documentRequestDetail = [
    'Date Applied',
    'Document Type',
    'Mode',
    'Price',
    'Duration',
]

export const requestData = [
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress',
        price: 'XAF3,000',
        available_status: ['Pending', 'Accepted'],
        delivrable: {
            name: 'Deliverable Name',
        },
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed',
        price: 'XAF3,000',
        available_status: ['Pending', 'Accepted'],
        delivrable: {
            name: 'Deliverable Name',
        },
    },
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress',
        price: 'XAF3,000',
        available_status: ['Pending', 'Accepted'],
        delivrable: {
            name: 'Deliverable Name',
        },
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed',
        price: 'XAF3,000',
        available_status: ['Pending', 'Accepted'],
        delivrable: {
            name: 'Deliverable Name',
        },
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
        option: 'completion of studies',
    },
    {
        count: '01',
        option: 'english proficiency',
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
    {
        name: `for_me`,
        label: `Apply for me`,
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
    {
        name: `scan_copy`,
        label: `Do you want a scan copy?`,
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
export const step3FieldsRef = [
    {
        name: `payment_mode`,
        label: `How would you like to pay`,
    },
    {
        name: `amount`,
        label: `Amount`,
    },
    {
        name: `number`,
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
    { label: 'Name of student', name: 'name' },
    { label: 'Matricule number', name: 'matricule' },
    { label: 'School', name: 'my_school' },
    { label: 'Faculty', name: 'faculty' },
    { label: 'Department', name: 'department' },
    { label: 'Level', name: 'level' },
    { label: 'Document type', name: 'doc_type' },
    { label: 'No of doc requested', name: 'num_doc' },
    { label: 'Transaction mode', name: 'trans_mode' },
    { label: 'Scan copy of doc', name: 'scan_copy' },
    { label: 'Total', name: 'total' },
]

export const summaryLabelComplete = [
    {
        id: 'Step 1',
        name: 'Request info',
        data: [
            { label: 'Name of student', name: 'name' },
            { label: 'Matricule number', name: 'matricule' },
            { label: 'School', name: 'my_school' },
            { label: 'Faculty', name: 'faculty' },
            { label: 'Department', name: 'department' },
            { label: 'Level', name: 'level' },
            { label: 'Document type', name: 'doc_type' },
            { label: 'No of doc requested', name: 'num_doc' },
            { label: 'Transaction mode', name: 'trans_mode' },
            { label: 'Request date', name: 'date' },
            { label: 'Scan copy of doc', name: 'scan_copy' },
        ],
    },
    {
        id: 'Step 2',
        name: 'Payment Details',
        data: [
            { label: 'Payment mode', name: 'payment_mode' },
            { label: 'Amount', name: 'total' },
            { label: 'Phone Number', name: 'phone' },
        ],
    },
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
        icon: UserGroupIcon,
        label: 'Referrals',
        link: 'referral',
    },
    // {
    //     icon: Cog6ToothIcon,
    //     label: 'Settings',
    //     link: 'settings',
    // },
    {
        icon: ExclamationCircleIcon,
        label: 'About Pro Delivery',
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
        label: 'About Pro Delivery',
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
        label: 'First name',
        name: 'first_name',
    },
    {
        label: 'Last name',
        name: 'last_name',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        label: 'Phone',
        name: 'phone',
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
    // {
    //     label: 'Region',
    //     name: 'region',
    // },
    // {
    //     label: 'City',
    //     name: 'city',
    // },
    // {
    //     label: 'City',
    //     name: 'city',
    // },
]

export const tabBTN = [
    {
        btn_text: `How it works`,
    },
    {
        btn_text: `Referral History`,
    },
    {
        btn_text: `My Balance`,
    },
]
export const contactUs = [
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
        label: 'Message title',
        name: 'subject',
    },
    {
        label: '',
        name: 'content',
    },
]

export const rating = [
    {
        label: 'Comment',
        name: 'comment',
    },
]

export const ratingStatus = [
    'Significant Improvement needed',
    'Improvement needed',
    'Acceptable',
    'Good',
    'Excellent',
]

export const filterData = [
    {
        label: 'Last 3 days',
        name: '3 days',
    },
    {
        label: 'Last 5 days',
        name: '5 days',
    },
    {
        label: 'Last 1 week',
        name: '1 week',
    },
    {
        label: 'Last 2 weeks',
        name: '2 week',
    },
    {
        label: 'Last 1 month',
        name: '1 month',
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

export const referralContent = [
    {
        icon: '/assets/one.svg',
        title: 'Request for a document',
        content: 'Send an invite to a friend through your referral code ',
    },
    {
        icon: '/assets/two.svg',
        title: 'Agent processing',
        content: 'Your friend signs up with us',
    },
    {
        icon: '/assets/three.svg',
        title: 'Admin approval',
        content:
            'You receive your bonus when your friend makes their first application',
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
        title: 'Pro Delivery',
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

export const myDocumentData = [
    {
        id: 1,
        name: 'Transcript',
        dateReceived: new Date('2023-01-15'),
        link: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    },
    {
        id: 2,
        name: 'English Proficiency',
        dateReceived: new Date('2023-02-20'),
        link: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    },
    {
        id: 3,
        name: 'English Proficiency',
        dateReceived: new Date('2023-02-24'),
        link: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    },
    {
        id: 4,
        name: 'Certificate',
        dateReceived: new Date('2023-03-10'),
        link: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    },
]

export const referrals = [
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
    {
        name: 'Kathy M',
        imageSrc: '/assets/avatar_ref.svg',
        date: '22-05-24, 3:30pm',
    },
]

export const statusReport = [
    `Application received, waiting to be assigned an agent`,
    `Application has been assigned an agent`,
    `Agent just dropped application`,
    `University processing request`,
    `Transcript collected from school, waiting for upload`,
    `Transcript now available, check "My Docs"`,
]
export const headerSignup = 'Pro-Delivery'
export const parSignup = 'Begin  an incredible  journey of success with us'
export const parLogin = 'Welcome back! Let’s pick up from where you ended'
export const parFogotPassword = 'Let’s  help your recover your ProGuide account'

export const socialIcon = ['/assets/google-logo.png']
