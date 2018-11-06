import React from 'react'

class HomeSection extends React.Component {
    render() {
        const { title, description, children, fullScreen } = this.props;
        const anchor = title.toLowerCase();

        // const containerClasses = `${fullScreen && 'bg-near-white nl4-ns nr4-ns'}`;
        const containerClasses = '';

        return (
            <section id={anchor} className={containerClasses}>
                <div className="mb4 mt7-ns mt4 flex flex-row-ns flex-column items-top">
                    <div className="w-30-ns pt3 pr4">
                        <div className="w-100 bt bw1 b--dark-gray"></div>
                    </div>

                    <div className="w-20-ns">
                        <h2 className="f3 fw8 mv0-ns mv4 dark-gray">{title}</h2>

                        {
                            description &&
                            <p className="f7">
                                {description}
                            </p>
                        }
                    </div>

                    {
                        !fullScreen &&
                        <div className='w-30-ns f5 mt0'>
                            {children}
                        </div>
                    }
                </div>

                {
                    fullScreen &&
                    <div className={`flex flex-row-ns flex-column`}>
                        <div className='w-100-ns'>
                            {children}
                        </div>
                    </div>
                }
            </section>
        )
    };
};

export default HomeSection
