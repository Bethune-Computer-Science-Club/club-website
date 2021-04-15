import JoinUs from '../../images/JoinUs.png'
import BecomeAMember from '../../images/BecomeAMember.png'
import BCSCLogo from '../../images/BCSCLogo.png'

import {MainText} from '../../components/InfoSection/InfoSection.elements'

export const BannerData = {

    pageTitle: "Join Us",
    img: JoinUs,
    description: "This page contains information about how to become a member.",

}

export const InfoSectionData = [

    // who we are
    {
        description: "Are you interested in computer science, or would like to learn more about it? Would you like to connect with others who share the same passion for CS that you have? Then, the Bethune Computer Science Club is perfect for you! It doesn’t matter whether you’re an experienced programmer or have no programming experience whatsoever, people of all skill levels are welcome!",
        headline: "Who We Are",
        img: BCSCLogo,
        alt: "Who We Are",
    },

    // meetings
    {
        description: "We have meetings on Thursdays at 1:00 PM and 3:30 PM. Meetings last for about an hour, and they usually consist of a lesson and important announcements related to the club.",
        headline: "Meetings",
        //img: , {unspecified}
        alt: "Meetings",
    },

    // become a member
    {
        description: 
        <>
            <MainText>Want to become a member? Great! There’s only one requirement you must satisfy:</MainText>
            
            <ul>
                <li><MainText>You must currently be a student at Dr. Norman Bethune Collegiate Institute.</MainText></li>
            </ul>
            
            <MainText>If you meet the requirements to become a member, you can either:</MainText>
            
            <ul>
                <li><MainText>Email us at bcicodingclub@tdsb.on.ca</MainText></li>
                <li><MainText>Fill out this Google Form.</MainText></li>
                <li><MainText>Come to Room B216 on Thursdays after school.</MainText></li>
            </ul>
            
            <MainText>We will contact you with further instructions and provide you with a code to join our Google Classroom.</MainText>            
        </>,
        headline: "Become a Member",
        img: BecomeAMember,
        alt: "Become a Member",
    },

]