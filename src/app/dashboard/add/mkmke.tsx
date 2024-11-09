const [loading, setLoading] = useState(false);

    const [formErrors, setFormErrors] = useState<{
        name?: string;
        surname?: string;
        patronym?: string;
        email?: string;
        phone?: string;
    }>({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTutorFormInputs>({
        defaultValues: {},
        mode: "onSubmit",
    });

    // вынести инпуты в отдельный компонент нахуй

    let validationResult;

    const onSubmit: SubmitHandler<AddTutorFormInputs> = async (data) => {
        setLoading(true);
        validationResult = addTutorValidate(data);

        if (!validationResult.isValid) {
            setFormErrors({
                ...formErrors,
            });
            setLoading(false);
            console.log(validationResult.errors, 'are errors')
            return;
        }

        const { name, surname, patronym, email, phone } = validationResult.data ?? {};

        console.log(data);
        
        try {
            const response = await fetch("/api/tutors/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, surname, patronym, email, phone }),
            });

            if (response.ok) {
                const responseBody = await response.json();
                setLoading(false);
                return <div>{responseBody.password}</div>;
            } else {
                const errorData = await response.json();
                handleServerResponse(errorData);
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoading(false);
            setFormErrors({
                ...formErrors,
            });
        }
    };

    function handleServerResponse(errorData: any) {
        setLoading(false);
        setFormErrors({
            ...formErrors,
            phone:
                errorData.errors.phone || "Такой репетитор уже есть в системе.",
        });
    }

<div className="bg-white flex items-center gap-3 flex-row rounded-xl shadow-md p-6 text-lg mt-4">
<form
    method="post"
    className="flex w-full flex-col gap-3"
    id="addtutorform"
    onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>Фамилия</label>
        <Input
            {...register("surname", {
                required: true,
                maxLength: 64,
            })}
        />
        <p>
            {formErrors.surname ||
                (validationResult?.errors.surname && "Это поле обязательно")}
        </p>
    </div>
    <div>
        <label>Имя</label>
        <Input
            {...register("name", {
                required: true,
                maxLength: 64,
            })}
        />
        <p>
            {formErrors.name ||
                (validationResult?.errors.name && "Это поле обязательно")}
        </p>
    </div>
    <div>
        <label>Отчество</label>
        <Input
            {...register("patronym", {
                required: true,
                maxLength: 64,
            })}
        />
        <p>
            {formErrors.patronym ||
                (validationResult?.errors.patronym && "Это поле обязательно")}
        </p>
    </div>

    <div>
        <label>Почта</label>
        <Input {...register("email", { required: true })} />
        <p>
            {formErrors.email ||
                (validationResult?.errors.email && "Это поле обязательно")}
        </p>
    </div>
    <div>
        <label>Телефон</label>
        <Input
            type="tel"
            {...register("phone", { required: true })}
        />
        <p>
            {formErrors.phone ||
                (validationResult?.errors.phone && "Это поле обязательно")}
        </p>
    </div>
    <SubmitButton loading={loading} form={"addtutorform"}>Добавить</SubmitButton>
</form>
</div>