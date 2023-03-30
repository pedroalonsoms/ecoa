DROP TABLE IF EXISTS Answer;
DROP TABLE IF EXISTS Question;
DROP TABLE IF EXISTS Teaches;
DROP TABLE IF EXISTS Enrolled;
DROP TABLE IF EXISTS Classroom;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Campus;
DROP TABLE IF EXISTS TeacherAnswer;
DROP TABLE IF EXISTS TeacherComment;
DROP TABLE IF EXISTS CourseAnswer;
DROP TABLE IF EXISTS CourseComment;
DROP TABLE IF EXISTS TmpTeacherAnswer;
DROP TABLE IF EXISTS TmpTeacherComment;
DROP TABLE IF EXISTS TmpCourseAnswer;
DROP TABLE IF EXISTS TmpCourseComment;
DROP TABLE IF EXISTS Survey;
DROP TABLE IF EXISTS SurveyQuestion;

CREATE TABLE Student (
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campusId CHAR(3) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Admin (
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campusId CHAR(3) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Teacher (
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campusId CHAR(3) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Course (
    id INT NOT NULL,
    title VARCHAR(64) NOT NULL,
    kind VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Classroom (
    id INT AUTO_INCREMENT NOT NULL,
    code INT NOT NULL,
    CRN INT NOT NULL,
    courseId INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (courseId) REFERENCES Course (id)
);

CREATE TABLE Enrolled (
    classroomId INT NOT NULL,
    studentId INT NOT NULL,

    PRIMARY KEY (studentId, classroomId),
    FOREIGN KEY (studentId) REFERENCES Student (id),
    FOREIGN KEY (classroomId) REFERENCES Classroom (id)
);

CREATE TABLE Teaches (
    classroomId INT NOT NULL,
    teacherId INT NOT NULL,

    PRIMARY KEY (teacherId, classroomId),
    FOREIGN KEY (teacherId) REFERENCES Employee (id),
    FOREIGN KEY (classroomId) REFERENCES Classroom (id)
);

CREATE TABLE Question (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(512) NOT NULL,
    kind VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE TeacherAnswer (
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    score INT NOT NULL,

    PRIMARY KEY (teacherId, questionId),
    FOREIGN KEY (teacherId) REFERENCES Teacher (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE TeacherComment (
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024) NOT NULL,

    PRIMARY KEY (teacherId, questionId),
    FOREIGN KEY (teacherId) REFERENCES Teacher (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE CourseAnswer (
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    score INT NOT NULL,

    PRIMARY KEY (courseId, questionId),
    FOREIGN KEY (courseId) REFERENCES Course (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE CourseComment (
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024),

    PRIMARY KEY (courseId, questionId),
    FOREIGN KEY (courseId) REFERENCES Course (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE TmpTeacherAnswer (
    studentId INT NOT NULL,
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    score INT NOT NULL,
    
    PRIMARY KEY (studentId, teacherId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id)
    FOREIGN KEY (teacherId) REFERENCES Teacher (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE TmpTeacherComment (
    studentId INT NOT NULL,
    teacherId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024) NOT NULL,
    
    PRIMARY KEY (studentId, teacherId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id)
    FOREIGN KEY (teacherId) REFERENCES Teacher (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE TmpCourseAnswer (
    studentId INT NOT NULL,
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    score INT NOT NULL,
    
    PRIMARY KEY (studentId, courseId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id)
    FOREIGN KEY (courseId) REFERENCES Course (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE TmpCourseComment (
    studentId INT NOT NULL,
    courseId INT NOT NULL,
    questionId INT NOT NULL,
    comment VARCHAR(1024),
    
    PRIMARY KEY (studentId, courseId, questionId),
    FOREIGN KEY (studentId) REFERENCES Student (id)
    FOREIGN KEY (courseId) REFERENCES Course (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);

CREATE TABLE Survey (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(64) NOT NULL,
    isActive BOOLEAN NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE SurveyQuestion (
    surveyId INT NOT NULL,
    questionId INT NOT NULL,

    PRIMARY KEY (surveyId, questionId),
    FOREIGN KEY (surveyId) REFERENCES Survey (id),
    FOREIGN KEY (questionId) REFERENCES Question (id)
);