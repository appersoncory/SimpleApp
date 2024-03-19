import { React } from 'react';

function TopicsPage() {
    return (
       <>
<h2>Web Development Concepts</h2>
                <nav class="local">
                    <a href="#servers">Web Servers</a>
                    <a href="#design">Frontend Design</a>
                    <a href="#images">Optimizing Images</a>
                    <a href="#favicons">Favicon</a>
                </nav>
                <article id="servers">
                    <h3>Web Servers</h3>
                    <p>A website's designated <strong>home page</strong>, typically named index.html or similar, is the default page served by a server when a user visits the root of a website. This acts as the primary entry point and landing page for the website, automatically displayed when no specific file is requested.</p>
                    <p>The <strong>Inspector</strong>'s Network tab shows details of each file requested by the browser, including HTTP requests, status codes, file sizes, types, and loading times, along with HTTP headers and server IP addresses. When viewing from a web server, these details are comprehensive, showing network-specific information like request/response cycles and performance metrics. In contrast, viewing from a local computer lacks these network details, showing only local file paths without HTTP requests and server-related information, as the files are accessed directly from the local file system, not over a network.</p>
                    <p>The inspector shows a 200 <strong>status code</strong> as it is being automatically provided by the OSU server, whereas main.js and main.css show as 404 as they do not exist and are not provided in any way.</p>
                    <p>The <strong>URL</strong> https://web.engr.oregonstate.edu/~appersoc/a1-appersoc consists of https as the <strong>scheme</strong>, indicating a secure, encrypted connection. 'Web' and 'engr' are the <strong>subdomains</strong> of the <strong>host domain</strong> oregonstate.edu. The <strong>resource path</strong> is /~appersoc/a1-appersoc points to the specified directory. </p>                  
                </article>
                <article id="design">
                    <h3>Frontend Design</h3>
                    <p><strong>Frontend design</strong> focuses on crafting the user interface and experience, blending layout, design, and interactivity for an easy to use and engaging experience. It encompasses the strategic use of color, fonts, and media to convey emotion and ensure readability, alongside intuitive icons and graphical user interface (GUI) elements for easy navigation. The goal to create visually appealing, accessible, and responsive designs across various devices, focusing on user engagement, ease of use, and overall aesthetic harmony to enhance user satisfaction.</p>
                    <p><strong>The Five "E"s of Usability:</strong></p>
                    <p>
                        Usability and inclusivity in product design are encapsulated by the Five Es, focusing on creating an effective, efficient, easily navigable, error-free, and enjoyable user experience. This approach ensures users can achieve their goals accurately and quickly, understand and remember how to use the product even as first-time users, encounter minimal errors tailored to their specific needs, and find the overall experience engaging enough to return.
                    </p>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Helps users meet their goals with accurate results.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Enables users to perform tasks quickly with the least number of steps.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Intuitive for first-time and returning users to find their goals.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Avoids accessibility and availability issues by understanding common user errors.</dd>
                        <dt><strong>Enjoyable</strong></dt>
                        <dd>Engaging and tailored to the unique needs of the intended audience, encouraging repeat visits.</dd>
                    </dl>
                    <p><strong>Layout Tags:</strong></p>
                    <p>The <strong>&lt;body&gt;</strong> tag in HTML serves as the main container for all the visible content of a webpage. The <strong>&lt;main&gt;</strong> tag denotes the primary content of the document, distinct from recurring content. The <strong>&lt;section&gt;</strong> tag defines a specific section within the document, often grouping related content. The <strong>&lt;article&gt;</strong> tag is used for self-contained, independent pieces of content, like a blog post or news article. The <strong>&lt;footer&gt;</strong> tag specifies the footer section, usually containing copyright and contact information. Lastly, the <strong>&lt;header&gt;</strong> tag represents the header of a document, containing introductory content or navigational links.</p>
                    <p><strong>Anchor Links:</strong></p>
                    <p>Anchor links are a key navigation tool in web design, used for linking to external sites, navigating to specific sections within a page using fragment identifiers, and for moving between different pages of the same website. </p>
                    <ol>
                        <li><strong>External Content:</strong> Anchors link to external content use a URL to direct the user to a different website or domain.</li>
                        <li><strong>Internal Content:</strong> Anchors link to internal content utilize a fragment identifier (like #section1) to navigate to a specific part of the same webpage.</li>
                        <li><strong>Page-to-Page:</strong> Anchors for page-to-page navigation use URLs that direct the user to different pages within the same website or domain.</li>
                    </ol>
                </article>
                <article id="images">
                    <h3>Optimizing Images</h3>
                    <p>There are many aspects to consider when it comes to optimizing images for a website.</p>
                    <p>There are six major specifications for optimizing web images: Descriptive file names for SEO, small file size for faster loading, exact dimensions to fit web space, correct file format for optimal display, reduced resolution to match screen capabilities, and appropriate color mode for image quality. These specifications ensure efficient loading, effective search engine optimization, and optimal visual quality.</p>
                    <p>For image <strong>file formats</strong> .JPG is most appropriate due to its balance of quality and file size, and for line art, .GIF or 8-bit .PNG are suitable for their ability to handle simple colors and transparency effectively.</p>
                </article>
                <article id="favicons">
                    <h3>Favicons</h3>
                    <p>Browsers and devices use favicons to enhance user navigation and recognition, and are utilized in many different ways, and for different purposes.</p>
                    <p>Favicons serve multiple purposes in enhancing user experience across web browsers: they appear on browser tabs, aiding users in quickly identifying and navigating between different websites; when a user bookmarks a webpage, the favicon is typically displayed alongside the page title in the bookmark list, making it easier to recognize; and in browser history, favicons are often shown next to website titles, facilitating swift identification of previously visited sites.</p>
                    <p>They also appear in some browsers' address bars for website identification, serve as app icons on mobile home screens when websites are added, and feature in search results for brand recognition.</p>
                    <p>Favicons are usually .PNGs, .ICOs, or .SVGs, though in certain cases other formarts may be used, and some browsers event support animated .GIF favicons.</p>
                </article>
        </>
    );
}
export default TopicsPage;