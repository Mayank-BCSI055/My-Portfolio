import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { contactService } from "../../services/contactService";
import "./Contact.css";

function Contact() {
    const [ref, isVisible] = useScrollReveal(0.1);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        attachments: []
    });

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, message: "" });

    const closeErrorDialog = () => setErrorDialog({ isOpen: false, message: "" });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const files = Array.from(e.target.files);
            
            if (files.length > 10) {
                setErrorDialog({ isOpen: true, message: "You can only select up to 10 files at once." });
                e.target.value = "";
                return;
            }

            const validFiles = [];
            const largeFiles = [];
            
            for (let file of files) {
                if (file.size > MAX_FILE_SIZE) {
                    largeFiles.push(file.name);
                } else {
                    validFiles.push(file);
                }
            }

            if (largeFiles.length > 0) {
                setErrorDialog({ isOpen: true, message: `The following files are larger than 5MB and won't be attached:\n${largeFiles.join(', ')}` });
            }

            try {
                const dt = new DataTransfer();
                for (let file of validFiles) {
                    dt.items.add(file);
                }
                e.target.files = dt.files;
            } catch (err) {
                if (validFiles.length === 0) {
                    e.target.value = "";
                }
            }

            setFormData({
                ...formData,
                attachments: validFiles
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("submitting");

        try {
            await contactService.submitContactForm(formData);

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "", attachments: [] });
            
            // Clear the file input visually
            const fileInput = document.getElementById("attachments");
            if (fileInput) fileInput.value = "";
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStatus("error");
        }
    }

    return (
        <section id="contact" className={`contact ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="container relative">
                <header className="section-header">
                    <p className="section-label">Contact</p>
                    <h2>Let's Connect</h2>
                    <p className="section-description">
                        Have a project, opportunity, or question? Feel free to get in touch.
                    </p>
                </header>

                {errorDialog.isOpen && (
                    <div className="error-dialog-overlay" onClick={closeErrorDialog}>
                        <div className="error-dialog-box" onClick={e => e.stopPropagation()}>
                            <div className="error-dialog-header">
                                <h3>Notice</h3>
                                <button type="button" className="close-btn" onClick={closeErrorDialog}>&times;</button>
                            </div>
                            <div className="error-dialog-body">
                                <p style={{ whiteSpace: 'pre-line' }}>{errorDialog.message}</p>
                            </div>
                            <div className="error-dialog-footer">
                                <button type="button" className="ok-btn" onClick={closeErrorDialog}>OK</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayank6387992885@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div className="contact-card-content">
                                <h3>Email</h3>
                                <p>mayank6387992885@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://github.com/Mayank-6387992885" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </div>
                            <div className="contact-card-content">
                                <h3>GitHub</h3>
                                <p>Mayank-6387992885</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/mayank-baranwal-6b72aa21a/" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </div>
                            <div className="contact-card-content">
                                <h3>LinkedIn</h3>
                                <p>mayank-baranwal-6b72aa21a</p>
                            </div>
                        </a>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {status === "success" && (
                                <div className="contact-success-msg">Your message has been sent successfully!</div>
                            )}
                            {status === "error" && (
                                <div className="contact-error-msg">There was an error sending your message. Please try again later.</div>
                            )}
                            
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Name <span className="required-asterisk">*</span></label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email <span className="required-asterisk">*</span></label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject <span className="required-asterisk">*</span></label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input" placeholder="How can I help you?" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message <span className="required-asterisk">*</span></label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea" placeholder="Your message here..." rows="5" required></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="attachments">Attachments (Optional, Max 10 files, 5MB each)</label>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <input type="file" id="attachments" name="attachments" multiple onChange={handleChange} className="form-input-file" style={{ flex: 1 }} />
                                    {formData.attachments && formData.attachments.length > 0 && (
                                        <button type="button" onClick={() => {
                                            setFormData({ ...formData, attachments: [] });
                                            const fileInput = document.getElementById("attachments");
                                            if (fileInput) fileInput.value = "";
                                        }} style={{ 
                                            padding: '0.5rem 1rem', 
                                            backgroundColor: 'var(--color-surface)', 
                                            border: '1px solid var(--color-border)', 
                                            borderRadius: 'var(--radius-sm)', 
                                            color: 'var(--color-text-primary)', 
                                            cursor: 'pointer',
                                            fontWeight: '500'
                                        }}>
                                            Clear
                                        </button>
                                    )}
                                </div>
                                {formData.attachments && formData.attachments.length > 0 && (
                                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                                        {formData.attachments.length} file(s) selected
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="submit-button" disabled={status === "submitting"}>
                                <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
