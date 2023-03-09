--- Abstract tables

CREATE TABLE EvaluableKind (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(64) NOT NULL,

    PRIMARY KEY(id)
    -- enum {TEACHER, DIRECTOR, STUDENT, MENTOR, COURSE, FACILITIES}
    -- TODO: what happens if a director is also a teacher in real life?
    -- TODO: are we going to handle MENTOR cases?
    -- TODO: unnecesary table?
);

CREATE TABLE Evaluable (
    id INT AUTO_INCREMENT NOT NULL,
    evaluableKindId INT NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(evaluableKindId) REFERENCES EvaluableKind(id) ON DELETE CASCADE
    -- TODO: do we even need another table to handle ENUMS and referential integrity?
);

--- People

CREATE TABLE User (
    id INT NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    fullName VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    completedAt DATETIME,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES Evaluable(id) ON DELETE CASCADE
    -- TODO: handle referential integrity where I could assign "FACILITIES" to a user
);

--- Courses

CREATE TABLE Course (
    id INT NOT NULL,
    name VARCHAR(256) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES Evaluable(id) ON DELETE CASCADE
);

CREATE TABLE Enrolled (
    courseId INT NOT NULL,
    teacherId INT NOT NULL,
    studentId INT NOT NULL,

    PRIMARY KEY (courseId, teacherId, studentId),
    FOREIGN KEY (courseId) REFERENCES Course(id) ON DELETE CASCADE,
    FOREIGN KEY (teacherId) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (studentId) REFERENCES User(id) ON DELETE CASCADE
    -- TODO: handle referential integrity where student_id and teacher_id must be indeed "STUDENT" and "TEACHER"
    -- TODO: handle ON DELETE CASCADE edge cases
);

--- Survey

CREATE TABLE Question (
    id INT AUTO_INCREMENT NOT NULL,
    evaluableKindId INT NOT NULL,
    name VARCHAR(256) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (evaluableKindId) REFERENCES EvaluableKind(id) ON DELETE CASCADE
    -- TODO: change to CHAR(3)? F01, F02, etc
);

CREATE TABLE Answer (
    userId INT NOT NULL,
    evaluableId INT NOT NULL,
    questionId INT NOT NULL,
    score INT,
    comment VARCHAR(2048),

    PRIMARY KEY (userId, questionId),
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (evaluableId) REFERENCES Evaluable(id) ON DELETE CASCADE,
    FOREIGN KEY (questionId) REFERENCES Question(id) ON DELETE CASCADE
    -- TODO: integrity is destroyed if we add both a score and a comment
    -- TODO: what prevents us from answering a number-question with text instead of a number?
);

-- Sample Data
-- TODO: create a bunch of dummy data for demo purposes
-- TODO: implement prizes table
-- TODO: implement mentorea table
-- TODO: implement dirige table