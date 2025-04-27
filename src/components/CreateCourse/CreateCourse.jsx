import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import AuthorItem from "./AuthorItem/AuthorItem";
import style from "./CreateCourse.module.css";
import { mockedAuthorsList } from "../../constants";
import formatDuration from "../../helpers/formatCreationDate";
import PropTypes from "prop-types"

export default function CreateCourse({ onCreateCourse }) {
    const  navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        duration: "",
        authorName: "",
    });
    const [errors, setErrors] = useState({});
    const [availableAuthors, setAvailableAuthors] = useState(mockedAuthorsList);
    const [courseAuthors, setCourseAuthors] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "duration" && value && !/^\d*$/.test(value)) return;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
        } else if (formData.title.length < 2) {
            newErrors.title = "Title should be at least 2 characters";
        }
        if (!formData.description.trim()) {
            newErrors.description = "Description is required";
        } else if (formData.description.length < 2) {
            newErrors.description = "Description should be at least 2 characters";
        }
        if (!formData.duration) {
            newErrors.duration = "Duration is required";
        } else if (isNaN(formData.duration) || Number(formData.duration) <= 0) {
            newErrors.duration = "Duration should be a positive number";
        }
        if (courseAuthors.length === 0) {
            newErrors.authors = "At least one author is required";
        }
        return newErrors;
    };

    const handleCreateCourse = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const newCourse = {
            id: Math.random().toString(36).substr(2, 9),
            title: formData.title,
            description: formData.description,
            creationDate: new Date().toLocaleDateString("en-GB"),
            duration: parseInt(formData.duration),
            authors: courseAuthors.map((author) => author.id),
        };
        if (onCreateCourse) {
            onCreateCourse(newCourse);
            navigate("/courses")
        };
        setFormData({ title: "", description: "", duration: "", authorName: "" });
        setCourseAuthors([]);
    };

    const handleCreateAuthor = (e) => {
        e.preventDefault();
        if (formData.authorName.trim().length < 2) {
            setErrors((prev) => ({
                ...prev,
                authorName: "Author name should be at least 2 characters",
            }));
            return;
        }
        const newAuthor = {
            id: Math.random().toString(36).substr(2, 9),
            name: formData.authorName,
        };
        setAvailableAuthors((prev) => [...prev, newAuthor]);
        setFormData((prev) => ({ ...prev, authorName: "" }));
        setErrors((prev) => ({ ...prev, authorName: "" }));
    };

    const handleAddAuthor = (author) => {
        setCourseAuthors((prev) => [...prev, author]);
        setAvailableAuthors((prev) => prev.filter((a) => a.id !== author.id));
        setErrors((prev) => ({ ...prev, authors: "" }));
    };
    const handleRemoveAuthor = (author) => {
        setAvailableAuthors((prev) => [...prev, author]);
        setCourseAuthors((prev) => prev.filter((a) => a.id !== author.id));
    };

    return (
        <div className={style.container}>
            <h1 className={style.head}>Create Course</h1>
            <form className={style.box} onSubmit={handleCreateCourse} autoComplete="off">
                <h3>Main Info</h3>
                <Input
                    labelText="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    error={errors.title}
                    classInput="common"
                    className="w950"
                />
                <Input
                    labelText="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    error={errors.description}
                    classInput="common"
                    className="h150"
                />
                <div className={style.gridContainer}>
                    <div className={style.div1}>
                        <h3>Duration</h3>
                        <div className={style.durationGroup}>
                            <Input
                                labelText="Duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                error={errors.duration}
                                classInput="common"
                                className="w400"
                                placeholder="Minutes"
                            />
                            <p className={style.durationText}>
                                {formData.duration
                                    ? formatDuration(Number(formData.duration))
                                    : "00:00 hours"}
                            </p>
                        </div>
                        {errors.authors && (
                            <span className={style.errorText}>{errors.authors}</span>
                        )}
                    </div>
                    <div className={style.div2}>
                        <h3>Authors</h3>
                        <div className={style.inputGroup}>
                            <Input
                                labelText="Author Name"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleInputChange}
                                error={errors.authorName}
                                classInput="common"
                                className="w400"
                            />
                            <Button
                                text="CREATE AUTHOR"
                                className="w180"
                                type="button"
                                onClick={handleCreateAuthor}
                            />
                        </div>
                    </div>
                    <div className={style.div3}>
                        <h3>Authors List</h3>
                        {availableAuthors.map((author) => (
                            <AuthorItem
                                key={author.id}
                                author={author}
                                onAdd={handleAddAuthor}
                            />
                        ))}
                    </div>
                    <div className={style.div4}>
                        <h3>Course Authors</h3>
                        {courseAuthors.length > 0 ? (
                            courseAuthors.map((author) => (
                                <AuthorItem
                                    key={author.id}
                                    author={author}
                                    onRemove={handleRemoveAuthor}
                                />
                            ))
                        ) : (
                            <p>Author list is empty</p>
                        )}
                    </div>
                </div>
                <div className={style.buttons}>
                    <Button text="CANCEL" className="w180" type="button" />
                    <Button text="CREATE COURSE" className="w180" type="submit" />
                </div>
            </form>
        </div>
    );
}
CreateCourse.propTypes = {
    onCreateCourse: PropTypes.func.isRequired
}