import { faEnvelope, faMobileAlt, faMapMarkerAlt, faCalendarDay, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const icons = {
    email: {
        icon: faEnvelope,
        default_text: ""
    },
    contact: {
        icon: faMobileAlt,
        default_text: ""
    },
    location: {
        icon: faMapMarkerAlt,
        default_text: ""
    },
    linkedIn: {
        icon: faLinkedin,
        default_text: "@linkedin"
    },
    dateOfBirth: {
        icon: faCalendarDay,
        default_text: ""
    },
    credly: {
        icon: faCertificate,
        default_text: "@credly"
    },
    github: {
        icon: faGithub,
        default_text: "@github"
    }
};

export default icons;