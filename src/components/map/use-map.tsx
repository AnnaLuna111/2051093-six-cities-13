import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { OfferProps } from '../../types/offer-types';

export const useMap = (
	mapRef: MutableRefObject<HTMLElement | null>,
	city: OfferProps
): Map | null => {
	const [map, setMap] = useState<Map | null>(null);
	const isRenderedRef = useRef<boolean>(false);

	useEffect(() => {
		if (mapRef.current !== null && !isRenderedRef.current) {
			const instance = new Map(mapRef.current, {
				center: {
					lat: city.location.latitude,
					lng: city.location.longitude
				},
				zoom: 10
			});

			const layer = new TileLayer(
				'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
				{
					attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
				}
			);

			instance.addLayer(layer);

			setMap(instance);
			isRenderedRef.current = true;
		}
	}, [mapRef, city]);

	return map;
};
