import React from 'react'

import ProjectCard from '../components/ProjectCard'

class Projects extends React.Component {
    render() {
        const posts = this.props.posts;
        const mini = this.props.mini;

        let classes = mini ? "w-25-ns w-25-m w-100 " : "w-50-ns w-50-m w-100 ";
        classes += "animatable mv4 pr4-ns pr3-m";

        return (
            <div className="flex flex-wrap">
                {
                    posts.map(({ node }) => {
                        return (
                            <div 
                            className={classes}
                            key={node.fields.slug}
                            >
                                <ProjectCard mini={mini} node={node}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;