import React from 'react'

class Reading extends React.Component {
    render() {
        let { books } = this.props;
        books = books.map( b => b.node.book );

        return (
            <div className="flex flex-wrap nl3-ns nr3-ns">
                {
                    books.map( book => <Book book={book}/> )
                }
            </div>
        )
    }
}

class Book extends React.Component {
    render() {
        const { book } = this.props;

        return (
            <a
                className="w-third-ns ph3-ns mb5-ns w-50-m ph2-m mb4 w-50 dim link flex flex-row"
                target="_blank"
                rel="noopener noreferrer"
                href={book.link}
            >
                <img className="card-shadow" src={book.imageUrl}></img>
                {/* <div className="flex flex-column ml3 near-black">
                    <div className="f4 fw6 lh-title">
                        {book.title}
                    </div>
                    <div className="f6">
                        by {book.authors[0].name}
                    </div>
                </div> */}
            </a>
        )
    }
}

export default Reading;