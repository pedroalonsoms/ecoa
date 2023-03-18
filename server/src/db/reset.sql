DROP TABLE IF EXISTS Answer;
DROP TABLE IF EXISTS Question;
DROP TABLE IF EXISTS Teaches;
DROP TABLE IF EXISTS Enrolled;
DROP TABLE IF EXISTS Classroom;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Campus;
DROP TABLE IF EXISTS GlobalKind;
DROP TABLE IF EXISTS GlobalId;

CREATE TABLE GlobalId (
    id INT AUTO_INCREMENT NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE GlobalKind (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(64),

    PRIMARY KEY (id)
);

CREATE TABLE Campus (
    id INT NOT NULL,
    name CHAR(3) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES GlobalId (id)
);

CREATE TABLE User (
    id INT NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(32) NOT NULL,
    registration CHAR(9) NOT NULL,
    fullName VARCHAR(64) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES GlobalId (id)
);

CREATE TABLE Student (
    id INT NOT NULL,
    completedAt DATETIME,
    mentorId INT,
    entryDirectorId INT,
    careerDirectorId INT,
    campusId INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User (id),
    FOREIGN KEY (campusId) REFERENCES Campus (id)
);

CREATE TABLE Employee (
    id INT NOT NULL,
    kind INT NOT NULL,
    campusId INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User (id),
    FOREIGN KEY (kind) REFERENCES GlobalKind (id),
    FOREIGN KEY (campusId) REFERENCES Campus (id)
);

CREATE TABLE Course (
    id INT NOT NULL,
    name VARCHAR(64) NOT NULL,
    kind INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES GlobalId (id),
    FOREIGN KEY (kind) REFERENCES GlobalKind (id)
);

CREATE TABLE Classroom (
    id INT AUTO_INCREMENT NOT NULL,
    courseId INT NOT NULL,
    CRN INT NOT NULL,
    code INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (courseId) REFERENCES Course (id)
);

CREATE TABLE Enrolled (
    studentId INT NOT NULL,
    classroomId INT NOT NULL,

    PRIMARY KEY (studentId, classroomId),
    FOREIGN KEY (studentId) REFERENCES Student (id),
    FOREIGN KEY (classroomId) REFERENCES Classroom (id)
);

CREATE TABLE Teaches (
    employeeId INT NOT NULL,
    classroomId INT NOT NULL,

    PRIMARY KEY (employeeId, classroomId),
    FOREIGN KEY (employeeId) REFERENCES Employee (id),
    FOREIGN KEY (classroomId) REFERENCES Classroom (id)
);

CREATE TABLE Question (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(256) NOT NULL,
    kind INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (kind) REFERENCES GlobalKind (id)
);

CREATE TABLE Answer (
    fromId INT NOT NULL,
    questionId INT NOT NULL,
    toId INT NOT NULL,
    score INT,
    comment VARCHAR(1024),

    FOREIGN KEY (fromId) REFERENCES Student (id),
    FOREIGN KEY (questionId) REFERENCES Question (id),
    FOREIGN KEY (toId) REFERENCES GlobalId (id)
);

INSERT INTO GlobalKind (name) VALUES ("TEACHER"), ("FACILITIES"), ("COURSE"), ("BLOCK"), ("ENTRY_DIRECTOR"), ("CAREER_DIRECTOR"), ("MENTOR"), ("TEC_WEEK");
INSERT INTO GlobalId () VALUES (), (), ();
INSERT INTO Campus (id, name) VALUES (1, "MTY"), (2, "SIN"), (3, "HGO");
INSERT INTO GlobalId () VALUES (), ();
INSERT INTO User (id, email, password, registration, fullName) VALUES (4,"A00827581@tec.mx", "kerim", "A00827581", "Kerim Taray Malagon"), (5, "A01741437@tec.mx", "pedro", "A01741437","Pedro Alonso Moreno Salcedo");
INSERT INTO Student (id, completedAt, mentorId, entryDirectorId, careerDirectorId, campusId) VALUES (4, NULL, NULL, NULL, NULL, 1), (5, NULL, NULL, NULL, NULL, 1);