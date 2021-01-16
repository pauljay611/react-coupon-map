import React, { useCallback, useEffect, useState } from "react";
import styld from "styled-components";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

import Category from "../Category";
import { useStores } from "../../hooks/store";

import GoogleMap, { defaultZoom } from "../../component/GoogleMap";
import { useCategory } from "../../hooks/category";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

function calcRange(val: number) {
  return 2.5 / val;
}

const Map: React.FC<Props> = (props: Props) => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  const [range, setRange] = useState<number>(calcRange(defaultZoom));

  const [showInfoIndex, setShowInfoIndex] = useState<number>();

  const [activeItem, setActiveItem] = useState<number>(0);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.watchPosition(
      throttle(({ coords }) => {
        if (
          (coords.latitude === currentPosition?.lat &&
            coords.longitude === currentPosition?.lng) ||
          !currentPosition
        )
          setCurrentPosition({ lat: coords.latitude, lng: coords.longitude });
      }, 3000)
    );
  }, [currentPosition]);

  const {
    currentCategoryID,
    categories,
    loading: categoryLoading,
    setCurrentCategoryID,
  } = useCategory();

  const { stores, loading } = useStores({
    range,
    location: currentPosition,
    category: currentCategoryID,
  });

  const handleZoomChange = useCallback(
    debounce((val) => {
      setRange(calcRange(val));
    }, 2000),
    []
  );

  const handleMarkerClick = useCallback((key: number) => {
    setShowInfoIndex(key);
  }, []);

  const handleCategoryChange = useCallback(
    (itemIndex: number) => () => {
      setCurrentCategoryID(categories[itemIndex].ID);
      setActiveItem(itemIndex);
    },
    [categories]
  );

  const renderMap = useCallback(() => {
    if (loading || !currentPosition || categoryLoading)
      return <span>loading</span>;
    return (
      <GoogleMap
        stores={stores}
        currentPosition={currentPosition}
        handleZoomChange={handleZoomChange}
        handleMarkerClick={handleMarkerClick}
        showInfoIndex={showInfoIndex}
      />
    );
  }, [currentPosition, stores, categoryLoading, loading, showInfoIndex]);

  return (
    <Wrapper>
      <Category
        handleCategoryChange={handleCategoryChange}
        activeItem={activeItem}
      />
      {renderMap()}
    </Wrapper>
  );
};

export default Map;
