CREATE TABLE GlobalId (
    id INT AUTO_INCREMENT NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE GlobalKind (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(64),
    -- [TEACHER, FACILITIES, COURSE, BLOCK, ENTRY_DIRECTOR, CAREER_DIRECTOR, MENTOR, TEC_WEEK]

    PRIMARY KEY (id)
);

CREATE TABLE Campus (
    id INT NOT NULL,
    name CHAR(3) NOT NULL,
    -- [MTY, SIN, HGO]

    PRIMARY KEY (id)
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
    mentorId INT NOT NULL,
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

CREATE TABLE Group (
    id INT AUTO_INCREMENT NOT NULL,
    courseId INT NOT NULL,
    CRN INT NOT NULL,
    code INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (courseId) REFERENCES Course (id)
);

CREATE TABLE Enrolled (
    studentId INT NOT NULL,
    groupId INT NOT NULL,

    PRIMARY KEY (studentId, groupId),
    FOREIGN KEY (studentId) REFERENCES Student (id),
    FOREIGN KEY (groupId) REFERENCES Group (id),
);

CREATE TABLE Teaches (
    employeeId INT NOT NULL,
    groupId INT NOT NULL,

    PRIMARY KEY (employeeId, groupId),
    FOREIGN KEY (employeeId) REFERENCES Employee (id),
    FOREIGN KEY (groupId) REFERENCES Group (id),
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

CREATE TABLE Prize (

);

CREATE TABLE TempAnswer (

);

-- INSERTING DATA AS EXAMPLES
INSERT INTO GlobalId (name) VALUES();
INSERT INTO GlobalKind (id,name) VALUES (),("TEACHER", "FACILITIES", "COURSE", "BLOCK", "ENTRY_DIRECTOR", "CAREER_DIRECTOR", "MENTOR", "TEC_WEEK");
INSERT INTO Campus (name) VALUES ("MTY", "SIN", "HGO");
INSERT INTO User (id,email,password,registration,fullName) VALUES (0,"a00827581@tec.mx","kerim","a00827581","Kerim Taray Malagon"), (1, "a01741437@tec.mx", "pedro", "a01741437","Pedro Alonso Moreno Salcedo")
INSERT INTO Student (id,completedAt, mentorId, entryDirectorId,careerDirectorId, campusId)


-- TODO: campus para las materias
-- TODO: periodos
-- TODO: campus
-- TODO: prizes
-- TODO: temp answer, localstorage or server-side?
-- TODO: integrity and constraints on User and other tables 
-- TODO: create a bunch of dummy data for demo purposes