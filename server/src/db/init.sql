CREATE TABLE user (
    id CHAR(9) NOT NULL,
    full_name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL

    PRIMARY KEY (id)
);

CREATE TABLE colaborator (
    id CHAR(9) NOT NULL,
    role VARCHAR(64) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE student (
    id CHAR(9) NOT NULL,
    answer_timestamp DATETIME,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE question (
    id CHAR(3) NOT NULL,
    name VARCHAR(512) NOT NULL,
);

CREATE TABLE course (
    id CHAR(6) NOT NULL,
    name VARCHAR(256) NOT NULL,
);

-----

CREATE TABLE colaborator_answers (
    student_id CHAR(9) NOT NULL,
    question_id CHAR(3) NOT NULL,
    colaborator_id CHAR(9) NOT NULL,
    score INT NOT NULL
)

CREATE TABLE course_answers (
    student_id CHAR(9) NOT NULL,
    question_id CHAR(3) NOT NULL,
    course_id CHAR(9) NOT NULL,
    score INT NOT NULL
)

CREATE TABLE facilities_answers (
    student_id CHAR(9) NOT NULL,
    question_id CHAR(3) NOT NULL,
    score INT NOT NULL
)