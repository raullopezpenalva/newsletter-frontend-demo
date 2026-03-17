import { useState} from 'react';


type CreateContactMessageRequest = {
    email: string;
    subject: string;
    content: string;
};

type FieldError = {
    field: string;
    message: string;
};

type ApiError = {
    timestamp: string;
    status: number;
    error: string;
    message: string;
    path: string;
    details?: FieldError[];
};

export default function ContactForm() {
    const [form, setForm] = useState<CreateContactMessageRequest>({
        email: '',
        subject: '',
        content: '',
    });
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [globalError, setGlobalError] = useState<string | null>(null);
    const [status, setStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value });
        setFieldErrors({});
        setGlobalError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setFieldErrors({});
        setGlobalError(null);
        
        try {
            const response = await fetch('/api/v1/contact/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response.status === 201) {
                setStatus('success');
                setForm({ email: '', subject: '', content: '' });
                return;
            }

            if (response.status === 400) {
                const error: ApiError = await response.json();

                if (error.details && error.details.length > 0) {
                    const errors: Record<string, string> = {};
                    error.details.forEach((detail) => {
                        errors[detail.field] = detail.message;
                    });
                    setFieldErrors(errors);
                } else {
                    setGlobalError(error.message || 'An error occurred. Please try again.');
                }
                setStatus('error');
                return;
            }

            setGlobalError('An unexpected error occurred. Please try again.');
            setStatus('error');
        } catch {
            setGlobalError('Failed to submit. Please check your connection and try again.');
            setStatus('error');
        }
    };

return (
    <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className='contact-form-email'>
            <label className='contact-form-email-label'>Email</label>
            <input
                className='contact-form-email-input'
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            {fieldErrors.email && <div className='contact-form-syntaxerror'>{fieldErrors.email}</div>}
        </div>

        <div className='contact-form-subject'>
            <label className='contact-form-subject-label'>Subject</label>
            <input
                className='contact-form-subject-input'
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
            />
            {fieldErrors.subject && <div className='contact-form-syntaxerror'>{fieldErrors.subject}</div>}
        </div>

        <div className='contact-form-message'>
            <label className='contact-form-message-label'>Message</label>
            <textarea
                className='contact-form-message-input'
                name="content"
                value={form.content}
                onChange={handleChange}
            />
            {fieldErrors.content && <div className='contact-form-syntaxerror'>{fieldErrors.content}</div>}
        </div>
        <div className='contact-form-buttonbox'>
            {status === "success" && (
                <div className='contact-form-success'>
                    Your message has been sent successfully!
                </div>
            )}

            {globalError && (
                <div className='contact-form-error'>
                    {globalError}
                </div>
            )}
            <button className='contact-form-submit' type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
        </div>
    </form>
);
}