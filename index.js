const lang = document.querySelector(".langChanger");
const langInfo = document.querySelector("label[for='langChanger']");
const langs = document.querySelector(".langSelect");
const lang1 = document.querySelector(".lang1")
const lang2 = document.querySelector(".lang2")
const lang3 = document.querySelector(".lang3")
const lang4 = document.querySelector(".lang4")
const lang5 = document.querySelector(".lang5")
lang.addEventListener("mouseenter", () => {
    langInfo.style.display = "block";
})
lang.addEventListener("mouseleave", () => {
    langInfo.style.display = "none";
})
lang.addEventListener("click", () => {
    langs.classList.toggle("show")
})
lang1.addEventListener("click", () => {
    lang.innerHTML = "हिंदी"
    langs.classList.toggle("show")
});
lang2.addEventListener("click", () => {
    lang.innerHTML = "English"
    langs.classList.toggle("show")
});
lang3.addEventListener("click", () => {
    lang.innerHTML = "मराठी"
    langs.classList.toggle("show")
});
lang4.addEventListener("click", () => {
    lang.innerHTML = "मराठी"
    langs.classList.toggle("show")
});
lang5.addEventListener("click", () => {
    lang.innerHTML = "తెలుగు"
    langs.classList.toggle("show")
})

// Download the Resume
function downloadFile() {
    const fileUrl = 'assets/AKV_RESUME_FINAL.pdf';
    const fileName = 'AKV_RESUME_FINAL.pdf';    

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



const theme = document.querySelector(".themeChanger");
const themeInfo = document.querySelector("label[for='themeChanger']")
const themes = document.querySelector(".themeSelect");
const light = document.querySelector(".theme1")
const dark = document.querySelector(".theme2")
const auto = document.querySelector(".theme3")
const activeTheme = document.querySelector(".activeTheme")
theme.addEventListener("mouseenter", () => {
    themeInfo.style.display = "block";
});
theme.addEventListener("mouseleave", () => {
    themeInfo.style.display = "none";
});
theme.addEventListener("click", () => {
    themes.classList.toggle("show");
});
light.addEventListener("click", ()=>{
    activeTheme.name = "sunny-outline";
    themes.classList.toggle("show");
    LightTheme();
});
dark.addEventListener("click", ()=>{
    activeTheme.name = "moon-outline";
    themes.classList.toggle("show");
    DarkTheme();
})
auto.addEventListener("click", ()=>{
    activeTheme.name = "contrast-outline";
    themes.classList.toggle("show");
    applyDeviceTheme();
    automatiChangeTheme();
})


// Rippple effect on hover in the NavBar

const container = document.querySelector('.Nav');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${x}px`; 
    wave.style.top = `${y}px`;

    container.appendChild(wave);
    setTimeout(() => {
        wave.remove();
    }, 1000);
});



// interaction skills functioning

function updateCircularProgressBar(element, percentage) {
    element.style.background = `conic-gradient(#be78ff ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg)`;
}

function transitionToTargetPercentage(elementId, targetPercentage) {
    const element = document.querySelector(elementId);
    let currentPercentage = 0;
    const increment = 1;
    const interval = setInterval(() => {
        currentPercentage += increment;
        updateCircularProgressBar(element, currentPercentage);
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
        }
    }, 10);
}

transitionToTargetPercentage(".Is1", 100);
transitionToTargetPercentage(".Is2", 80);
transitionToTargetPercentage(".Is3", 90);
transitionToTargetPercentage(".Is4", 80);



const body = document.body;
const header = document.querySelector(".NBar");
const footer = document.querySelector("footer");
const services = document.querySelector(".myServices");
const allServices = document.querySelectorAll("#major");
const inputs = document.querySelectorAll('input');
const Gratitude = document.querySelector(".gratitude");
const gratitude = document.querySelector("#gratitude");
// const Servicesss = document.querySelector(".majorContainer")


function DarkTheme() {
    body.style.color = "white";
    body.style.backgroundColor = "#1c1c1c";
    if (header) header.style.color = "black";
    footer.style.backgroundColor = "#222";
    footer.style.color = "white";
    services.style.backgroundColor = "#222";
    allServices.forEach(service => {
        service.style.backgroundColor = "#333";
        service.style.color = "white";
    });
    inputs.forEach(input => {
        input.style.setProperty('--input-border-color', 'white');
        input.style.setProperty('--placeholder-color', 'white');
        // input.style.backgroundColor = '#1e1e1e';
        input.style.color = 'white';
        input.style.border = "1px solid white";
      });
    document.querySelector("textarea").style.border = "1px solid white";
    document.querySelector("textarea").style.color = "white";
    document.querySelectorAll("#sh").forEach(sh =>{sh.style.border = "1px solid white";})
}

function LightTheme() {
    body.style.color = "#1c1c1c";
    body.style.backgroundColor = "rgb(255, 250, 241)";
    // if (header) header.style.backgroundColor = "#ffffff";
    footer.style.backgroundColor = "beige";
    footer.style.color = "#1c1c1c";
    services.style.backgroundColor = "beige";
    inputs.forEach(input => {
        input.style.setProperty('--input-border-color', 'white');
        input.style.setProperty('--placeholder-color', 'white');
        // input.style.backgroundColor = '#1e1e1e';
        input.style.color = 'black';
        input.style.border = "1px solid black";
      });
    allServices.forEach(service => {
        service.style.backgroundColor = "black";
        service.style.color = "black";
    });
    // Servicesss.style.backgroundColor = "black";
    document.querySelector("textarea").style.border = "1px solid black";
    document.querySelector("textarea").style.color = "black";
    document.querySelectorAll("#sh").forEach(sh =>{sh.style.border = "1px solid black";})
}

function detectDeviceTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        return "dark"; // Device is set to dark mode
    } else {
        return "light"; // Device is set to light mode
    }
}
const currentTheme = detectDeviceTheme();
// console.log(`The current device theme is: ${currentTheme}`);

function applyDeviceTheme() {
    const theme = detectDeviceTheme();
    if (theme === "dark") {
        DarkTheme();
    } else {
        LightTheme();
    }
}
// applyDeviceTheme();

function automatiChangeTheme(){
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (e.matches) {
            // console.log("Switched to dark mode");
            applyDeviceTheme();
        } else {
            // console.log("Switched to light mode");
            applyDeviceTheme();
        }
    });
}

// Footer Functions 
const map = document.querySelector(".iCircle5")
const mapUrl = `https://www.google.com/maps/place/Jamshedpur,+Jharkhand/@22.7840072,86.0933682,12z/data=!3m1!4b1!4m6!3m5!1s0x39f5e31989f0e2b5:0xeeec8e81ce9b344!8m2!3d22.8045665!4d86.2028754!16zL20vMDF0dGp4?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D`;
map.addEventListener("click", () =>{
    window.open(mapUrl, '_blank');
})
const form = document.querySelector("form")
form.addEventListener("submit", () =>{
    event.preventDefault();
})

function sendMail() {
    const email = 'ayushhhVerma07@gmail.com';  
    const subject = 'Inquiry Regarding Your Portfolio';     
    const body = `I would love to discuss potential opportunities for collaboration or to explore how we might work together on future projects.
    Best regards,
    [Ayush Verma]
    `; 

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

const sendRespone = () =>{
    const UserMailValue = document.querySelector(".Qemail");
    const userSubjetValue = document.querySelector(".Qsubject");
    const userMessageValue = document.querySelector("textarea");
    const userName = document.querySelector(".Fname");
    const userContact = document.querySelector(".Qphn");

    const email = 'ayushhhVerma07@gmail.com';
    const subject = userSubjetValue.value;
    const message = userMessageValue.value;
    const name = userName.value;
    const contact = userContact.value;
    const mail = UserMailValue.value;
    const body = `Dear [${name}],
    Thank you for reaching out to me. I am excited to discuss our potential collaboration and to explore how we might work together on future projects. I'll get back to you shortly with more details.
    My contact details are:
    Email: ${mail}
    Phone: ${contact}
    My Message: ${message}
    `

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    const btn = document.querySelector(".sendMessage");
    btn.addEventListener("click", ()=>{
        if(UserMailValue && userSubjetValue && userMessageValue && userName && userContact){
            sendRespone();
        }else{
            alert("Please fill all the fields.");
        }
    })
}

// Language Selection

const navLang = document.querySelector(".Nav");
const label1 = document.querySelector("label[for = 'themeChanger']");
const label2 = document.querySelector("label[for = 'langChanger']");
const myInfo = document.querySelector(".myInfo2");
const skillHead = document.querySelector(".Skillset");
const interactiveHead = document.querySelector(".interactiveSet");
const interactiveSkills = document.querySelector(".interactSkill");
const footerPart = document.querySelector(".footerUpcontainer");
const CR = document.querySelector(".CR");

const english = () => {
    navLang.innerHTML = `
            <div class="sNav1">Ayush Verma</div>
            <div class="sNav2"><ul><li>Main-Frame</li><li>Projects</li><li>Skills</li><li>About</li></ul></div>
            <div class="sNav3"><span class="sNav3_1">Interact</span></div>
    `;
    label1.innerText = "Change Theme";
    label2.innerText = "Change Language";
    themes.innerHTML = `
        <div id="allTheme" class="theme1"><ion-icon name="sunny-outline"></ion-icon>&nbsp;Light</div>
        <div id="allTheme" class="theme2"><ion-icon name="moon-outline"></ion-icon>&nbsp;Dark</div>
        <div id="allTheme" class="theme3"><ion-icon name="contrast-outline"></ion-icon>&nbsp;Auto</div>
    `;
    myInfo.innerHTML = `
            <div class="availability"><ion-icon name="radio-button-on"></ion-icon>Available for hiring!</div>
            <div class="PostInfo">Full Stack Website & Application Developer</div>
            <div class="postDesc">Hi, Im Ayush Verma, 19 Y.o. and I've a degree in BCA from ARYABHATT KNOWLDEGE UNIVERSITY(Patna) along with that Im a Freelancer too. Currently I holds the skillset of Full Stack Web Development along with
                that I have a hold in DSA too and im planning to be working on AI integration as well.
                Find much about me in further section ahead!
                <span class="pingMe">Feel free to ping me if you find myself suitable for you!</span></div>
                <div class="ReachMe">
                <div class="email">Mail here</div>
                <div class="resume">Resume  </div>
    `;
    skillHead.innerHTML = `Skill-Set`;
    interactiveHead.innerText = `Interactive Skills`;
    interactiveSkills.innerHTML = `
            <div id="is" class="Is1">Communication</div>
            <div id="is" class="Is2">Creativity</div>
            <div id="is" class="Is3">Multi-Tasking</div>
            <div id="is" class="Is4">Problem Solving</div>
    `;
    services.innerHTML = `
            <span class="mySer">My Services</span>
            <span class="ServiceSlogan">Elevate Your Online Presence With Me</span>
            <span class="serviceDesc">Crafric User-Centric Websites and Applications for Seamless Digital Experience</span>
            <div class="majorContainer">
                <div class="major1" id="major"><div id="logos" class="logo1"><img src="./assets/ux.png" alt="" class="logos"></div>
                    <span class="serviceInfo1">Website Design & Development</span><span class="serviceDesc1">Custome website design and development tailored to <br> your brand and business needs.</span>
                </div>
                <div class="major2" id="major"><div id="logos" class="logo2"><img src="./assets/data-analysis.png" alt="" class="logos"></div>
                    <span class="serviceInfo2">User Research & Analysis</span><span class="serviceDesc2">Conduct user research to understand your target audience, their needs and behaviors.</span>
                </div>
                <div class="major3" id="major"><div id="logos" class="logo3"><img src="./assets/user-interface.png" alt="" class="logos"></div>
                    <span class="serviceInfo3">App Design & Develoment</span><span class="serviceDesc3">Custome website design and development tailored to <br> your brand and business needs.</span>
                </div>
                <div class="major4" id="major"><div id="logos" class="logo4"><img src="./assets/backend.png" alt="" class="logos"></div>
                    <span class="serviceInfo4">Full Stack Development</span><span class="serviceDesc4">Designing, developing, and maintaining both client-side and server-side components of web applications.</span>
                </div>
            </div>
    `;
    footerPart.innerHTML = `
        <div class="footerSection1">
                <span class="fs1Head">Get in Touch</span>
                <span class="fs1Desc">Have any queries or need my assistance? Reach me here!</span>
                <form action="">
                    <div class="formPart1">
                        <input id="allInputs" type="text" placeholder="Your full name here..." class="Fname">
                        <input id="allInputs" type="email" placeholder="Your email here..." class="Qemail">
                    </div>
                    <div class="formPart2">
                        <input id="allInputs" type="text" placeholder="Your Contact here..." class="Qphn">
                        <input id="allInputs" type="text" placeholder="Subject" class="Qsubject">
                    </div>
                    <div class="formPart3">
                        <textarea id="allInputs" uneditable name="text" placeholder="Your message here..." id=""></textarea>
                    </div>
                    <button class="sendMessage">Send Message</button>
                </form>
                <span id="gratitude">Grateful for your visit! Your support and feedback <br> inspire me to keep creating.</span>
        </div>
        <div class="footerSection2">
            <div class="infoCircle">
                <div class="iCircle1"><ion-icon class="detailIcons" name="call-outline"></ion-icon> </div>
                <div class="iCircle2"></div>
                <div class="iCircle3"><ion-icon class="detailIcons" name="mail-outline"></ion-icon></div>
                <div class="iCircle4"></div>
                <div class="iCircle5"><ion-icon class="detailIcons" name="location-outline"></ion-icon></div>
                <div class="infoDetails">
                    <span class="details1">+91-9142315603&nbsp;</span><span class="details2">ayushhhVerma07@gmail.com</span><span class="details3">Jamshedupur, Jharkhand</span>
                </div>
            </div>
            <span class="subscribeHead">Subscribe</span>
            <input id="subscribe" placeholder="Your mail here..." type="email"><button class="subscribe">Submit</button>
            <span class="subDesc">Get updated for newsletter and upcoming projects directly in your mail box.</span>
            <span class="gratitude">Thank you for stopping by! This portfolio is a glimpse into my work and the journey that drives me forward. I appreciate your time and interest—it’s the encouragement I need to keep growing. Don’t hesitate to reach out or share your thoughts!</span>
        </div>
    `;
    CR.innerHTML = `© 2025 Your Name. All rights reserved.`;
};
const hindi = () => {
    navLang.innerHTML = `
            <div class="sNav1">आयुष वर्मा</div>
            <div class="sNav2"><ul><li>मुख्य फ्रेम</li><li>परियोजनाएं</li><li>कुशलता</li><li>मेरे बारे में</li></ul></div>
            <div class="sNav3"><span class="sNav3_1">वार्तालाप</span></div>
    `
    label1.innerText = "थीम बदलें";
    label2.innerText = "भाषा बदलें";
    themes.innerHTML = `
        <div id="allTheme" class="theme1"><ion-icon name="sunny-outline"></ion-icon>&nbsp;हल्का</div>
        <div id="allTheme" class="theme2"><ion-icon name="moon-outline"></ion-icon>&nbsp;गहरा</div>
        <div id="allTheme" class="theme3"><ion-icon name="contrast-outline"></ion-icon>&nbsp;स्वचालित</div>
    `;
    myInfo.innerHTML = `
            <div class="availability"><ion-icon name="radio-button-on"></ion-icon>नौकरी के लिए उपलब्ध!</div>
            <div class="PostInfo">फुल स्टैक वेबसाइट और एप्लिकेशन डेवलपर</div>
            <div class="postDesc">नमस्ते, मैं आयुष वर्मा, 19 वर्ष का हूं और मैंने आर्यभट्ट नॉलेज यूनिवर्सिटी (पटना) से बीसीए की डिग्री प्राप्त की है। इसके साथ ही मैं एक फ्रीलांसर भी हूं। वर्तमान में मेरे पास फुल स्टैक वेब डेवलपमेंट का कौशल है और साथ ही डीएसए में भी मेरी पकड़ है। मैं एआई इंटीग्रेशन पर काम करने की योजना बना रहा हूं।
            आगे के अनुभाग में मेरे बारे में अधिक जानें!
            <span class="pingMe">अगर आपको लगता है कि मैं आपके लिए उपयुक्त हूं, तो मुझे पिंग करने में संकोच न करें!</span></div>
            <div class="ReachMe">
                <div class="email">यहां मेल करें</div>
                <div class="resume">रिज़्यूमे</div>
            </div>
    `;
    skillHead.innerHTML = `कौशल-सेट`;
    interactiveHead.innerText = `इंटरएक्टिव कौशल`;
    interactiveSkills.innerHTML = `
            <div id="is" class="Is1">संचार</div>
            <div id="is" class="Is2">सृजनात्मकता</div>
            <div id="is" class="Is3">बहु-कार्य करना</div>
            <div id="is" class="Is4">समस्या हल करना</div>
    `;
    services.innerHTML = `
            <span class="mySer">मेरी सेवाएँ</span>
            <span class="ServiceSlogan">मेरे साथ अपनी ऑनलाइन उपस्थिति को ऊँचा उठाएं</span>
            <span class="serviceDesc">क्राफ्रिक उपयोगकर्ता-केंद्रित वेबसाइट्स और एप्लिकेशंस जो निर्बाध डिजिटल अनुभव प्रदान करती हैं</span>
            <div class="majorContainer">
                <div class="major1" id="major"><div id="logos" class="logo1"><img src="./assets/ux.png" alt="" class="logos"></div>
                    <span class="serviceInfo1">वेबसाइट डिज़ाइन और विकास</span><span class="serviceDesc1">कस्टम वेबसाइट डिज़ाइन और विकास जो आपके ब्रांड और व्यापार की आवश्यकताओं के अनुसार तैयार किया गया है।</span>
                </div>
                <div class="major2" id="major"><div id="logos" class="logo2"><img src="./assets/data-analysis.png" alt="" class="logos"></div>
                    <span class="serviceInfo2">उपयोगकर्ता शोध और विश्लेषण</span><span class="serviceDesc2">आपके लक्षित दर्शकों, उनकी आवश्यकताओं और व्यवहारों को समझने के लिए उपयोगकर्ता शोध करना।</span>
                </div>
                <div class="major3" id="major"><div id="logos" class="logo3"><img src="./assets/user-interface.png" alt="" class="logos"></div>
                    <span class="serviceInfo3">ऐप डिज़ाइन और विकास</span><span class="serviceDesc3">कस्टम ऐप डिज़ाइन और विकास जो आपके ब्रांड और व्यापार की आवश्यकताओं के अनुसार तैयार किया गया है।</span>
                </div>
                <div class="major4" id="major"><div id="logos" class="logo4"><img src="./assets/backend.png" alt="" class="logos"></div>
                    <span class="serviceInfo4">फुल स्टैक विकास</span><span class="serviceDesc4">वेब एप्लिकेशंस के क्लाइंट-साइड और सर्वर-साइड घटकों का डिज़ाइन, विकास और रखरखाव।</span>
                </div>
            </div>
    `;
    footerPart.innerHTML = `
            <div class="footerSection1">
                <span class="fs1Head">संपर्क करें</span>
                <span class="fs1Desc">कोई सवाल है या मेरी मदद की आवश्यकता है? मुझसे यहां संपर्क करें!</span>
                <form action="">
                    <div class="formPart1">
                        <input id="allInputs" type="text" placeholder="यहां अपना पूरा नाम डालें..." class="Fname">
                        <input id="allInputs" type="email" placeholder="यहां अपनी ईमेल डालें..." class="Qemail">
                    </div>
                    <div class="formPart2">
                        <input id="allInputs" type="text" placeholder="यहां अपना संपर्क नंबर डालें..." class="Qphn">
                        <input id="allInputs" type="text" placeholder="विषय" class="Qsubject">
                    </div>
                    <div class="formPart3">
                        <textarea id="allInputs" uneditable name="text" placeholder="यहां अपना संदेश डालें..." id=""></textarea>
                    </div>
                    <button class="sendMessage">संदेश भेजें</button>
                </form>
                <span id="gratitude">आपकी यात्रा के लिए आभारी हूं! आपकी मदद और प्रतिक्रिया <br> मुझे रचनात्मक बनाए रखने के लिए प्रेरित करती है।</span>
            </div>
            <div class="footerSection2">
                <div class="infoCircle">
                    <div class="iCircle1"><ion-icon class="detailIcons" name="call-outline"></ion-icon> </div>
                    <div class="iCircle2"></div>
                    <div class="iCircle3"><ion-icon class="detailIcons" name="mail-outline"></ion-icon></div>
                    <div class="iCircle4"></div>
                    <div class="iCircle5"><ion-icon class="detailIcons" name="location-outline"></ion-icon></div>
                    <div class="infoDetails">
                        <span class="details1">+91-9142315603&nbsp;</span><span class="details2">ayushhhVerma07@gmail.com</span><span class="details3">जमशेदपुर, झारखंड</span>
                    </div>
                </div>
                <span class="subscribeHead">सदस्यता लें</span>
                <input id="subscribe" placeholder="यहां अपनी ईमेल डालें..." type="email"><button class="subscribe">सबमिट करें</button>
                <span class="subDesc">न्यूज़लेटर और आगामी परियोजनाओं के लिए सीधे अपने मेलबॉक्स में अपडेट प्राप्त करें।</span>
                <span class="gratitude">यहां आने के लिए धन्यवाद! यह पोर्टफोलियो मेरे काम और उस यात्रा की झलक है जो मुझे आगे बढ़ाती है। आपके समय और रुचि की सराहना करता हूं—यह वही प्रोत्साहन है जिसकी मुझे जरूरत है। मुझसे संपर्क करने या अपने विचार साझा करने में संकोच न करें!</span>
            </div>
    `;
    CR.innerHTML = `© 2025 आपका नाम। सर्वाधिकार सुरक्षित।`;
};
const bengali = () => {
    navLang.innerHTML = `
            <div class="sNav1">আয়ুষ ভার্মা</div>
            <div class="sNav2"><ul><li>মেইন-ফ্রেম</li><li>প্রকল্প</li><li>দক্ষতা</li><li>সম্পর্কে</li></ul></div>
            <div class="sNav3"><span class="sNav3_1">ইন্টারঅ্যাক্ট</span></div>

    `
    label1.innerText = "থিম পরিবর্তন করুন";
    label2.innerText = "ভাষা পরিবর্তন করুন";
    themes.innerHTML = `
        <div id="allTheme" class="theme1"><ion-icon name="sunny-outline"></ion-icon>&nbsp;হালকা</div>
        <div id="allTheme" class="theme2"><ion-icon name="moon-outline"></ion-icon>&nbsp;গাঢ়</div>
        <div id="allTheme" class="theme3"><ion-icon name="contrast-outline"></ion-icon>&nbsp;স্বয়ংক্রিয়</div>
    `   
    myInfo.innerHTML = `
            <div class="availability"><ion-icon name="radio-button-on"></ion-icon>চাকরির জন্য উপলব্ধ!</div>
            <div class="PostInfo">ফুল স্ট্যাক ওয়েবসাইট এবং অ্যাপ্লিকেশন ডেভেলপার</div>
            <div class="postDesc">নমস্কার, আমি আয়ুষ ভার্মা, ১৯ বছর বয়সী এবং আমি আর্যভট্ট নলেজ ইউনিভার্সিটি (পাটনা) থেকে বিএসএ ডিগ্রি অর্জন করেছি। এর পাশাপাশি আমি একজন ফ্রিল্যান্সারও। বর্তমানে আমার ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট দক্ষতা রয়েছে এবং পাশাপাশি ডিএসএ-তে আমার ভালো দক্ষতা রয়েছে। আমি এআই ইন্টিগ্রেশনের উপর কাজ করার পরিকল্পনা করছি।
            আমার সম্পর্কে আরও জানুন সামনে!
            <span class="pingMe">আপনি যদি আমাকে উপযুক্ত মনে করেন, তবে আমাকে পিং করতে দ্বিধা করবেন না!</span></div>
            <div class="ReachMe">
                <div class="email">এখানে মেল করুন</div>
                <div class="resume">রেজুমে</div>
            </div>
    ` ;
    skillHead.innerHTML = `দক্ষতা সেট`;
    interactiveHead.innerText = `ইন্টারঅ্যাকটিভ দক্ষতা`;
    interactiveSkills.innerHTML = `
            <div id="is" class="Is1">যোগাযোগ</div>
            <div id="is" class="Is2">সৃজনশীলতা</div>
            <div id="is" class="Is3">মাল্টি-টাস্কিং</div>
            <div id="is" class="Is4">সমস্যা সমাধান</div>
    `;
    services.innerHTML = `
            <span class="mySer">আমার সেবা</span>
            <span class="ServiceSlogan">আমার সাথে আপনার অনলাইন উপস্থিতি উন্নীত করুন</span>
            <span class="serviceDesc">ক্রাফ্রিক ব্যবহারকারী-কেন্দ্রিক ওয়েবসাইট এবং অ্যাপ্লিকেশনগুলি যা সুনির্দিষ্ট ডিজিটাল অভিজ্ঞতা প্রদান করে</span>
            <div class="majorContainer">
                <div class="major1" id="major"><div id="logos" class="logo1"><img src="./assets/ux.png" alt="" class="logos"></div>
                    <span class="serviceInfo1">ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট</span><span class="serviceDesc1">কাস্টম ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট যা আপনার ব্র্যান্ড এবং ব্যবসায়িক প্রয়োজন অনুযায়ী তৈরি করা হয়।</span>
                </div>
                <div class="major2" id="major"><div id="logos" class="logo2"><img src="./assets/data-analysis.png" alt="" class="logos"></div>
                    <span class="serviceInfo2">ব্যবহারকারী গবেষণা এবং বিশ্লেষণ</span><span class="serviceDesc2">আপনার লক্ষ্যযুক্ত দর্শকদের, তাদের প্রয়োজনীয়তা এবং আচরণ বুঝতে ব্যবহারকারী গবেষণা পরিচালনা করা।</span>
                </div>
                <div class="major3" id="major"><div id="logos" class="logo3"><img src="./assets/user-interface.png" alt="" class="logos"></div>
                    <span class="serviceInfo3">অ্যাপ ডিজাইন এবং ডেভেলপমেন্ট</span><span class="serviceDesc3">কাস্টম অ্যাপ ডিজাইন এবং ডেভেলপমেন্ট যা আপনার ব্র্যান্ড এবং ব্যবসায়িক প্রয়োজন অনুযায়ী তৈরি করা হয়।</span>
                </div>
                <div class="major4" id="major"><div id="logos" class="logo4"><img src="./assets/backend.png" alt="" class="logos"></div>
                    <span class="serviceInfo4">ফুল স্ট্যাক ডেভেলপমেন্ট</span><span class="serviceDesc4">ওয়েব অ্যাপ্লিকেশনের ক্লায়েন্ট-সাইড এবং সার্ভার-সাইড উপাদানগুলির ডিজাইন, ডেভেলপমেন্ট এবং রক্ষণাবেক্ষণ।</span>
                </div>
            </div>
    `;
    footerPart.innerHTML = `
            <div class="footerSection1">
                <span class="fs1Head">যোগাযোগ করুন</span>
                <span class="fs1Desc">কোনো প্রশ্ন বা সাহায্যের প্রয়োজন? এখানে যোগাযোগ করুন!</span>
                <form action="">
                    <div class="formPart1">
                        <input id="allInputs" type="text" placeholder="এখানে আপনার পুরো নাম লিখুন..." class="Fname">
                        <input id="allInputs" type="email" placeholder="এখানে আপনার ইমেইল লিখুন..." class="Qemail">
                    </div>
                    <div class="formPart2">
                        <input id="allInputs" type="text" placeholder="এখানে আপনার যোগাযোগ নম্বর লিখুন..." class="Qphn">
                        <input id="allInputs" type="text" placeholder="বিষয়" class="Qsubject">
                    </div>
                    <div class="formPart3">
                        <textarea id="allInputs" uneditable name="text" placeholder="এখানে আপনার বার্তা লিখুন..." id=""></textarea>
                    </div>
                    <button class="sendMessage">বার্তা পাঠান</button>
                </form>
                <span id="gratitude">আপনার আগমনের জন্য ধন্যবাদ! আপনার সহায়তা এবং প্রতিক্রিয়া <br> আমাকে সৃজনশীল রাখতে অনুপ্রাণিত করে।</span>
            </div>
            <div class="footerSection2">
                <div class="infoCircle">
                    <div class="iCircle1"><ion-icon class="detailIcons" name="call-outline"></ion-icon> </div>
                    <div class="iCircle2"></div>
                    <div class="iCircle3"><ion-icon class="detailIcons" name="mail-outline"></ion-icon></div>
                    <div class="iCircle4"></div>
                    <div class="iCircle5"><ion-icon class="detailIcons" name="location-outline"></ion-icon></div>
                    <div class="infoDetails">
                        <span class="details1">+91-9142315603&nbsp;</span><span class="details2">ayushhhVerma07@gmail.com</span><span class="details3">জমশেদপুর, ঝাড়খণ্ড</span>
                    </div>
                </div>
                <span class="subscribeHead">সাবস্ক্রাইব করুন</span>
                <input id="subscribe" placeholder="এখানে আপনার ইমেইল লিখুন..." type="email"><button class="subscribe">জমা দিন</button>
                <span class="subDesc">নিউজলেটার এবং আসন্ন প্রকল্পগুলির জন্য সরাসরি আপনার মেইলবক্সে আপডেট পান।</span>
                <span class="gratitude">ধন্যবাদ এখানে আসার জন্য! এই পোর্টফোলিও আমার কাজ এবং সেই যাত্রার একটি ঝলক যা আমাকে এগিয়ে নিয়ে যায়। আমি আপনার সময় এবং আগ্রহের প্রশংসা করি—এটা আমাকে উন্নতি করতে উত্সাহিত করে। নির্দ্বিধায় আমার সাথে যোগাযোগ করুন বা আপনার মতামত শেয়ার করুন!</span>
            </div>
    `;
    CR.innerHTML = `© 2025 আপনার নাম। সমস্ত অধিকার সংরক্ষিত।`;
};
const marathi = () => {
    navLang.innerHTML = `
            <div class="sNav1">आयुष वर्मा</div>
            <div class="sNav2"><ul><li>मुख्य फ्रेम</li><li>प्रकल्प</li><li>कौशल्ये</li><li>माझ्याबद्दल</li></ul></div>
            <div class="sNav3"><span class="sNav3_1">परस्पर संवाद</span></div>

    `
    label1.innerText = "थीम बदला";
    label2.innerText = "भाषा बदला";
    themes.innerHTML = `
        <div id="allTheme" class="theme1"><ion-icon name="sunny-outline"></ion-icon>&nbsp;हलके</div>
        <div id="allTheme" class="theme2"><ion-icon name="moon-outline"></ion-icon>&nbsp;गडद</div>
        <div id="allTheme" class="theme3"><ion-icon name="contrast-outline"></ion-icon>&nbsp;स्वयंचलित</div>
    `
    myInfo.innerHTML = `
            <div class="availability"><ion-icon name="radio-button-on"></ion-icon>नोकरीसाठी उपलब्ध!</div>
            <div class="PostInfo">फुल स्टॅक वेबसाइट आणि अ‍ॅप्लिकेशन डेव्हलपर</div>
            <div class="postDesc">नमस्कार, मी आयुष वर्मा, १९ वर्षांचा असून माझ्याकडे आर्यभट्ट नॉलेज युनिव्हर्सिटी (पटना) येथून बीसीएची पदवी आहे. त्याचबरोबर मी एक फ्रीलांसर आहे. सध्या माझ्याकडे फुल स्टॅक वेब डेव्हलपमेंटचे कौशल्य आहे आणि डीएसएमध्येही माझी चांगली पकड आहे. मी एआय इंटिग्रेशनवर काम करण्याचा विचार करत आहे.
            माझ्याबद्दल अधिक जाणून घ्या पुढील विभागात!
            <span class="pingMe">जर तुम्हाला वाटले की मी तुमच्यासाठी योग्य आहे, तर मला पिंग करायला मोकळ्या मनाने पुढे या!</span></div>
            <div class="ReachMe">
                <div class="email">येथे मेल करा</div>
                <div class="resume">रेझ्युमे</div>
            </div>
    `;
    skillHead.innerHTML = `कौशल्य संच`;
    interactiveHead.innerText = `इंटरएक्टिव कौशल्ये`;
    interactiveSkills.innerHTML = `
            <div id="is" class="Is1">संपर्क</div>
            <div id="is" class="Is2">सृजनशीलता</div>
            <div id="is" class="Is3">बहुउद्देशीय काम करणे</div>
            <div id="is" class="Is4">समस्या सोडवणे</div>
    `;
    services.innerHTML = `
            <span class="mySer">माझी सेवा</span>
            <span class="ServiceSlogan">माझ्यासोबत तुमची ऑनलाइन उपस्थिती उंचाव करा</span>
            <span class="serviceDesc">क्राफ्रिक वापरकर्ता-केंद्रित वेबसाइट्स आणि अनुप्रयोग जे निर्बाध डिजिटल अनुभव प्रदान करतात</span>
            <div class="majorContainer">
                <div class="major1" id="major"><div id="logos" class="logo1"><img src="./assets/ux.png" alt="" class="logos"></div>
                    <span class="serviceInfo1">वेबसाइट डिझाइन आणि विकास</span><span class="serviceDesc1">कस्टम वेबसाइट डिझाइन आणि विकास जे तुमच्या ब्रँड आणि व्यवसायाच्या गरजा लक्षात घेऊन तयार केले आहे.</span>
                </div>
                <div class="major2" id="major"><div id="logos" class="logo2"><img src="./assets/data-analysis.png" alt="" class="logos"></div>
                    <span class="serviceInfo2">वापरकर्ता संशोधन आणि विश्लेषण</span><span class="serviceDesc2">तुमच्या लक्ष्यित प्रेक्षकांची, त्यांची आवश्यकताआणि वर्तन समजून घेण्यासाठी वापरकर्ता संशोधन करा.</span>
                </div>
                <div class="major3" id="major"><div id="logos" class="logo3"><img src="./assets/user-interface.png" alt="" class="logos"></div>
                    <span class="serviceInfo3">ऍप डिझाइन आणि विकास</span><span class="serviceDesc3">कस्टम ऍप डिझाइन आणि विकास जे तुमच्या ब्रँड आणि व्यवसायाच्या गरजा लक्षात घेऊन तयार केले आहे.</span>
                </div>
                <div class="major4" id="major"><div id="logos" class="logo4"><img src="./assets/backend.png" alt="" class="logos"></div>
                    <span class="serviceInfo4">फुल स्टॅक डेव्हलपमेंट</span><span class="serviceDesc4">वेब अनुप्रयोगांच्या क्लायंट-साइड आणि सर्व्हर-साइड घटकांचे डिझाइन, विकास आणि देखभाल.</span>
                </div>
            </div>
    `;
    footerPart.innerHTML = `
            <div class="footerSection1">
                <span class="fs1Head">संपर्क करा</span>
                <span class="fs1Desc">कोणतेही प्रश्न किंवा मदतीची आवश्यकता आहे का? येथे संपर्क करा!</span>
                <form action="">
                    <div class="formPart1">
                        <input id="allInputs" type="text" placeholder="तुमचे पूर्ण नाव इथे टाका..." class="Fname">
                        <input id="allInputs" type="email" placeholder="तुमची ईमेल इथे टाका..." class="Qemail">
                    </div>
                    <div class="formPart2">
                        <input id="allInputs" type="text" placeholder="तुमचा संपर्क नंबर इथे टाका..." class="Qphn">
                        <input id="allInputs" type="text" placeholder="विषय" class="Qsubject">
                    </div>
                    <div class="formPart3">
                        <textarea id="allInputs" uneditable name="text" placeholder="तुमचा संदेश इथे टाका..." id=""></textarea>
                    </div>
                    <button class="sendMessage">संदेश पाठवा</button>
                </form>
                <span id="gratitude">तुमच्या भेटीबद्दल आभारी आहे! तुमच्या समर्थनामुळे आणि अभिप्रायामुळे <br> मला रचनात्मक राहण्यास प्रेरणा मिळते.</span>
            </div>
            <div class="footerSection2">
                <div class="infoCircle">
                    <div class="iCircle1"><ion-icon class="detailIcons" name="call-outline"></ion-icon> </div>
                    <div class="iCircle2"></div>
                    <div class="iCircle3"><ion-icon class="detailIcons" name="mail-outline"></ion-icon></div>
                    <div class="iCircle4"></div>
                    <div class="iCircle5"><ion-icon class="detailIcons" name="location-outline"></ion-icon></div>
                    <div class="infoDetails">
                        <span class="details1">+91-9142315603&nbsp;</span><span class="details2">ayushhhVerma07@gmail.com</span><span class="details3">जमशेदपूर, झारखंड</span>
                    </div>
                </div>
                <span class="subscribeHead">सदस्यता घ्या</span>
                <input id="subscribe" placeholder="तुमची ईमेल इथे टाका..." type="email"><button class="subscribe">सबमिट करा</button>
                <span class="subDesc">न्यूजलेटर आणि आगामी प्रकल्पांसाठी थेट तुमच्या मेलबॉक्समध्ये अपडेट मिळवा.</span>
                <span class="gratitude">इथे थांबल्याबद्दल धन्यवाद! हे पोर्टफोलिओ माझ्या कामाचे आणि त्या प्रवासाचे एक झलक आहे ज्यामुळे मला पुढे जाण्याची प्रेरणा मिळते. तुमच्या वेळेची आणि आवडीची कदर करतो—हेच माझ्या वाढीचा प्रोत्साहन आहे. कृपया संपर्क करा किंवा तुमचे विचार शेअर करा!</span>
            </div>
    `;
    CR.innerHTML = `© 2025 तुमचं नाव. सर्व हक्क राखीव.`;
};
const telugu = () => {
    navLang.innerHTML = `
            <div class="sNav1">ఆయుష్ వర్మ</div>
            <div class="sNav2"><ul><li>ప్రధాన ఫ్రేమ్</li><li>ప్రాజెక్టులు</li><li>నైపుణ్యాలు</li><li>గురించి</li></ul></div>
            <div class="sNav3"><span class="sNav3_1">ఇంటరాక్ట్</span></div>

    `
    label1.innerText = "థీమ్ మార్చండి";
    label2.innerText = "భాష మార్చండి";
    themes.innerHTML = `
        <div id="allTheme" class="theme1"><ion-icon name="sunny-outline"></ion-icon>&nbsp;లైట్</div>
        <div id="allTheme" class="theme2"><ion-icon name="moon-outline"></ion-icon>&nbsp;డార్క్</div>
        <div id="allTheme" class="theme3"><ion-icon name="contrast-outline"></ion-icon>&nbsp;ఆటో</div>
    `
    myInfo.innerHTML = `
            <div class="availability"><ion-icon name="radio-button-on"></ion-icon>ఉద్యోగానికి అందుబాటులో!</div>
            <div class="PostInfo">ఫుల్ స్టాక్ వెబ్‌సైట్ & అప్లికేషన్ డెవలపర్</div>
            <div class="postDesc">హాయ్, నేను ఆయుష్ వర్మ, 19 ఏళ్ల వయస్సు మరియు నాకు ఆర్యభట్ట్ నోలెడ్జ్ యూనివర్సిటీ (పాట్నా) నుండి BCA డిగ్రీ ఉంది. అదనంగా, నేను ఫ్రీలాన్సర్ కూడా. ప్రస్తుతానికి నాకు ఫుల్ స్టాక్ వెబ్ డెవలప్‌మెంట్ నైపుణ్యం ఉంది, అలాగే డిఎస్‌ఏలో కూడా నాకు పట్టు ఉంది. నేను ఏఐ ఇంటిగ్రేషన్‌పై పని చేయాలని ప్లాన్ చేస్తున్నాను.
            <span class="pingMe">మీకు నేను మీకు సరిపోతున్నానని అనిపిస్తే, నన్ను పింగ్ చేయడానికి వెనకాడకండి!</span></div>
            <div class="ReachMe">
                <div class="email">ఇక్కడ</div>
                <div class="resume">రెజ్యూమ్</div>
            </div>
    `;
    skillHead.innerHTML = `నైపుణ్య సెట్`;
    interactiveHead.innerText = `ఇంటరాక్టివ్ నైపుణ్యాలు`;
    interactiveSkills.innerHTML = `
            <div id="is" class="Is1">సంప్రదింపు</div>
            <div id="is" class="Is2">సృజనాత్మకత</div>
            <div id="is" class="Is3">బహుళ పనులు చేయడం</div>
            <div id="is" class="Is4">సమస్యలను పరిష్కరించడం</div>
    `;
    services.innerHTML = `
            <span class="mySer">నా సేవలు</span>
            <span class="ServiceSlogan">నా సహాయంతో మీ ఆన్‌లైన్ ప్రెజెన్స్‌ను పెంచండి</span>
            <span class="serviceDesc">క్రాఫ్రిక్ యూజర్-కేంద్రిత వెబ్సైట్లు మరియు యాప్లికేషన్లు, ఇవి సజావుగా డిజిటల్ అనుభవాన్ని అందిస్తాయి</span>
            <div class="majorContainer">
                <div class="major1" id="major"><div id="logos" class="logo1"><img src="./assets/ux.png" alt="" class="logos"></div>
                    <span class="serviceInfo1">వెబ్సైట్ డిజైన్ మరియు అభివృద్ధి</span><span class="serviceDesc1">మీ బ్రాండ్ మరియు వ్యాపార అవసరాలను అనుగుణంగా కస్టమ్ వెబ్సైట్ డిజైన్ మరియు అభివృద్ధి.</span>
                </div>
                <div class="major2" id="major"><div id="logos" class="logo2"><img src="./assets/data-analysis.png" alt="" class="logos"></div>
                    <span class="serviceInfo2">వినియోగదారు పరిశోధన మరియు విశ్లేషణ</span><span class="serviceDesc2">మీ లక్ష్య ప్రేక్షకులను, వారి అవసరాలను మరియు ప్రవర్తనలను అర్థం చేసుకోవడానికి వినియోగదారు పరిశోధన చేయండి.</span>
                </div>
                <div class="major3" id="major"><div id="logos" class="logo3"><img src="./assets/user-interface.png" alt="" class="logos"></div>
                    <span class="serviceInfo3">అప్ డిజైన్ మరియు అభివృద్ధి</span><span class="serviceDesc3">మీ బ్రాండ్ మరియు వ్యాపార అవసరాలను అనుగుణంగా కస్టమ్ అప్ డిజైన్ మరియు అభివృద్ధి.</span>
                </div>
                <div class="major4" id="major"><div id="logos" class="logo4"><img src="./assets/backend.png" alt="" class="logos"></div>
                    <span class="serviceInfo4">ఫుల్ స్టాక్ డెవలప్మెంట్</span><span class="serviceDesc4">వెబ్సైట్ల క్లయింట్-సైడ్ మరియు సర్వర్-సైడ్ భాగాల డిజైన్, అభివృద్ధి మరియు నిర్వహణ.</span>
                </div>
            </div>
    `;
    footerPart.innerHTML = `
            <div class="footerSection1">
                <span class="fs1Head">సంప్రదించండి</span>
                <span class="fs1Desc">ఏదైనా ప్రశ్నలు లేదా సహాయం అవసరమా? ఇక్కడ నాకు చేరుకోండి!</span>
                <form action="">
                    <div class="formPart1">
                        <input id="allInputs" type="text" placeholder="ఇక్కడ మీ పూర్తి పేరు నమోదు చేయండి..." class="Fname">
                        <input id="allInputs" type="email" placeholder="ఇక్కడ మీ ఇమెయిల్ నమోదు చేయండి..." class="Qemail">
                    </div>
                    <div class="formPart2">
                        <input id="allInputs" type="text" placeholder="ఇక్కడ మీ సంప్రదింపు నంబర్ నమోదు చేయండి..." class="Qphn">
                        <input id="allInputs" type="text" placeholder="బিষయము" class="Qsubject">
                    </div>
                    <div class="formPart3">
                        <textarea id="allInputs" uneditable name="text" placeholder="ఇక్కడ మీ సందేశం నమోదు చేయండి..." id=""></textarea>
                    </div>
                    <button class="sendMessage">సందేశం పంపండి</button>
                </form>
                <span id="gratitude">మీరు వచ్చినందుకు ధన్యవాదాలు! మీ మద్దతు మరియు ఫీడ్‌బ్యాక్ <br> నాకు సృజనాత్మకంగా ఉండటానికి ప్రేరణ ఇస్తుంది.</span>
            </div>
            <div class="footerSection2">
                <div class="infoCircle">
                    <div class="iCircle1"><ion-icon class="detailIcons" name="call-outline"></ion-icon> </div>
                    <div class="iCircle2"></div>
                    <div class="iCircle3"><ion-icon class="detailIcons" name="mail-outline"></ion-icon></div>
                    <div class="iCircle4"></div>
                    <div class="iCircle5"><ion-icon class="detailIcons" name="location-outline"></ion-icon></div>
                    <div class="infoDetails">
                        <span class="details1">+91-9142315603&nbsp;</span><span class="details2">ayushhhVerma07@gmail.com</span><span class="details3">జమషెడ్‌పూర్, ఝార్ఖండ్</span>
                    </div>
                </div>
                <span class="subscribeHead">సబ్‌స్క్రయిబ్ చేయండి</span>
                <input id="subscribe" placeholder="ఇక్కడ మీ ఇమెయిల్ నమోదు చేయండి..." type="email"><button class="subscribe">సమర్పిం</button>
                <span class="subDesc">న్యూస్‌లెటర్ మరియు రాబోయే ప్రాజెక్టులు మీ.</span>
                <span class="gratitude">ఇక్కడ ఆగి ఉండటానికి ధన్యవాదాలు! ఈ పోర్ట్‌ఫోలియో నా పనికి మరియు నా ప్రగతి ప్రేరణకు ఒక దృశ్యం. మీ సమయాన్ని మరియు ఆసక్తిని నేను మెచ్చుకుంటున్నాను—ఇది నన్ను అభివృద్ధి చెందడానికి ప్రేరణ ఇస్తుంది. దయచేసి నా వెంట సంప్రదించండి లేదా మీ ఆలోచనలు పంచుకోండి!</span>
            </div>
    `;
    CR.innerHTML = `© 2025 మీ పేరు. అన్ని హక్కులు రిజర్వ్ చేయబడ్డవి.
    `;
};

const Hindi = document.querySelector(".lang1");
const English = document.querySelector(".lang2");
const Marathi = document.querySelector(".lang3");
const Bengali = document.querySelector(".lang4");
const Telugu = document.querySelector(".lang5");

Hindi.addEventListener("click", () => {
    hindi();
    transitionToTargetPercentage(".Is1", 100);
    transitionToTargetPercentage(".Is2", 80);
    transitionToTargetPercentage(".Is3", 90);
    transitionToTargetPercentage(".Is4", 80);
});

English.addEventListener("click", () => {
    english();
    transitionToTargetPercentage(".Is1", 100);
    transitionToTargetPercentage(".Is2", 80);
    transitionToTargetPercentage(".Is3", 90);
    transitionToTargetPercentage(".Is4", 80);
});

Marathi.addEventListener("click", () => {
    marathi();
    transitionToTargetPercentage(".Is1", 100);
    transitionToTargetPercentage(".Is2", 80);
    transitionToTargetPercentage(".Is3", 90);
    transitionToTargetPercentage(".Is4", 80);
});

Bengali.addEventListener("click", () => {
    bengali();
    transitionToTargetPercentage(".Is1", 100);
    transitionToTargetPercentage(".Is2", 80);
    transitionToTargetPercentage(".Is3", 90);
    transitionToTargetPercentage(".Is4", 80);
});

Telugu.addEventListener("click", () => {
    telugu();
    transitionToTargetPercentage(".Is1", 100);
    transitionToTargetPercentage(".Is2", 80);
    transitionToTargetPercentage(".Is3", 90);
    transitionToTargetPercentage(".Is4", 80);
});



// animation on scroll
// Select all elements to animate
const elementsToAnimate = document.querySelectorAll(
  '.langSelect, .themeSelect, .section2, .skillContainer, .interactSkill, .projectContainer, .myServices, .footerUpcontainer, .footerSection3'
);

// Observer options
const observerOptions = {
  root: null, // Observe within the viewport
  threshold: 0.2, // Trigger animation when 20% of the element is visible
};

// Intersection Observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add 'show' class to trigger animation
    }
  });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Attach observer to each element
elementsToAnimate.forEach(element => {
  element.classList.add('scroll-animation'); // Add initial animation class
  observer.observe(element); // Start observing
});



// Back to top functioning
const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
