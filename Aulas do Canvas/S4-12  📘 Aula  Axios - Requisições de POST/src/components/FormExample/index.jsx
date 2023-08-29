export const FormExample = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormExampleSchema)
    })

    const submit = (formData) => {
        alert(formData)
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <label >Nome</label>
            <input type="text" />
        </form>
    )
}