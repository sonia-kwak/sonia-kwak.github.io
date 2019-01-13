import React from 'react'

import ProjectCard from '../components/ProjectCard'

class Projects extends React.Component {
    render() {
        const posts = this.props.posts;

        return (
            <div className="flex flex-wrap">
                {
                    posts.map(({ node }) => {
                        return (
                            <div className="project-card animatable w-50-ns mv5-ns pr4-ns pr3-m mv4 w-50-m w-100">
                                <ProjectCard node={node}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;