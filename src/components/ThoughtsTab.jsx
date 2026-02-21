import Thought from "./Thought";

function ThoughtsTab() {

    let thoughts = [
        {image: "/poster-newspaper.png", title: "Newspaper Style Poster Prompt", link: "/blog/newspaper-background-quote-prompt", description: "Visit for prompt"}
        ]
    
    return(
    <div className="mt-[24px]">
    {thoughts.map((project, index) => (
        <Thought 
        key={index}
        image={project.image}
        title={project.title}
        link={project.link}
        description={project.description} />
    ))}
    
    </div>
    )
}

export default ThoughtsTab;