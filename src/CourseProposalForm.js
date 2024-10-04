import React, { useState } from 'react';

const CourseProposalForm = ({ handleBackToPrograms }) => {
    const [formData, setFormData] = useState({
        code: '',
        version: '',
        lectureHours: '',
        tutorialHours: '',
        practicalHours: '',
        groupDiscussionHours: '',
        projectHours: '',
        workingCentre: '',
        discipline: '',
        prerequisites: '',
        prerequisiteCourse: '',
        syllabus: '',
        references: '',
        quiz1: '',
        midsem: '',
        quiz2: '',
        endsem: '',
        project: '',
        labEvaluation: '',
        attendance: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic (e.g., API call)
    };

    return (
        <div style={styles.container}>
            <button onClick={handleBackToPrograms} style={styles.backButton}>
                &larr; Back to Programs
            </button>
            <h1 style={styles.title}>Course Proposal Form</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Code:</label>
                    <input type="text" name="code" value={formData.code} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Created Version:</label>
                    <input type="text" name="version" value={formData.version} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.row}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Lecture Hours (L):</label>
                        <input type="number" name="lectureHours" value={formData.lectureHours} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Tutorial Hours (T):</label>
                        <input type="number" name="tutorialHours" value={formData.tutorialHours} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Practical Hours (P):</label>
                        <input type="number" name="practicalHours" value={formData.practicalHours} onChange={handleChange} style={styles.input} />
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Group Discussion Hours (GD):</label>
                        <input type="number" name="groupDiscussionHours" value={formData.groupDiscussionHours} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Project Hours (PR):</label>
                        <input type="number" name="projectHours" value={formData.projectHours} onChange={handleChange} style={styles.input} />
                    </div>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Working Centre:</label>
                    <input type="text" name="workingCentre" value={formData.workingCentre} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Discipline:</label>
                    <input type="text" name="discipline" value={formData.discipline} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Prerequisites:</label>
                    <input type="text" name="prerequisites" value={formData.prerequisites} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Prerequisite Course:</label>
                    <input type="text" name="prerequisiteCourse" value={formData.prerequisiteCourse} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Syllabus:</label>
                    <textarea name="syllabus" value={formData.syllabus} onChange={handleChange} style={styles.textarea}></textarea>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>References & Books:</label>
                    <textarea name="references" value={formData.references} onChange={handleChange} style={styles.textarea}></textarea>
                </div>
                <div style={styles.row}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Quiz 1%:</label>
                        <input type="number" name="quiz1" value={formData.quiz1} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Midsem %:</label>
                        <input type="number" name="midsem" value={formData.midsem} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Quiz 2%:</label>
                        <input type="number" name="quiz2" value={formData.quiz2} onChange={handleChange} style={styles.input} />
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Endsem %:</label>
                        <input type="number" name="endsem" value={formData.endsem} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Project %:</label>
                        <input type="number" name="project" value={formData.project} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Lab Evaluation %:</label>
                        <input type="number" name="labEvaluation" value={formData.labEvaluation} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Attendance %:</label>
                        <input type="number" name="attendance" value={formData.attendance} onChange={handleChange} style={styles.input} />
                    </div>
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

// Styles for the form and elements with a light blue and white color scheme
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f0f7ff',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.2)',
        maxWidth: '800px',
        margin: '20px auto',
    },
    backButton: {
        background: 'none',
        border: 'none',
        color: '#007BFF',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#0056b3',
    },
    form: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        color: '#0056b3',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#e6f2ff',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#e6f2ff',
        minHeight: '100px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default CourseProposalForm;
