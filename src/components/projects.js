import React from 'react'

import ProjectCard from '../components/ProjectCard'

class Projects extends React.Component {
    render() {
        const posts = this.props.posts;

        return (
            <div className="flex flex-wrap nl3 nr3">
                {
                    posts.map(({ node }) => {
                        return (
                            <div className="w-third-ns ph3-ns mv5-ns w-50-m ph2-m mv3 w-100">
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