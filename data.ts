import { faCodePullRequest, faFile, faHouse, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons"

export const signupField = [
    {
        label: 'Username',
        name: 'username',
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

export const whyCardData = [
    {
        imgSrc: '/assets/icon-1.png',
        title: 'Convenience and time management',
        content: 'We offer a seamless and convenient means for applicants to apply and receive their academic documents without  the need to physically visit school. Students or graduates ned not bother about time and mobility ',
    },
    {
        imgSrc: '/assets/icon-2.png',
        title: 'Convenience and time management',
        content: 'We offer a seamless and convenient means for applicants to apply and receive their academic documents without  the need to physically visit school. Students or graduates ned not bother about time and mobility ',
    },
    {
        imgSrc: '/assets/icon-3.png',
        title: 'Streamline communication',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
]

export const howWeWorkData = [
    {
        icon: '/assets/one.png',
        title: 'Request for a document',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
    {
        icon: '/assets/two.png',
        title: 'Agent processing',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
    {
        icon: '/assets/three.png',
        title: 'Admin approval',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
]

export const dashboardLink = [
    {
        icon: faHouse,
        link: '/dashboard',
        name: 'Dashboard'
    },
    {
        icon: faCodePullRequest,
        link: '/request-now',
        name: 'Request'
    },
    {
        icon: faMagnifyingGlassChart,
        link: '/profile',
        name: 'Tracking'
    },
    {
        icon: faFile,
        link: '/my-docs',
        name: 'My Docs'
    },
]

export const requestStatus = [
    'all', 'pending', 'in progress', 'completed', 'rejected'
]

export const requestData = [
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress'
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed'
    },
    {
        title: 'Transcript',
        id: '#12345',
        status: 'in progress'
    },
    {
        title: 'English Proficiency',
        id: '#12345',
        status: 'completed'
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

export const headerSignup = 'Pro-Delivery'
export const parSignup = 'Begin  an incredible  journey of success with us'
export const parLogin = 'Welcome back! Let’s pick up from where you ended'
export const parFogotPassword = 'Let’s  help your recover your ProGuide account'

export const socialIcon = ['/assets/google-logo.png', '/assets/facebook-lite-logo.png', '/assets/x-logo.png']
