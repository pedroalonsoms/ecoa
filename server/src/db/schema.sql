DROP TABLE IF EXISTS Prizes;
DROP TABLE IF EXISTS SurveyQuestion;
DROP TABLE IF EXISTS Survey;
DROP TABLE IF EXISTS TmpCourseTextAnswer;
DROP TABLE IF EXISTS TmpCourseNumericAnswer;
DROP TABLE IF EXISTS TmpTeacherTextAnswer;
DROP TABLE IF EXISTS TmpTeacherNumericAnswer;
DROP TABLE IF EXISTS CourseTextAnswer;
DROP TABLE IF EXISTS CourseNumericAnswer;
DROP TABLE IF EXISTS TeacherTextAnswer;
DROP TABLE IF EXISTS TeacherNumericAnswer;
DROP TABLE IF EXISTS Question;
DROP TABLE IF EXISTS Teaches;
DROP TABLE IF EXISTS Enrolled;
DROP TABLE IF EXISTS Classroom;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Teacher;
DROP TABLE IF EXISTS Administrator;
DROP TABLE IF EXISTS Student;

CREATE TABLE Student (
    id INT AUTO_INCREMENT,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Administrator (
    id INT AUTO_INCREMENT,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Teacher (
    id INT AUTO_INCREMENT,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Course (
    id INT AUTO_INCREMENT,
    title VARCHAR(64) NOT NULL,
    kind VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Classroom (
    id INT AUTO_INCREMENT,
    code INT NOT NULL,
    CRN INT NOT NULL,
    courseId INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (courseId) REFERENCES Course (id) ON DELETE CASCADE
);

CREATE TABLE Enrolled (
    classroomId INT NOT NULL,
    studentId INT NOT NULL,

    PRIMARY KEY (studentId, classroomId),
    FOREIGN KEY (studentId) REFERENCES Student (id) ON DELETE CASCADE,
    FOREIGN KEY (classroomId) REFERENCES Classroom (id) ON DELETE CASCADE
);

CREATE TABLE Teaches (
    classroomId INT NOT NULL,
    teacherId INT NOT NULL,

    PRIMARY KEY (teacherId, classroomId),
    FOREIGN KEY (teacherId) REFERENCES Teacher (id) ON DELETE CASCADE,
    FOREIGN KEY (classroomId) REFERENCES Classroom (id) ON DELETE CASCADE
);

CREATE TABLE Question (
    id INT AUTO_INCREMENT,
    title VARCHAR(512) NOT NULL,
    section VARCHAR(32) NOT NULL,
    answerKind VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE TeacherNumericAnswer (
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    score INT,

    PRIMARY KEY (teacherId, questionId),
    FOREIGN KEY (teacherId) REFERENCES Teacher (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE TeacherTextAnswer (
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024) NOT NULL,

    PRIMARY KEY (teacherId, questionId),
    FOREIGN KEY (teacherId) REFERENCES Teacher (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE CourseNumericAnswer (
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    score INT,

    PRIMARY KEY (courseId, questionId),
    FOREIGN KEY (courseId) REFERENCES Course (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE CourseTextAnswer (
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024),

    PRIMARY KEY (courseId, questionId),
    FOREIGN KEY (courseId) REFERENCES Course (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE TmpTeacherNumericAnswer (
    studentId INT NOT NULL,
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    score INT,
    
    PRIMARY KEY (studentId, teacherId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id) ON DELETE CASCADE,
    FOREIGN KEY (teacherId) REFERENCES Teacher (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE TmpTeacherTextAnswer (
    studentId INT NOT NULL,
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024) NOT NULL,
    
    PRIMARY KEY (studentId, teacherId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id) ON DELETE CASCADE,
    FOREIGN KEY (teacherId) REFERENCES Teacher (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE TmpCourseNumericAnswer (
    studentId INT NOT NULL,
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    score INT,
    
    PRIMARY KEY (studentId, courseId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Course (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE TmpCourseTextAnswer (
    studentId INT NOT NULL,
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024),
    
    PRIMARY KEY (studentId, courseId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Course (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE Survey (
    id INT AUTO_INCREMENT,
    title VARCHAR(64) UNIQUE NOT NULL,
    isPublished BOOLEAN NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE SurveyQuestion (
    surveyId INT NOT NULL,
    questionId INT NOT NULL,

    PRIMARY KEY (surveyId, questionId),
    FOREIGN KEY (surveyId) REFERENCES Survey (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE Prizes (
    id INT AUTO_INCREMENT,
    kind VARCHAR(128) NOT NULL,
    explanation VARCHAR(128) NOT NULL,

    PRIMARY KEY (id)
);

INSERT INTO Administrator VALUES (NULL, 'rafadavalos@tec.mx', 'rafa', 'L00000001', 'Rafael Emilio Dávalos', 'MTY');

INSERT INTO Teacher VALUES (NULL, 'csalazar@tec.mx', 'carmen', 'L00000002', 'Carmen Leticia Salazar Cano', 'MTY');

INSERT INTO Course VALUES (NULL, 'Construcción de software y toma de decisiones', 'BLOQUE');

INSERT INTO Classroom VALUES (NULL, 404, 112233, 1);

INSERT INTO Enrolled VALUES (1,1), (1,2);

INSERT INTO Question VALUES (NULL, 'El profesor(a) muestra dominio y experiencia en los temas de la Materia', 'TEACHER', 'NUMERIC');
INSERT INTO Question VALUES (NULL, 'El profesor(a) me retó para dar lo mejor de mí(desarrollar nuevas habilidades, nuevos conceptos e ideas, pensar de manera diferente, etc.)', 'TEACHER', 'NUMERIC');
INSERT INTO Question VALUES (NULL, '¿Qué le comentarías a un estudiante que quisiera inscribir la Materia con este(a) profesor(a)?', 'TEACHER', 'TEXT');

INSERT INTO Question VALUES (NULL, 'Los temas, las actividades y la situación-problema durante la Materia: (A) Me permitieron aprender y desarrollarme.', 'COURSE', 'NUMERIC');
INSERT INTO Question VALUES (NULL, 'Los temas, las actividades y la situación-problema durante la Materia: (B) Son aplicables y de valor.', 'COURSE', 'NUMERIC');

INSERT INTO Survey VALUES (NULL, "Mi primera encuesta", FALSE);
INSERT INTO Survey VALUES (NULL, "Mi segunda encuesta", FALSE);
INSERT INTO Survey VALUES (NULL, "Mi tercera encuesta", TRUE);

INSERT INTO SurveyQuestion VALUES (2, 1), (2, 2);
INSERT INTO SurveyQuestion VALUES (3, 1), (3, 2), (3, 3), (3, 4), (3, 5);

INSERT INTO Prizes VALUES (NULL, "CHILAQUILES", "Cupón de 15% en chilaquiles");
INSERT INTO Prizes VALUES (NULL, "TEC_STORE", "Una gorra en TecStore");
INSERT INTO Prizes VALUES (NULL, "CARLS_JR", "Una Western Bacon gratis");
INSERT INTO Prizes VALUES (NULL, "SUBWAY", "Una subway del día gratis");