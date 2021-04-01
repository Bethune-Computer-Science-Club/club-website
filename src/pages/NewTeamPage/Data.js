import teamImg from '../../images/teamImg.png'
import { CurrentExecData } from './CurrentExecData.json'
import { PastExecData } from './PastExecData.json'
import { TeacherData } from './TeacherData.json'
import { WebsiteCreatorData } from './WebsiteCreatorData.json'

export const StartingSectionParameters = {
  headingText: 'Team',
  image: teamImg,
  descriptionText: "This is the list of current and past executives of Bethune’s computer science club! They’re amazing people who are very passionate about programming, and love to teach others about it!"
}

export const CurrentExecParameters = {
  heading: 'Current Executive Team',
  sliderData: CurrentExecData,
}

export const PastExecParameters = {
  heading: 'Graduated Executives',
  sliderData: PastExecData,
}

export const TeachersParameters = {
  heading: 'Teacher Supervisors',
  sliderData: TeacherData,
}

export const WebsiteCreatorParameters = {
  heading: 'Website Creators',
  sliderData: WebsiteCreatorData,
}