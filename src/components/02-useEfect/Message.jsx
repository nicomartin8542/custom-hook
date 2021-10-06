import React, {useEffect, useState} from "react";

export const Message = () => {
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});

	const {x, y} = coords;

	//Ejemplo de useEffect
	useEffect(() => {
		const mouseMove = (e) => {
			const coords = {x: e.x, y: e.y};
			setCoords(coords);
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mouseMove", mouseMove);
		};
	}, []);

	return (
		<div>
			<h1>Hola como andas 123</h1>

			<p>
				x: {x} y:{y}
			</p>
		</div>
	);
};
