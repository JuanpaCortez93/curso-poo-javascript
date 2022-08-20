/*
//CREO OBJETO LITERAL
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(courseName) {
        this.cursosAprobados.push(courseName);
    }
};

//HACER QUE NATALIA APRUEBA
natalia.cursosAprobados.push("Curso de Responsive Desing");

natalia.name = "Nath";
natalia.age += 1;

natalia.aprobarCurso("Curso de Ruby");


//CREO PROTOTIPO
function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juan = new Student(
    "Juan Pablo",
    29,
    ["Curso de introducción a la producción de videojuegos",
    "Curso de Teletrabajo",
    "Curso de Product Mananger"
    ]
);

//CREACIÓN DE CLASES
class Student2 {
    constructor(name,age,approvedCourses,email,facebook,twitter,instagram){
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = email,
        this.facebook = facebook,
        this.twitter = twitter,
        this.instagram = instagram
    }

    aprobarCurso(courseName){
        this.approvedCourses.push(courseName);
    }
}

const pablo = new Student2(
    {
    name: "Pablo", 
    age: 28, 
    cursosAprobados: ["Análisis de negocios", "Principios de Visualización de Datos"]
    }
);

const juanpa = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: null,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    learningPaths: [
        {name: "Escuela de Desarrollo Web",
        courses: "Curso definitivo de HTML y CSS"},
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso introducción a la producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ]
        }
    ],  
}

const miguelito1 = {
    name: "Miguel",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: null,
    },
    approvedCourses: [
        "Curso DataBussines",
        "Curso DataViz"
    ],
    learningPaths: [
        {name: "Escuela de DataScience",
        courses: "Curso de Tableu",},
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso introducción a la producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ]
        }
    ],  
}
*/

/*
class LearningPath{
    constructor({
        name,
        courseName,
        difficulty,
        proffessor,
    }){
        this.name = name;
        this.courses = {
            courseName,
            difficulty,
            proffessor,
        }
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo Web",
    courseName: ["Curso de manejo de Consola", "Curso definitivo de CSS y HTML", "Curso de manejo de CSS Grid"],
    difficulty: [1,2,3],
    proffessor: ["Girafales","Longaniza","Don Ramón"],
});
*/

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ").");
        console.log(this.likes);
        console.log(this.content);
    }

    editar(){

    }
}

function videoPlay(id){
    const urlSecreta = "https://platzivideos.com/" + id;
    console.log("Se está reproduciendo desde " + urlSecreta)
}

function videoStop(id){
    const urlSecreta = "https://platzivideos.com/" + id;
    console.log("Se está pausando desde " + urlSecreta)
}

class PlatzoClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }

}

class StudentPlatzo {
    constructor(
        {
            name,
            username,
            email,
            twitter = undefined,
            instagram = undefined,
            facebook = undefined,
            approvedCourses = [],
            learningPaths = [],
        }
    ){
        this.name = name;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    postComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this._classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    get classes(){
        return this._classes;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }

    set classes(newName){
        this._classes = newName;
    }


}

class Class {
    constructor({
        name,
        professor,
    }){
        this.name = name;
        this.professor = professor;
    }
}

class FreeStudent extends StudentPlatzo{
    constructor(props){
        super(props);
    }

    approveCourses(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ". Solo puedes tomar cursos gratuitos");
        }
    }

}

class BasicStudent extends StudentPlatzo{
    constructor(props){
        super(props);
    }

    approveCourses(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ". No puedes tomar cursos en inglés");
        }
    }

}

class ExpertStudent extends StudentPlatzo{
    constructor(props){
        super(props);
    }

    approveCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }

}

class TeacherStudent extends StudentPlatzo{
    constructor(props){
        super(props);
    }

    approveCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }

    postComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "professor",
        });
        comment.publicar();
    }



}

//CREACIÓN CURSOS

const bienvenida = new Class({
    name: "Bienvenido al curso de programación básica",
    professor: "Juan Pablo Cortez",
})

const rutasip = new Class({
    name: "Rutas IP",
    professor: "Juan Pablo Cortez",
})

const introCSSGrid = new Class({
    name: "Introducción a CSS Grid",
    professor: "Juan Pablo Cortez",
})

const programacionBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: [bienvenida,rutasip], 
    isFree: true,
});

const cursoDefinitivoHTMLCSS = new Course({
    name: "Curso definitivo de HTML y CSS",
    classes: [introCSSGrid],
    lang: "english",
})

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        programacionBasica,
        cursoDefinitivoHTMLCSS,
        "Curso de CSS Grid"
    ]
})

const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        programacionBasica,
        "Curso DataBusiness",
        "Curso de DataViz"
    ]
})

const escuelaVgs = new LearningPath({
    name: "Escuela de videojuegos",
    courses: [
        programacionBasica,
        "Curso Producción de Videojuegos",
        "Curso de Unreal 3D"
    ]
})

//CREACIÓN INSTANCIAS DE CLASE -> OBJETOS

const juanpa1 = new FreeStudent({
    name: "Juanpa Cortez",
    username: "juanpa1",
    email: "juanpacortexz93@gmail.com",
    twitter: "jpcortez93",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const miguelito2 = new BasicStudent({
    name: "Miguel Criollo",
    username: "mcriollo",
    email: "mcriollo93@gmail.com",
    twitter: "mcriollo93",
    learningPaths: [
        escuelaDataScience,
    ]
});

const freddyVega = new TeacherStudent({
    name: "Freddy Vega",
    username: "fredier",
    email: "freddyer@gmail.com",
    twitter: "freddyer",
});

