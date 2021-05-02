import React from 'react'

const footerIconsClasses = 'pl3-ns pr0-ns pr3 pl0 dim gray';

const Footer = () => (
    <div className="flex flex-row-ns flex-column pv6 f7 w-100 gray justify-between layoutMaxWidth center">
        <div className="mw6-ns lh-copy">
            Prototyped in <a target="_blank" rel="noopener noreferrer" className="link gray underline" href="https://www.figma.com/">Figma</a> and handcrafted in <a target="_blank" rel="noopener noreferrer" className="link gray underline" href="https://reactjs.org/">React</a> and <a target="_blank" rel="noopener noreferrer" className="link gray underline" href="https://www.gatsbyjs.com/">Gatsby.js</a>.
            
            <br/>
            
            Fonts by <a target="_blank" rel="noopener noreferrer" className="link gray underline" href="https://pangrampangram.com/">Pangram</a> and <a target="_blank" rel="noopener noreferrer" className="link gray underline" href="https://fonts.google.com/">Google Fonts</a>.
        </div>
        <div className="mv4 mv0-ns">
            <a
                className={footerIconsClasses}
                href="https://twitter.com/cmdalbem">
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'
                    viewBox='0 0 612 612'>
                    <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z'
                    />
                </svg>
                {/* Twitter */}
            </a>
            <a
                className={footerIconsClasses}
                href="https://www.linkedin.com/in/cmdalbem/">
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'
                    viewBox='0 0 430.117 430.117'>
                    <path d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z'
                    />
                </svg>
                {/* LinkedIn */}
            </a>
        </div>
    </div>
)

export default Footer
