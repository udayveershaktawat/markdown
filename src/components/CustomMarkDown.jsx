import React, { useState } from "react";
import ReactDOM from "react-dom";
import { marked } from "marked";
import Markdown from 'react-markdown';


import "./styles.css";

// Allows line breaks with return button
marked.setOptions({
  breaks: true,
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html.
const renderer = new marked.Renderer();



const CustomMarkDown = () => {
  // const [markdown, setmarkdown] = useState(placeholder);
return (< Markdown>{placeholder}</Markdown>

)
  return (
    <div
    id="previewer"
    dangerouslySetInnerHTML={{
      __html: marked(placeholder, { renderer: renderer }),
    }}
  />
    // <div>
    //   {/* <h1 className="title">React Markdown Previewer</h1> */}
    //   {/* <div className="AppWrap">
    //     <div className="EditorWrap">
    //       <Toolbar text="Editor" />
    //       <Editor
    //         markdown={markdown}
    //         onChange={(e) => {
    //             setmarkdown(e.event.target);
    // //         }}
    //     //   />
    //     // </div> */}
    //     <div className="PreviewerWrap">
    //       {/* <Toolbar text="Previewer" /> */}
    //       <Previewer markdown={markdown} />
    //     </div>
    //   </div>
    // // </div>
  );
};

//  export default CustomMarkDown
//   {
//   constructor(props) {
//     super(props);
//     this.state = {
//       markdown: placeholder
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       markdown: e.target.value
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1 className="title">React Markdown Previewer</h1>
//         <div className="AppWrap">
//           <div className="EditorWrap">
//             <Toolbar text="Editor" />
//             <Editor
//               markdown={this.state.markdown}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="PreviewerWrap">
//             <Toolbar text="Previewer" />
//             <Previewer markdown={this.state.markdown} />
//           </div>
//         </div>
//       </div>
//     );
//   }

const Toolbar = (props) => {
  return <div className="toolbar">{props.text}</div>;
};

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"
    />
  );
};

const Previewer = (props) => {
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer }),
      }}
    />
  );
};

const placeholder = `
# Exploring Leading Job Opportunities in Construction and Contracting in the Middle East
The Middle East, with its rapidly evolving skyline and ambitious infrastructure projects, presents a wealth of opportunities for professionals in the construction and contracting sectors. From towering skyscrapers to expansive transportation networks, the region is a hub of activity where your skills and expertise can contribute to high-quality, successful building projects. In this blog post, we will delve into the exciting prospects available in the Middle East, highlighting key projects, roles, and the benefits of working in this dynamic environment.
## The Booming Construction Industry in the Middle East
The Middle East has become synonymous with large-scale, high-profile construction projects. Cities like Dubai, Abu Dhabi, Doha, and Riyadh are continually investing in infrastructure, driven by ambitious visions such as Saudi Arabia’s Vision 2030 and the UAE’s Expo 2020. This growth translates into a myriad of opportunities for construction professionals across various disciplines.
### Key Construction Projects
1. **NEOM City, Saudi Arabia**: A $500 billion project aimed at creating a new futuristic city that spans over 10,000 square miles. This project promises innovative urban planning and cutting-edge technology integration, making it a hotspot for construction talent.
2. **Dubai Creek Harbour, UAE**: Home to what will be the world's tallest tower, this project is an example of Dubai’s ongoing commitment to pioneering architectural feats.
2. **Qatar’s 2022 FIFA World Cup Stadiums**: With numerous stadiums either being built or renovated, Qatar offers extensive opportunities in both construction and project management roles.
3. **Kuwait’s Silk City**: A $100 billion development project that includes a new airport, a rail network, and a port, promising a wide range of construction and engineering opportunities.
# In-Demand Jobs for Blue-Collar Workers in Construction and Contracting in the Middle East
The construction boom in the Middle East has created a substantial demand for blue-collar workers. These essential workers form the backbone of construction projects, ensuring that the ambitious architectural and infrastructural visions of the region come to life. In this post, we will explore some of the most in-demand blue-collar jobs in the construction and contracting industry in the Middle East, highlighting the roles, required skills, and the benefits of pursuing these opportunities.
### Key Blue-Collar Roles in Construction and Contracting
1. **Construction Laborers**
![alt text](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGQSpsQFCle7laSJftcUCREagkTiy8dAG1pQCa-fSRBWDADoRE) 

**Role**: Construction laborers perform a variety of tasks on construction sites, including loading and unloading materials, operating machinery, and assisting skilled tradespeople. **Skills Required**: Physical stamina, ability to follow instructions, basic understanding of construction practices. **Benefits**: Opportunities for training and career advancement, exposure to a variety of construction techniques.

2. **Electricians**

**Role**: Electricians install, maintain, and repair electrical systems in buildings and infrastructure projects. **Skills Required**: Knowledge of electrical systems, ability to read blueprints, certification or relevant training.**Benefits**: High demand for skilled electricians, potential for lucrative earnings.

3. **Plumbers**

**Role**: Plumbers are responsible for installing and repairing piping systems, fixtures, and other plumbing equipment. **Skills Required**: Proficiency in plumbing systems, ability to read and interpret blueprints, technical training. **Benefits**: Consistent demand for plumbing services, potential for high earnings and job stability.

4. **Masons**

**Role**: Masons work with bricks, concrete blocks, and other materials to construct walls, foundations, and other structures. **Skills Required**: Knowledge of masonry techniques, physical strength, precision, and attention to detail. **Benefits**: Opportunities to work on high-profile projects, potential for career advancement.

5. **Carpenters**

**Role**: Carpenters build and install frameworks, structures, and fixtures made from wood and other materials. **Skills Required**: Proficiency in carpentry tools and techniques, ability to read blueprints, attention to detail. **Benefits**: High demand for skilled carpenters, diverse range of projects, potential for career growth.

6. **Welders**

**Role**: Welders join metal parts together using various welding techniques, essential for the construction of steel frameworks and other structures. **Skills Required**: Welding certification, knowledge of different welding techniques, attention to safety protocols. **Benefits**: High demand in the construction of infrastructure projects, opportunities for specialization.

7. **Heavy Equipment Operators**

**Role**: Heavy equipment operators control machinery such as excavators, bulldozers, and cranes to move earth, lift heavy materials, and perform other tasks. **Skills Required**: Certification and training on specific machinery, spatial awareness, attention to safety. **Benefits**: Essential role in large-scale projects, potential for high earnings.
### Benefits of Working in the Middle East for Blue-Collar Workers
1. **Competitive Salaries**: Blue-collar workers in the Middle East often earn competitive wages, with the added benefit of tax-free income in many countries.
2. **High Demand**: The ongoing construction boom ensures a steady demand for skilled and unskilled labor, providing job stability and opportunities for long-term employment.
3. **Training and Development**: Many employers offer training programs, allowing workers to gain new skills and advance their careers within the industry.
4. **Diverse Work Environment**: Workers have the chance to collaborate with people from various cultural and professional backgrounds, enhancing their experience and networking opportunities.
5. **Accommodation and Benefits**: Many construction companies provide accommodation, transportation, and other benefits to their workers, making it easier to relocate for work.
## Online Job Search with Jobsown: Discover Thousands of Jobs in the Gulf
Looking for a job in the Gulf? Jobsown is here to help you find thousands of opportunities with ease. With Jobsown, you can create a free profile and immediately start searching and applying to numerous job openings, including 373 jobs in the Gulf. Our online process is straightforward and user-friendly.
Simply search by industry, job role, title, area, or even the company’s name to find the perfect job for you.
Some of the biggest recruiters in gulf 




`
export default CustomMarkDown;