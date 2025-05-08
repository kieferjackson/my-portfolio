/** Project 1 - copoly-calc */
function CopolyCalc() {
    return <p>
        During the Summer of 2021, I was an undergraduate student working in Dr. Timothy Long's research lab at Arizona
        State University (ASU), where I assisted in the synthesis of novel copolymers. Part of that work included formulating
        "copolymer series", which are essentially groups of copolymers with the same comonomers in varying ratios to produce different
        material properties. Calculating these series could be a lengthy process due to the sheer number of factors involved, and my 
        desire for a less manual process spurred me on to create a computer program that would streamline those calculations. Over 
        the course of a month, I developed the first iteration of the program as a command-line program built only with C++. Subsequently, 
        I rewrote the program entirely as a web application using only vanilla HTML, CSS, and JavaScript. In its final and current iteration, 
        I rebuilt the web application using React to leverage its potent state management in order to provide a superior user-experience.
    </p>
}

/** Project 2 - merchant-alchemist */
function MerchantAlchemist() {
    return <p>
        For the final project of my Full Stack Development Bootcamp with the University of Arizona, I and three other group
        members of my choosing developed a simple web game using React for the frontend and a combination of MongoDB and GraphQL
        for the backend. Our vision was that the game would feature three key systems: (1) a shop where the player could purchase 
        potion ingredients with currency, (2) the ability to transform purchased ingredients into potions, and (3) allowing the
        player to sell any of their crafted potions to non-playable adventure characters. We were given two weeks to complete the
        project before we were required to present our finished game to the entire cohort, including planning, coding, and asset 
        creation. Each group member played a pivotal role in the project, but my role was critical in several respects, encompassing
        everything from planning/organization to coding and creating art assets. In addition, I acted as the group leader, charging
        individual members with tasks based on their skillsets and stepping in whenever a teammate required assistance. In the end,
        all of our contributions resulted with overwhelming praise from both the program instructors and our fellow peers alike.
    </p>
}

/** Project 3 - connect-talk-therapy */
function ConnectTalkTherapy() {
    return <p>
        Towards the end of 2023, my eldest brother had decided to start his own private practice since he had recently
        acquired his Ph.D. in Psychology. Considering my experience with full stack web development, I volunteered my
        free time to build his company website, which I opted to build using the Python's Django framework for the web
        server. Django was chosen for its suite of features related to security, in addition to the ease with which it 
        allows defining database schemas and adding middleware. Despite being employed full-time and it being my first 
        deployed Django application, the project was completed in only two months and released in a polished state. since
        then, I have continued to tweak the website as needed, with the last major update adding a blog feature which leverages
        Google's Blogger API. Rather than implementing the API interface into the Django application itself, I created
        a separate API built with the FastAPI framework which communicates with the Django web server directly. I opted
        for this approach so that the API could be easily replaced in the future without affecting the Django app, and 
        also because the standalone API 
    </p>
}

export default {
    "copoly-calc": CopolyCalc,
    "merchant-alchemist": MerchantAlchemist,
    "connect-talk-therapy": ConnectTalkTherapy
}