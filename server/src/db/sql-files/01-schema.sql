DROP TABLE IF EXISTS Prizes;
DROP TABLE IF EXISTS TmpAnswer;
DROP TABLE IF EXISTS Answer;
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
DROP TABLE IF EXISTS FormationUnits;
DROP TABLE IF EXISTS Teacher;
DROP TABLE IF EXISTS Colaborator;
DROP TABLE IF EXISTS Administrator;
DROP TABLE IF EXISTS Student;

CREATE TABLE Student (
    registration CHAR(9) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (registration)
);

CREATE TABLE Administrator (
    registration CHAR(9) UNIQUE NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (registration)
);

CREATE TABLE Teacher (
    registration CHAR(9) UNIQUE NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    pass VARCHAR(32) NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (registration)
);

CREATE TABLE FormationUnits (
    crn INT NOT NULL,
    code VARCHAR(16) NOT NULL,
    title VARCHAR(128) NOT NULL,
    kind VARCHAR(32) NOT NULL,
    campus VARCHAR(32) NOT NULL,

    PRIMARY KEY (crn)
);

CREATE TABLE Enrolled (
    crn INT NOT NULL,
    studentRegistration CHAR(9) NOT NULL,

    PRIMARY KEY (crn, studentRegistration),
    FOREIGN KEY (crn) REFERENCES FormationUnits (crn) ON DELETE CASCADE,
    FOREIGN KEY (studentRegistration) REFERENCES Student (registration) ON DELETE CASCADE
);

CREATE TABLE Teaches (
    crn INT NOT NULL,
    teacherRegistration CHAR(9) NOT NULL,

    PRIMARY KEY (crn, teacherRegistration),
    FOREIGN KEY (crn) REFERENCES FormationUnits (crn) ON DELETE CASCADE,
    FOREIGN KEY (teacherRegistration) REFERENCES Teacher (registration) ON DELETE CASCADE
);

CREATE TABLE Question (
    id INT AUTO_INCREMENT,
    acronym VARCHAR(16) NOT NULL,
    keyAcronym VARCHAR(16) NOT NULL,
    title VARCHAR(512) NOT NULL,
    section VARCHAR(32) NOT NULL,
    answerKind VARCHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Survey (
    id INT AUTO_INCREMENT,
    title VARCHAR(64) UNIQUE NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE SurveyQuestion (
    id INT AUTO_INCREMENT,
    surveyId INT NOT NULL,
    questionId INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (surveyId) REFERENCES Survey (id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question (id) ON DELETE CASCADE
);

CREATE TABLE Answer (
    surveyQuestionId INT NOT NULL,
    targetKind VARCHAR(32) NOT NULL,
    teacherRegistration CHAR(9) NOT NULL,
    crn INT NOT NULL,
    content VARCHAR(1024) NOT NULL,

    FOREIGN KEY (surveyQuestionId) REFERENCES SurveyQuestion (id) ON DELETE CASCADE,
    FOREIGN KEY (teacherRegistration) REFERENCES Teacher (registration) ON DELETE CASCADE,
    FOREIGN KEY (crn) REFERENCES FormationUnits (crn) ON DELETE CASCADE
);

CREATE TABLE TmpAnswer (
    studentRegistration CHAR(9) NOT NULL,
    surveyQuestionId INT NOT NULL,
    targetKind VARCHAR(32) NOT NULL,
    teacherRegistration CHAR(9) NOT NULL,
    crn INT NOT NULL,
    content VARCHAR(1024) NOT NULL,

    FOREIGN KEY (studentRegistration) REFERENCES Student (registration) ON DELETE CASCADE,
    FOREIGN KEY (surveyQuestionId) REFERENCES SurveyQuestion (id) ON DELETE CASCADE,
    FOREIGN KEY (teacherRegistration) REFERENCES Teacher (registration) ON DELETE CASCADE,
    FOREIGN KEY (crn) REFERENCES FormationUnits (crn) ON DELETE CASCADE
);

CREATE TABLE Prizes (
    id INT AUTO_INCREMENT,
    kind VARCHAR(128) NOT NULL,
    explanation VARCHAR(128) NOT NULL,

    PRIMARY KEY (id)
);