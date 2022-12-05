function ListarR(){
    const [Restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        getRestaurantes();
    },[])

    const getRestaurantes = async () => {
        try{
            const RestaurantesFirebase = await listaRestaurante();
            setRestaurantes (RestaurantesFirebase)
        }catch (error) {
            console.log (error);
        }
    }

}