import React from 'react'

class Reading extends React.Component {
    render() {
        let { bookNodes } = this.props;

        bookNodes.finished = bookNodes.finished.reverse().slice(0, 3);

        return (
            <>
                <div className="flex flex-wrap nl3-ns nr3-ns">
                    {
                        bookNodes.reading.map(i =>
                            <Book mode="half" book={i.node.book}/>
                        )
                    }
                </div>
                
                <h2 className="dark-gray f5 mb4">Recently finished</h2>
                
                <div className="flex flex-wrap nl3-ns nr3-ns">
                    {
                        bookNodes.finished.map(i =>
                            <Book mode="mini" book={i.node.book}/>
                        )
                    }
                </div>
            </>
        )
    }
}

class Book extends React.Component {
    render() {
        const { book, mode } = this.props;

        let containerClasses = 'flex flex-row ph3-ns mb5-ns w-50-m ph2-m mb4 dim link ';
        let titleClasses = 'fw6 lh-title ';
        let subtitleClasses = '';

        switch(mode) {
            case 'half':
                containerClasses += "w-50";
                titleClasses += 'f6'
                subtitleClasses += 'f7'
                break;
            case 'full':
                containerClasses += "w-100";
                titleClasses += 'f4'
                subtitleClasses += 'f6'
                break;
            case 'mini':
                containerClasses += "w-third-ns w-50";
                break;
        }


        return (
            <a
                className={containerClasses}
                target="_blank"
                rel="noopener noreferrer"
                href={book.link}
            >
                <img className="card-shadow" src={book.imageUrl}></img>
                
                {
                    mode !== 'mini' &&
                    <div className="flex flex-column ml3 near-black">
                        <div className={titleClasses}>
                            {book.title}
                        </div>
                        <div className={subtitleClasses}>
                            by {book.authors[0].name}
                        </div>
                    </div>
                }
            </a>
        )
    }
}

export default Reading;