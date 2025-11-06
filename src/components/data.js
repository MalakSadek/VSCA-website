import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

// Images from public folder
const benefitOneImg = "/IMG_8409.jpeg";
const benefitTwoImg = "/IMG_8400.jpeg";

const benefitOne = {
  title: "The VSCA Framework",
  desc: "The VSCA Framework (Value-Sensitive Conversational Agent Framework) is here to help you and your team develop conversational agents (software that users interact with through conversation, such as chatbots, including those based on Large Language Models, voice assistants, and so on) that align with the values of all the stakeholders involved (also called value-sensitive conversational agents).",
  image: benefitOneImg,
  link: {
    text: "Learn about how we work",
    href: "/about",
  },
  bullets: [
    {
      title: "Stakeholder-Centered",
      desc: "Stakeholders are anyone with 'stake' in the conversational agent. I.e. anyone who is responsible for creating it, cares about it, is impacted by it, or benefits from it.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Value-Driven",
      desc: "Values are concepts that are important to people or that they believe in such as trust, autonomy, transparency, and privacy.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Inclusive Design",
      desc: "That means that your conversational agents will respect and uphold the values of the people directly and indirectly involved in creating it and are being affected by it (this includes your users of course!).",
      icon: <ChatBubbleLeftRightIcon />,
    },
  ],
};

const benefitTwo = {
  title: "A Practical Toolkit",
  desc: "While a 'framework' sounds generic and abstract, what it really represents is a number of activities that you can build into existing design processes and workflows to adapt and centre them around stakeholders' values.",
  image: benefitTwoImg,
  link: {
    text: "Learn how to get involved",
    href: "/contact",
  },
  bullets: [
    {
      title: "Ready-to-Use Tools",
      desc: "What you actually get out of this is a toolkit full of different tools and information on how to carry these steps out with different stakeholders practically. All you have to do is bring people together and follow the activities, without rebuilding the wheel from scratch or redefining how you and your team work.",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Build Your Team's Capabilities",
      desc: "Not only does the framework and toolkit help with your current projects, it also helps train you and your team so that you can create human-centred and value-sensitive conversational AI more seamlessly going forward.",
      icon: <AcademicCapIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
