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
    ShieldCheckIcon,
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
        content: `Student logs into the ProGuide portal, selects the desired document, and submits a request.`
    },
    {
        icon: '/assets/two.svg',
        title: 'Agent processing',
        content: `The request is assigned to a ProGuide team agent who initiates and handles the document processing.`
    },
    {
        icon: '/assets/three.svg',
        title: 'Admin approval',
        content: `Once processed and approved, the document is finalized and ready for delivery.`
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
    {
        icon: ShieldCheckIcon,
        label: 'Terms And Conditions',
        link: '/terms-conditions',
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
        title: 'About',
        description:
            `The Pro-Delivery module simplifies the process of applying for academic documents like transcripts and certificates. Students can remotely request their documents, and ProGuide handles everything from the application to delivery. This hassle-free service saves time, eliminates long queues, and ensures students get their documents efficiently and stress-free.`,
    },
    {
        title: 'ProGuide’s Mission',
        description:
            `To Help every student achieve their academic and career goals with ease.`
    },
    {
        title: 'Vision',
        description:
            `To empower every student to achieve their academic goals by providing seamless access to top-tier mentors, tutors, academic services, and essential documents—all accessible remotely from any connected device.`
    },
]

export const coreValues = [
    {
        heading: `Excellence`,
        content: ` – We strive to provide the highest quality academic support and services, ensuring that students have access to the best resources for success.`
    },
    {
        heading: `Accessibility`,
        content: ` – Making academic tools, mentors, and services available to all students, regardless of location or circumstances.`
    },
    {
        heading: `	Innovation`,
        content: ` – Continuously enhancing our platform to offer cutting-edge solutions that simplify learning and academic processes.`
    },
    {
        heading: `Integrity`,
        content: ` – Upholding transparency and trust in every service we provide, ensuring reliable and secure delivery of academic documents and mentorship.`
    },
    {
        heading: `Student-Centeredness`,
        content: ` – Prioritizing the needs and success of students, tailoring our services to support their academic goals.`
    }
]

// How the Pro - Delivery works
export const howItWorks = [
    {
        heading: `Request for a Document`,
        content: `Student logs into the ProGuide portal, selects the desired document, and submits a request.`,
    },
    {
        heading: `Agent Processing`,
        content: `The request is assigned to a ProGuide team agent who initiates and handles the document processing.`
    },
    {
        heading: `Approval`,
        content: `Once processed and approved, the document is finalized and ready for delivery.`,
    },
    {
        heading: `Notifications to Students`,
        content: `The student is notified via WhatsApp, email, or other preferred channels that their document is ready for collection or delivery.`
    }
]

export const termsAndCondition = [
    {
        heading: `Permission to Act:`,
        content: `By applying through ProGuide, you grant us permission to follow up on the process on your behalf, provided you supply any necessary documents required for the application.`,

    },
    {
        heading: `Role Clarification:`,
        content: `ProGuide acts solely as a middleman in assisting you with the application and collection of your documents.`,
    },
    {
        heading: `Independence from University:`,
        content: `We are not affiliated with the University of Buea in any way and operate solely as an independent entity.`
    },
    {
        heading: `Document Handling:`,
        content: `ProGuide does not print the documents applied for.We follow the legal process of applying for and collecting them from the respective administrative offices before delivering them to the applicants.`
    },
    {
        heading: `Service Costs:`,
        content: `The cost of applying through ProGuide may be slightly higher than the in -school application fee, with the additional charge covering the services provided by ProGuide.`
    },
    {
        heading: `Processing Time:`,
        content: `While we may not guarantee the fastest process, we ensure the collection of your document, even if inconveniences arise from the client’s end.`
    },
    {
        heading: `Administrative Delays:`,
        content: `Unnecessary delays may occur due to factors like power failures, public holidays, congested applications, depleted receipt booklets, or the absence of certain administrative officers.In such cases, ProGuide will communicate with the client in advance, explaining the issue and presenting a receipt of application if viable, as proof of application.`
    },
    {
        heading: `Student - related Issues:`,
        content: `Delays may also result from student - related issues such as owing fees, wrong matriculation numbers, excess credits, or disciplinary measures.ProGuide is not responsible for resolving these issues.If students wish ProGuide to handle these, additional charges will apply.`
    },
    {
        heading: `Speed of Processing:`,
        content: `As ProGuide does not produce the documents, we cannot directly expedite the process.However, we strive to ensure that applicants receive their documents as soon as they are processed by the respective administrative offices.`
    },
    {
        heading: `Refund Policy:`,
        content: `Refunds are only issued if the application was not processed in due time, and the applicant has lodged a complaint and requested a refund.Once the application is processed and a receipt is obtained from the administration, no refund is valid.`
    },
    {
        heading: `Client Communication:`,
        content: `Clients have the right to contact any ProGuide administrator at any time to inquire about the application process.ProGuide also has a dedicated customer service team to assist when needed.`
    },
    {
        heading: `Payment Methods:`,
        content: `Payments are only accepted directly through our platform or through trusted agents whose contacts are available on our platform or official social media handles.Payments made through other methods will not be recognized by ProGuide.`
    },
    {

        heading: `Document Collection:`,
        content: `The primary location for document collection is the ProGuide office. Clients who prefer home delivery or delivery to a specific location can select this option during the application process, incurring an additional charge based on location. Delivery within the country is confirmed by the ProGuide Team before being effected.`
    },
    {
        heading: `Digital Delivery:`,
        content: `ProGuide can also scan and send documents to clients at a slightly lower cost, upon request.`
    },
    {
        heading: `Ensuring a Seamless Process:`,
        content: `All terms and conditions are established to ensure a seamless and efficient transcript application process.`
    }
]

export const declaimerContent = [
    {
        content: `ProGuide is not responsible for delays caused by administrative offices or unexpected circumstances.`
    },
    {
        content: `We cannot expedite the process beyond what is achievable within the administrative framework of the University of Buea.`
    },
    {
        content: `Refunds are subject to the conditions outlined above, and clients are advised to understand these terms before proceeding with their applications.`
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
