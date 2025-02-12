const terminal = document.querySelector('.terminal');
const input = document.querySelector('.terminal input');

const projectSection = document.querySelector('#projects');
const skillsSection = document.querySelector('#skills');
const aboutSection = document.querySelector('#about');


//**************************************************


document.addEventListener('keydown', (event) => {
    const inputValue = input.value.toLowerCase();

    if(event.key === ":") openTerminal();
    
    if(event.key === "Escape" || inputValue === "exit"){ terminal.style.display = "none"; input.value = ""; }
    else if(event.key === 'Enter'){
        if(inputValue === "help" || inputValue === "helps"){ showHelps(); }
        else if(inputValue === "" || inputValue === " "){ terminal.querySelector('p').innerHTML = "" }
        else if(inputValue === "project" || inputValue === "projects"){ showAndHideSections('projects'); }
        else if(inputValue === "skill" || inputValue === "skills"){ showAndHideSections('skills'); }
        else if(inputValue === "about"){ showAndHideSections('about'); }
        else{ terminal.querySelector('p').innerHTML = `Unknown command: ${inputValue}`; }
        
        event.preventDefault();
    }
});


//**************************************************

let openTerminal = () => {
    terminal.style.display = "flex";
    input.focus();
    event.preventDefault(); 
};

let showHelps = () => { terminal.querySelector('p').innerHTML = "Available commands: <br> help, projects, skills, about"; }

let showAndHideSections = (section) => {
    const sections = { projects: projectSection, skills: skillsSection, about: aboutSection };
    const sectionDisplay = sections[section].style.display;

    Object.values(sections).forEach(section => section.style.display = "none");
    sections[section].style.display = sectionDisplay !== "block" ? "block" : "none";
};

let helpCommand = () => {
    openTerminal();
    input.value = "help";
    showHelps();
};

//**************************************************