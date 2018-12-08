import React from 'react'

// import ProjectCard from './ProjectCard'
 
class Reading extends React.Component {
    render() {
        let { books } = this.props;

        books = books.map( b => b.node.book );

        console.log(books)

        return (
            <div className="flex flex-wrap nl3-ns nr3-ns">
                {
                    books.map( book => {
                        return (
                            <a 
                                className="w-third-ns ph3-ns mb5-ns w-50-m ph2-m mb4 w-100 dim link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={book.link}
                            >
                                <img className="card-shadow" src={book.imageUrl}></img>
                                {/* <div className="f5 mt2 near-black">
                                    {book.title}
                                </div> */}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Reading;