function Locals() {
    const [locals, setLocals] = useState(null)

    useEffect(() => {
        getLocals().then((response) => {
            setLocals(response.data)
            });
}, []);

    if (!locals) {
        return<div>Buscando Locales...</div>
    }
  return (
    <div><pre>{JSON.stringify(locals, null, 2)}</pre></div>
  )
}

export default Locals;