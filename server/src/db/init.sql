--- Abstract tables

CREATE TABLE evaluable_kind (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(64) NOT NULL,

    PRIMARY KEY(id)
    -- enum {TEACHER, DIRECTOR, STUDENT, MENTOR, COURSE, FACILITIES}
    -- TODO: what happens if a director is also a teacher in real life?
    -- TODO: are we going to handle MENTOR cases?
);

CREATE TABLE evaluable (
    id INT AUTO_INCREMENT NOT NULL,
    evaluable_kind_id INT NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(evaluable_kind_id) REFERENCES evaluable_kind(id) ON DELETE CASCADE
    -- TODO: do we even need another table to handle ENUMS and referential integrity?
);

--- People

CREATE TABLE user (
    id INT NOT NULL,
    registration CHAR(9) UNIQUE NOT NULL,
    full_name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    answer_timestamp DATETIME,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES evaluable(id) ON DELETE CASCADE
    -- TODO: handle referential integrity where I could assign "FACILITIES" to a user
);

--- Courses

CREATE TABLE course (
    id INT NOT NULL,
    name VARCHAR(256) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES evaluable(id) ON DELETE CASCADE
);

CREATE TABLE enrolled (
    course_id INT NOT NULL,
    teacher_id INT NOT NULL,
    student_id INT NOT NULL,

    PRIMARY KEY (course_id, teacher_id, student_id),
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES user(id) ON DELETE CASCADE
    -- TODO: handle referential integrity where student_id and teacher_id must be indeed "STUDENT" and "TEACHER"
    -- TODO: handle ON DELETE CASCADE edge cases
);

--- Survey

CREATE TABLE question (
    id INT AUTO_INCREMENT NOT NULL,
    evaluable_kind_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (evaluable_kind_id) REFERENCES evaluable_kind(id) ON DELETE CASCADE
    -- TODO: change to CHAR(3)? F01, F02, etc
);

CREATE TABLE answers (
    user_id INT NOT NULL,
    question_id INT NOT NULL,
    score INT,
    comment VARCHAR(2048),

    PRIMARY KEY (user_id, question_id),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES question(id) ON DELETE CASCADE
    -- TODO: integrity is destroyed if we add both a score and a comment
    -- TODO: what prevents us from answering a number-question with text instead of a number?
);

-- Sample Data
-- TODO: create a bunch of dummy data for demo purposes