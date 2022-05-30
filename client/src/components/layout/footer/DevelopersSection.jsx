import DeveloperInfo from "./DeveloperInfo";

const DevelopersSection = () => {
    return (
        <>
            <DeveloperInfo name="Marcos Bazbih" info="24 years old, Ashdod"
                email="marcosbazbih@gmail.com"
                linkedin="https://www.linkedin.com/in/marcos-bazbih/"
                github="https://github.com/Marcos-Bazbih"
                img="/images/marcos_img.jpg" />
            <DeveloperInfo name="Tikva Yosef" info="26 years old, Natanya"
                email="tikvayosef13@gmail.com"
                linkedin="https://www.linkedin.com/in/tikva-yosef-406bba223/"
                github="https://github.com/TikvaYosef"
                img="/images/tikva_img.jpeg" />
            <DeveloperInfo name="Avi Admaso" info="26 years old, Ashdod"
                email="aviadmaso@gmail.com"
                linkedin="https://www.linkedin.com/in/avi-admaso-a47b13218/"
                github="https://github.com/avi-admaso"
                img="/images/avi_img.jpeg" />
        </>
    );
};

export default DevelopersSection;