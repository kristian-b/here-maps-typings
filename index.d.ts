// Type definitions for HERE maps 3.0.x
// Project: http://here.com/
// Definitions by: kristian-b <https://github.com/kristian-b>

/**
* Namespace: H
**/
declare namespace H {
    /**
    * Map - Map class defines map instance in the application. By creating this object you will initialize a visible map object which is attached to the provided dom element. Map class is an entry point to all operations related to layers, map objects and geo-screen transformations. By specifying options you can initialize map with predefined view.
    */
    export class Map extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {Element} element - html element into which the map will be rendered
        * @param {H.map.layer.Layer} baseLayer - The layer to be used as the base (bottom most) layer.
        * @param {H.Map.Options} opt_options - additional map options
        */
        constructor(element: Element, baseLayer: H.map.layer.Layer, opt_options?: H.Map.Options);

        /**
        * This method returns the map root html element
        */
        getElement(): Element;

        /**
        * This method sets the new center on a map.
        * @param {H.geo.IPoint} center - requested center to be set
        * @param {boolean} opt_animate - parameter indicates if animated transition should be applied, default is false
        */
        setCenter(center: H.geo.IPoint, opt_animate?: boolean): H.Map;

        /**
        * This method returns currently rendered center of the map.
        */
        getCenter(): H.geo.Point;

        /**
        * This method sets the zoom level on the map. Every zoom level represents different scale i.e map at zoom level 2 is twice as large as the map at zoom level 1.
        * @param {number} zoom - requested zoom level
        * @param {boolean} opt_animate - parameter indicates if animated transition should be applied, default is false
        */
        setZoom(zoom: number, opt_animate?: boolean): H.Map;

        /**
        * This method returns currently rendered zoom level.
        */
        getZoom(): number;

        /**
        * This method changes the map zoom while keeping target screen coordinates specified as x,y at the same place where they were before.
        * @param {number} zoom - new zoom level
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        zoomAt(zoom: number, x: number, y: number);

        /**
        * This method sets the bounding rect to be displayed by the map. Maps display the bounding rect in a way that it fits entirely in the current viewport.
        * @param {H.geo.Rect} boundingRect - view bound which should be shown on map
        * @param {boolean} opt_animate - parameter indicates if animated transition should be applied, default is false
        */
        setViewBounds(boundingRect: H.geo.Rect, opt_animate?: boolean): H.Map;

        /**
        * This method returns bounding rect for the current map view. Returned bounding rect defines entire currently viewable area on the screen.
        */
        getViewBounds(): H.geo.Rect;

        /**
        * Calculates the best CameraModel to show the provided bounding rectangle
        * @param {H.geo.Rect} rect - The geographical bounding rectangle to use
        */
        getCameraDataForBounds(rect: H.geo.Rect): H.map.ViewModel.CameraData;

        /**
        * This method returns current map viewport. Viewport can be used to modify padding and margin which will reflect the position of the viewport center and the amount of extra data loaded (for margin)
        */
        getViewPort(): H.map.ViewPort;

        /**
        * This method returns current view model. View model can be used to modify the current view or camera. H.map.ViewModel
        */
        getViewModel(): H.map.ViewModel;

        /**
        * This method returns the map's current layer collection.
        */
        getLayers(): H.map.DataModel;

        /**
        * This method returns the imprint object for this map.
        */
        getImprint(): H.map.Imprint;

        /**
        * Example
        * @param {Function} callback - Callback function to call once result of the capturing is ready
        * @param {Array<H.util.ICapturable>} opt_capturables - Collection of "capturable" element(s) to draw into the resulting canvas
        * @param {number} opt_x1 - The X coordinate of the left edge of the capturing rectangle defaults to 0
        * @param {number} opt_y1 - The Y coordinate of the top edge of the capturing rectangle defaults to 0
        * @param {number} opt_x2 - The X coordinate of the right edge of the capturing rectangle defaults to viewport width
        * @param {number} opt_y2 - The Y coordinate of the bottom edge of the capturing rectangle defaults to viewport height
        */
        capture(callback: Function, opt_capturables?: Array<H.util.ICapturable>, opt_x1?: number, opt_y1?: number, opt_x2?: number, opt_y2?: number);

        /**
        * This method sets the rendering engine type for the map. Rendering engine is responsible for displaying i.e tiles and data on the map.
        * @param {H.Map.EngineType} type - 
        */
        setEngineType(type: H.Map.EngineType): H.Map;

        /**
        * To persistently store the content of a map layer for a given area and range of zoom levels. It can be used to enable map rendering when no internet connection is established and also to reduce the download traffic for frequently visited map areas.
        * @param {Function} opt_onprogress - A callback which is invoked every time when the progress state of the returned store request changes.
        * @param {H.geo.Rect} opt_bounds - The area to store, default is the current view bounds
        * @param {number} opt_min - The minimum zoom level to store, default is the current zoom level
        * @param {number} opt_max - The maximum zoom level to store, default is the current zoom level
        * @param {H.map.layer.BaseTileLayer} opt_layer - The layer to store, default is the current base layer
        */
        storeContent(opt_onprogress?: Function, opt_bounds?: H.geo.Rect, opt_min?: number, opt_max?: number, opt_layer?: H.map.layer.BaseTileLayer): H.util.Request;

        /**
        * To clear the entire stored content
        * @param {Function} opt_onprogress - A callback which is invoked every time when the progress state of the returned clear request changes
        */
        clearContent(opt_onprogress?: Function): H.util.Request;

        /**
        * This method adds a layer to the map.
        * @param {H.map.layer.Layer} layer - The map layer to be added
        * @param {number} opt_idx - index at which the new layer should be inserted
        */
        addLayer(layer: H.map.layer.Layer, opt_idx?: number): H.Map;

        /**
        * This method removes layer from the map.
        * @param {H.map.layer.Layer} layer - The map layer to be removed
        */
        removeLayer(layer: H.map.layer.Layer): H.Map;

        /**
        * This method will set provided layer as base map. The layer will be inserted as the bottom most layer in the map.
        * @param {H.map.layer.Layer} layer - The layer to use as base map
        */
        setBaseLayer(layer: H.map.layer.Layer): H.Map;

        /**
        * To get the current base map layer.
        */
        getBaseLayer(): H.map.layer.Layer;

        /**
        * Returns the screen coordinates according to the given geographical coordinates. This method returns a screen pixel coordinates for the provided geo point.
        * @param {H.geo.IPoint} geoPoint - point on the map
        */
        geoToScreen(geoPoint: H.geo.IPoint): H.math.Point;

        /**
        * Returns the geographical coordinates according to the given screen coordinates.
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        screenToGeo(x: number, y: number): H.geo.Point;

        /**
        * Returns the camera data according to the given screen coordinates. Method converts screen pixel coordinates to correct camera data object
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        screenToCameraData(x: number, y: number): H.map.ViewModel.CameraData;

        /**
        * This method adds an map object to the map. Map object can be a marker or a spatial object like polygon or polyline.
        * @param {Object} mapObject - The map object to add
        */
        addObject(mapObject: Object): Object;

        /**
        * This method removes previously added map object from the map.
        * @param {Object} mapObject - The map object to remove
        */
        removeObject(mapObject: Object): Object;

        /**
        * Note: The returned list should be used for read access only. Modifying the list directly can destroy the integrity of this map's object model. Please use the map's addObject/addObjects and removeObject/removeObjects methods.
        */
        getObjects(): Object;

        /**
        * Note: Objects which were added to the map previously will not be added again.
        * @param {Object} mapObjects - 
        */
        addObjects(mapObjects: Object): H.Map;

        /**
        * This method removes an array of object or an object group from the map.
        * @param {Object} mapObjects - 
        */
        removeObjects(mapObjects: Object): H.Map;

        /**
        * Returns the top most z-ordered map object found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        getObjectAt(x: number, y: number): Object;

        /**
        * Returns a list of map objects in descending z-order found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        getObjectsAt(x: number, y: number): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.Map
**/
declare namespace H.Map {
    /**
    * BackgroundRange - It defines the number of lower and higher zoom levels, where cached content of the base map is rendered while content of the current zoom level is still loading. Example: if range was set to {lower: 3, higher: 2} and current level is 10 then rendering engine will try to display cached tiles from lower zoom levels 7, 8, 9 and higher levels 11 and 12.
    */
    export interface BackgroundRange {

        /**
        * @var {number} lower-The number of lower zoom levels to take into account, default is 0
        */
        lower: number;

        /**
        * @var {number} higher-The number of higher zoom levels to take into account, default is 0
        */
        higher: number;

    }


    /**
    * EngineType - Types of engines
    */
    export enum EngineType {

        /**
        * P2D - 
        */
        P2D,

        /**
        * PANORAMA - 
        */
        PANORAMA,

    }


    /**
    * Options - This type defines options which can be used to initialize the map.
    */
    export interface Options {

        /**
        * @var {H.geo.IPoint} center-The initial center of the map, default is {lat:0, lng: 0}
        */
        center?: H.geo.IPoint;

        /**
        * @var {number} zoom-The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
        */
        zoom?: number;

        /**
        * @var {H.geo.Rect} bounds-The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
        */
        bounds?: H.geo.Rect;

        /**
        * @var {Array<H.map.layer.Layer>} layers-A list of layers to render on top of the base map
        */
        layers?: Array<H.map.layer.Layer>;

        /**
        * @var {H.Map.EngineType} engineType-The initial engine type to use, default is P2D
        */
        engineType?: H.Map.EngineType;

        /**
        * @var {number} pixelRatio-The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
        */
        pixelRatio?: number;

        /**
        * @var {H.map.Imprint.Options} imprint-The imprint options or null to suppress the imprint
        */
        imprint?: H.map.Imprint.Options;

        /**
        * @var {H.Map.BackgroundRange} renderBaseBackground-Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading. Example: {lower: 3, higher: 2}
        */
        renderBaseBackground?: H.Map.BackgroundRange;

        /**
        * @var {boolean} autoColor-Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted. See H.map.layer.Layer.Options#dark
        */
        autoColor?: boolean;

        /**
        * @var {number} margin-The size in pixel of the supplemental area to render for each side of the map
        */
        margin?: number;

        /**
        * @var {H.map.ViewPort.Padding} padding-The padding in pixels for each side of the map
        */
        padding?: H.map.ViewPort.Padding;

        /**
        * @var {boolean} fixedCenter-Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
        */
        fixedCenter?: boolean;

    }


}


/**
* Namespace: H.clustering
**/
declare namespace H.clustering {
    /**
    * DataPoint - This class represents the input data structure for data points to be clustered.
    */
    export class DataPoint {

        /**
        * @var {H.geo.Latitude} lat-The latitude coordinate of the data point's position
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-The longitude coordinate of the data point's position
        */
        lng: H.geo.Longitude;

        /**
        * @var {number} wt-The weight of the data point
        */
        wt: number;

        /**
        * @var {any} data-Data associated with this data point
        */
        data: any;

        /**
        * Constructor
        * @param {H.geo.Latitude} lat - The latitude coordinate of the data point's position
        * @param {H.geo.Longitude} lng - The longitude coordinate of the data point's position
        * @param {number} opt_weight - The weight of the data point as a positive number > 0. If not specified it , default is 1.
        * @param {any} opt_data - Optional data, which will be associated with this DataPoint
        */
        constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_weight?: number, opt_data?: any);

    }


    /**
    * ICluster - This interface describes a cluster of data points, which fulfill the clustering specification (i.e. data points are within the epsilon and there are enough points to form a cluster).
    */
    export interface ICluster {

        /**
        * Returns the maximum zoom level where this cluster doesn't fall apart into sub clusters and/or noise poinst
        */
        getMaxZoom(): number;

        /**
        * Returns the bounding rectangle of this cluster.
        */
        getBounds(): H.geo.Rect;

        /**
        * In analogue example from this class description, method traverses through all nodes of the tree beside the root.
        * @param {Function} callback - The callback gets the currently traversed entry as an argument, which is cluster or noise point.
        */
        forEachEntry(callback: Function);

        /**
        * In analogue example from this class description, method traverses only through leaf nodes of the tree.
        * @param {Function} callback - The callback gets the currently traversed noise point as argument.
        */
        forEachDataPoint(callback: Function);

        /**
        * Returns the geographical position of this cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * Returns the weight of this cluster result.
        */
        getWeight(): number;

        /**
        * To indicate whether this cluster result is a cluster or noise point
        */
        isCluster(): boolean;

        /**
        * Returns the minimum zoom level where this item is not part of another cluster
        */
        getMinZoom(): number;

    }


    /**
    * INoisePoint - This interface represents a data point which does not belong to a cluster.
    */
    export interface INoisePoint {

        /**
        * This method returns data which coresponds to this noise point.
        */
        getData(): any;

        /**
        * Returns the geographical position of this cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * Returns the weight of this cluster result.
        */
        getWeight(): number;

        /**
        * To indicate whether this cluster result is a cluster or noise point
        */
        isCluster(): boolean;

        /**
        * Returns the minimum zoom level where this item is not part of another cluster
        */
        getMinZoom(): number;

    }


    /**
    * IResult - This interface represents the result item of a clustering operation.
    */
    export interface IResult {

        /**
        * Returns the geographical position of this cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * Returns the weight of this cluster result.
        */
        getWeight(): number;

        /**
        * To indicate whether this cluster result is a cluster or noise point
        */
        isCluster(): boolean;

        /**
        * Returns the minimum zoom level where this item is not part of another cluster
        */
        getMinZoom(): number;

    }


    /**
    * ITheme - Interface which specifies the methods a theme must implement.
    */
    export interface ITheme {

        /**
        * Function returns a cluster presentation as a map object.
        * @param {H.clustering.ICluster} cluster - 
        */
        getClusterPresentation(cluster: H.clustering.ICluster): Object;

        /**
        * Function returns noise point presentation as a map object
        * @param {H.clustering.INoisePoint} noisePoint - 
        */
        getNoisePresentation(noisePoint: H.clustering.INoisePoint): Object;

    }


    /**
    * Provider - The clustering provider serves clusters and noise point representation for the map depending on the provided data set. Levels for clustering as well as custom cluster representation can be set via Options.
    */
    export class Provider extends H.util.EventTarget  {

        /**
        * @var {number} min-Minimum zoom level at which provider can cluster data
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can cluster data
        */
        max: number;

        /**
        * Constructor
        * @param {Array<H.clustering.DataPoint>} dataPoints - 
        * @param {H.clustering.Provider.Options} opt_options - 
        */
        constructor(dataPoints: Array<H.clustering.DataPoint>, opt_options?: H.clustering.Provider.Options);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - 
        * @param {Object} opt_scope - 
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

        /**
        * This method sets new data to the provider
        * @param {Array<H.clustering.DataPoint>} dataPoints - 
        */
        setDataPoints(dataPoints: Array<H.clustering.DataPoint>);

        /**
        * This method adds a data point to the provider. Beware that this method provokes reclustering of the whole data set.
        * @param {H.clustering.DataPoint} dataPoint - 
        */
        addDataPoint(dataPoint: H.clustering.DataPoint);

        /**
        * This method adds a list of data points to the provider. Beware that this method provokes reclustering of the whole data set.
        * @param {Array<H.clustering.DataPoint>} dataPoints - 
        */
        addDataPoints(dataPoints: Array<H.clustering.DataPoint>);

        /**
        * This method removes a data point from the provider. Beware that this method provokes reclustering of the whole data set.
        * @param {H.clustering.DataPoint} dataPoint - 
        */
        removeDataPoint(dataPoint: H.clustering.DataPoint);

        /**
        * This method returns current theme used for creating cluster visualization
        */
        getTheme(): H.clustering.ITheme;

        /**
        * This method sets new theme on the provider. Calling this method will change visuals for displayed clusters and noise points.
        * @param {H.clustering.ITheme} theme - 
        */
        setTheme(theme: H.clustering.ITheme);

        /**
        * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
        */
        providesDomMarkers(): boolean;

        /**
        * Returns all DomMarker cluster and noise point representations which intersect with the provided rectangular area.
        * @param {H.geo.Rect} bounds - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestDomMarkers(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.DomMarker>;

        /**
        * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
        */
        providesMarkers(): boolean;

        /**
        * Returns all cluster and noise point markers which intersect with the provided rectangular area.
        * @param {H.geo.Rect} bounds - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestMarkers(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Marker>;

        /**
        * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
        */
        providesSpatials(): boolean;

        /**
        * Returns all polyline, polygon, circle and rect objects which represent cluster and noise points and intersect with the provided area.
        * @param {H.geo.Rect} bounds - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatials(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Returns the spatial objects which intersect the given tile
        * @param {Object} tile - The tile for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatialsByTile(tile: Object, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Returns the accumulate invalidations of this provider's objects that have occurred.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
        * @param {Object} mapObject - The map object to be invalidated
        * @param {H.math.BitMask} changes - The flags indicating the types of occurred changes
        */
        invalidateObject(mapObject: Object, changes: H.math.BitMask);

    }


}


/**
* Namespace: H.clustering.Provider
**/
declare namespace H.clustering.Provider {
    /**
    * ClusteringOptions - Options which are used within cluster calculations.
    */
    export interface ClusteringOptions {

        /**
        * @var {number} eps-epsilon parameter for cluster calculation. For the FASTGRID strategy it must not exceed 256 and must take values that are power of 2. For the GRID and DYNAMICGRID strategies it can take values from 10 to 127. Default is 32.
        */
        eps?: number;

        /**
        * @var {number} minWeight-the minimum points weight sum to form a cluster, default is 2
        */
        minWeight?: number;

        /**
        * @var {H.geo.IProjection} projection-projection to use for clustering, default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {H.clustering.Provider.Strategy} strategy-clustering stretegy, defaults to H.clustering.Provider.Strategy.FASTGRID
        */
        strategy?: H.clustering.Provider.Strategy;

    }


    /**
    * Options - Options which are used to initialize the clustering Provider
    */
    export interface Options {

        /**
        * @var {number} min-The minimal supported zoom level, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22
        */
        max?: number;

        /**
        * @var {H.clustering.Provider.ClusteringOptions} clusteringOptions-options for clustering algorithm
        */
        clusteringOptions?: H.clustering.Provider.ClusteringOptions;

        /**
        * @var {H.clustering.ITheme} theme-cluster and noise point graphical representation
        */
        theme?: H.clustering.ITheme;

    }


    /**
    * Strategy - Enumeration represents possible clustering strategies. FASTGRID clustering is the efficient way to cluster large sets of data points. GRID clustering is slower but has greater precision due to the bigger range of epsilon values, this strategy suitable for clustering smaller data sets (up to 1000 data points) on desktop devices. DYNAMICGRID clustering uses the same algorithm of clustering as the GRID, but clusters on the viewport basis is meant to be used with data sets that are subject to the frequent update operations.
    */
    export enum Strategy {

        /**
        * FASTGRID - 
        */
        FASTGRID,

        /**
        * GRID - 
        */
        GRID,

        /**
        * DYNAMICGRID - 
        */
        DYNAMICGRID,

    }


}


/**
* Namespace: H.data
**/
declare namespace H.data {
    /**
    * AbstractReader - An abstract reader class defines interface for data readers and has general functionality related to fetching data and reader events.
    */
    export class AbstractReader extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string} opt_url - 
        */
        constructor(opt_url?: string);

        /**
        * Method returns H.map.layer.ObjectLayer that contains parsed data, and can be added directly to the map. It returns new instance of the class with every invocation. If data hasn't been parsed it will return H.map.layer.ObjectLayer that contains partial information, and reader will add new parsed objects to the layer's provider later on.
        */
        getLayer(): Object;

        /**
        * Method returns collection of currently parsed, and converted to H.map.Object data objects. Method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * Returns URL of the current file, which is either in process of fetching/parsing or file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * Method sets reader's URL. Method resets current Reader's state to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if Reader's state is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * Returns the reader's processing state for possible states see H.data.AbstractReader.State
        */
        getState(): H.data.AbstractReader.State;

        /**
        * Method launches parsing of the data file at the current url (see H.data.AbstractReader#setUrl or H.data.AbstractReader). Method uses XHR as a transport therefore same origin policy applies, or server should respond with proper CORS headers.
        */
        parse();

    }


}


/**
* Namespace: H.data.AbstractReader
**/
declare namespace H.data.AbstractReader {
    /**
    * Event - The event class for state events that are dispatched by AbstractReader
    */
    export class Event extends H.util.Event  {

        /**
        * Constructor
        * @param {Object} target - The target that's passed to event listeners
        * @param {string} type - The type of the event
        * @param {H.data.AbstractReader.State} state - The state of the target firing an event
        * @param {string} message - The message associated with an event
        */
        constructor(target: Object, type: string, state: H.data.AbstractReader.State, message: string);

    }


    /**
    * State - The state types of an Reader. Possible states are:
    */
    export enum State {

        /**
        * ERROR - 
        */
        ERROR,

        /**
        * LOADING - 
        */
        LOADING,

        /**
        * VISIT - 
        */
        VISIT,

        /**
        * READY - 
        */
        READY,

    }


}


/**
* Namespace: H.data.geojson
**/
declare namespace H.data.geojson {
    /**
    * Reader - The GeoJSON Reader is responsible for fetching and interpreting GeoJSON data. Reader creates H.map.Object that can be displayed on the map (for more details on GeoJSON see http://geojson.org/). Auxiliary data that accompanies geometries (everthing that properties field contains) is binded to the map object and can be fetched with object's getData method (see H.map.Object#getData)
    */
    export class Reader extends H.data.AbstractReader  {

        /**
        * Constructor
        * @param {string} opt_url - url of the data file
        * @param {H.data.geojson.Reader.Options} opt_options - additional reader parameters
        */
        constructor(opt_url?: string, opt_options?: H.data.geojson.Reader.Options);

        /**
        * Method launches parsing of the data provided.
        * @param {Object} data - 
        */
        parseData(data: Object);

        /**
        * Method returns H.map.layer.ObjectLayer that contains parsed data, and can be added directly to the map. It returns new instance of the class with every invocation. If data hasn't been parsed it will return H.map.layer.ObjectLayer that contains partial information, and reader will add new parsed objects to the layer's provider later on.
        */
        getLayer(): Object;

        /**
        * Method returns collection of currently parsed, and converted to H.map.Object data objects. Method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * Returns URL of the current file, which is either in process of fetching/parsing or file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * Method sets reader's URL. Method resets current Reader's state to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if Reader's state is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * Returns the reader's processing state for possible states see H.data.AbstractReader.State
        */
        getState(): H.data.AbstractReader.State;

        /**
        * Method launches parsing of the data file at the current url (see H.data.AbstractReader#setUrl or H.data.AbstractReader). Method uses XHR as a transport therefore same origin policy applies, or server should respond with proper CORS headers.
        */
        parse();

    }


}


/**
* Namespace: H.data.geojson.Reader
**/
declare namespace H.data.geojson.Reader {
    /**
    * Options - Options used to initialize a Reader
    */
    export interface Options {

        /**
        * @var {Function} style-Function that is invoked during parsing after object creation, and is used to set style of the object
        */
        style?: Function;

    }


}


/**
* Namespace: H.data.heatmap
**/
declare namespace H.data.heatmap {
    /**
    * Colors - This class defines a standard way to customize the colors displayed in a heat map by associating custom colors with the normalized "heat" values.
    */
    export class Colors {

        /**
        * @var {H.data.heatmap.Colors} static DEFAULT-Example
        */
        static DEFAULT: H.data.heatmap.Colors;

        /**
        * Constructor
        * @param {Object} stops - The color stops.
        * @param {boolean} opt_interpolate - The flag indicating whether interpolation is to be used to display smooth color transitions in the heat map (true) or whether the heat map is to be posterized (false), default is false.
        */
        constructor(stops: Object, opt_interpolate?: boolean);

    }


    /**
    * IDataPoint - An interface to represent a single data point that can be visualized in a heat map. It consists of the geographic coordinates defining its position and an optional value to be associated with this position.
    */
    export interface IDataPoint {

        /**
        * @var {number} value-The "heat" value associated with the given data point, default is 1.
        */
        value: number;

    }


    /**
    * Provider - The class provides tiles to visualize value-based or density-based heat maps. User can choose between density and value based heat map.
    */
    export class Provider extends H.map.provider.RemoteTileProvider  {

        /**
        * Constructor
        * @param {H.data.heatmap.Provider.Options} opt_options - Configuration options
        */
        constructor(opt_options?: H.data.heatmap.Provider.Options);

        /**
        * As new data might invalidate the already generated tiles, those tiles should be removed form the tile cache. Pass opt_hardReload parameter to change the mode how those tiles are removed. Two modes are possible:
        * @param {Array<H.data.heatmap.IDataPoint>} dataPoints - The array of data points to add.
        * @param {boolean} opt_hardReload - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false), default is soft mode.
        */
        addData(dataPoints: Array<H.data.heatmap.IDataPoint>, opt_hardReload?: boolean);

        /**
        * This method removes all data from the given heat map provider. New data can be added using the H.data.heatmap.Provider#addData method.
        */
        clear();

    }


}


/**
* Namespace: H.data.heatmap.Provider
**/
declare namespace H.data.heatmap.Provider {
    /**
    * Options - Options which are used to initialize the heat map Provider
    */
    export interface Options {

        /**
        * @var {string} type-The type of the heat map, either "value" or "density". Default is "density"
        */
        type: string;

        /**
        * @var {H.data.heatmap.Colors} colors-The colors of the heat map, default is H.data.heatmap.Colors.DEFAULT
        */
        colors: H.data.heatmap.Colors;

        /**
        * @var {number} min-The minimal supported zoom level, default is 0.
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22.
        */
        max?: number;

        /**
        * @var {number} tileSize-The size of a tile as edge length in pixels. It must be 2^n where n is in a range [0 ... 30]. Default is 256.
        */
        tileSize?: number;

        /**
        * @var {boolean} assumeValues-This property holds a boolean value defining whether to paint assumed values in regions where no data is available. This is especially useful for value maps which are generated from a small data sets as tiles with no available data will be filled with the next available average value in the data set. Default is false.
        */
        assumeValues?: boolean;

        /**
        * @var {number} coarseness-This property holds a numeric value defining the resolution reduction when producing tiles. If the coarseness is set to 0 tiles will be produced in the original resolution. A coarseness of 1 allows the renderer to render tiles at half the size and then scale the output, a coarseness of 2 allows the renderer to create tiles at a size of a quarter of the original tile size. Increasing the number dramatically increases performance but also reduces visual quality, especially when using "posterization" (non-interpolated colors). Values are clamped to a integer from a range [0 ... 3]. Default is 1.
        */
        coarseness?: number;

        /**
        * @var {number} sampleDepth-This property holds a numeric value defining the number of sampling iterations the heat map renderer will perform on the data set. Each iteration will sample the data more finely. Higher values will create more detailed maps but also cost performance. Values are clamped to a integer from a range [1 ... 8]. Default is 4.
        */
        sampleDepth?: number;

        /**
        * @var {number} dataMax-This property holds a numeric value defining the pixel color gamma correction in case of the "density" heat maps. Values are clamped to a integer from a range [min ... max+sampleDepth]. Default is max.
        */
        dataMax?: number;

    }


}


/**
* Namespace: H.data.kml
**/
declare namespace H.data.kml {
    /**
    * Reader - The KML Reader is responsible for fetching and interpreting KML data. Reader creates H.map.Object that can be displayed on the map, from KML Features and geometries as described by OGC. Auxiliary data that accompanies geometries (such as name, description, kml node itself etc.) is binded to the map object and can be fetched with object's getData method (see H.map.Object#getData).
    */
    export class Reader extends H.data.AbstractReader  {

        /**
        * Constructor
        * @param {string} url - 
        */
        constructor(url: string);

        /**
        * Method returns H.map.layer.ObjectLayer that contains parsed data, and can be added directly to the map. It returns new instance of the class with every invocation. If data hasn't been parsed it will return H.map.layer.ObjectLayer that contains partial information, and reader will add new parsed objects to the layer's provider later on.
        */
        getLayer(): Object;

        /**
        * Method returns collection of currently parsed, and converted to H.map.Object data objects. Method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * Returns URL of the current file, which is either in process of fetching/parsing or file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * Method sets reader's URL. Method resets current Reader's state to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if Reader's state is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * Returns the reader's processing state for possible states see H.data.AbstractReader.State
        */
        getState(): H.data.AbstractReader.State;

        /**
        * Method launches parsing of the data file at the current url (see H.data.AbstractReader#setUrl or H.data.AbstractReader). Method uses XHR as a transport therefore same origin policy applies, or server should respond with proper CORS headers.
        */
        parse();

    }


}


/**
* Namespace: H.geo
**/
declare namespace H.geo {
    /**
    * Altitude - A Geographic coordinate that specifies the height of a point in meters. A value of undefined is treated as 0.
    */
    export interface Altitude {

    }


    /**
    * AltitudeContext - Contexts for altitudes to specify the contextual origin of an altitude's value
    */
    export enum AltitudeContext {

        /**
        * undefined - Ground level
        */
        undefined,

        /**
        * GL - Ground level
        */
        GL,

        /**
        * OL - Obstruction level
        */
        OL,

        /**
        * SL - Mean sea level
        */
        SL,

        /**
        * SB - Sea bed level
        */
        SB,

        /**
        * WE - WGS84 ellipsoid
        */
        WE,

        /**
        * WG - WGS84 geoid
        */
        WG,

    }


    /**
    * IPoint - An interface to represent a geographic point. Every point in geo space is represented by three coordinates latitude, longitude and optional altitude.
    */
    export interface IPoint {

        /**
        * @var {H.geo.Latitude} lat-The latitude coordinate.
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-The longitude coordinate.
        */
        lng: H.geo.Longitude;

        /**
        * @var {H.geo.Altitude} alt-The altitude coordinate.
        */
        alt?: H.geo.Altitude;

        /**
        * @var {H.geo.AltitudeContext} ctx-The altitude context.
        */
        ctx?: H.geo.AltitudeContext;

    }


    /**
    * IProjection - Interface which describes map projection. Functions transform geo coordinates to EPSG3857 coordinate reference system, which is x,y values in range 0..1
    */
    export interface IProjection {

        /**
        * This method transforms geographical lat/lng coordinates to a projected point in range 0...1
        * @param {number} lat - latitude
        * @param {number} lng - longitude
        * @param {H.math.Point} opt_out - an optional point to store the result
        */
        latLngToPoint(lat: number, lng: number, opt_out?: H.math.Point): H.math.Point;

        /**
        * This method transforms projected x/y coordinates in range 0...1 to a geographical point
        * @param {number} x - 
        * @param {number} y - 
        * @param {H.geo.Point} opt_out - an optional point to store the result
        */
        xyToGeo(x: number, y: number, opt_out?: H.geo.Point): H.geo.Point;

        /**
        * This method transforms a projected point in range 0...1 to a geographical point
        * @param {H.math.IPoint} point - 
        * @param {H.geo.Point} opt_out - an optional point to store the result
        */
        pointToGeo(point: H.math.IPoint, opt_out?: H.geo.Point): H.geo.Point;

        /**
        * This method transforms a geographical point to a projected point in range 0...1
        * @param {H.geo.IPoint} geoPoint - 
        * @param {H.math.Point} opt_out - An optional point to store the result
        */
        geoToPoint(geoPoint: H.geo.IPoint, opt_out?: H.math.Point): H.math.Point;

    }


    /**
    * Latitude - A geographic coordinate that specifies the north-south position of a point on the Earth's surface in the range from -90 to + 90 degrees, inclusive.
    */
    export interface Latitude {

    }


    /**
    * Longitude - A Geographic coordinate that specifies the east-west position of a point on the Earth's surface in the range from -180 to 180 degrees, inclusive.
    */
    export interface Longitude {

    }


    /**
    * PixelProjection - PixelProjection is used to transform pixel world coordinates at certain scale (zoom level) to geographical coordinates and vice-versa. By default it uses mercator geo projection to transform geo points into the 2d plane map point which are adjusted to current scale.
    */
    export class PixelProjection {

        /**
        * @var {H.geo.IProjection} projection-Geographical projection that backs given PixelProjection.
        */
        projection: H.geo.IProjection;

        /**
        * @var {number} x-X-offset in projection relative to top left corner.
        */
        x: number;

        /**
        * @var {number} y-Y-offset in projection relative to top left corner.
        */
        y: number;

        /**
        * @var {number} w-Width of the world in pixels
        */
        w: number;

        /**
        * @var {number} h-Height of the world in pixels
        */
        h: number;

        /**
        * Constructor
        * @param {H.geo.IProjection} opt_projection - default is spherical mercator H.geo.mercator
        * @param {number} opt_sizeAtLevelZero - world size in pixels at zoom level 0, default is 256
        */
        constructor(opt_projection?: H.geo.IProjection, opt_sizeAtLevelZero?: number);

        /**
        * This method updates scale exponent for the pixel projection.
        * @param {number} zoom - 
        */
        rescale(zoom: number);

        /**
        * This method returns current zoom scale factor previously set by H.geo.PixelProjection#rescale function.
        */
        getZoomScale(): number;

        /**
        * This method translates geo point to pixel coordinates at given zoom level.
        * @param {H.geo.IPoint} geoPoint - 
        * @param {H.math.IPoint} opt_out - an optional point to store the result
        */
        geoToPixel(geoPoint: H.geo.IPoint, opt_out?: H.math.IPoint): H.math.IPoint;

        /**
        * This method translates a pixel's point to the according geo point.
        * @param {H.math.IPoint} point - 
        * @param {H.geo.IPoint} opt_out - an optional point to store the result
        */
        pixelToGeo(point: H.math.IPoint, opt_out?: H.geo.IPoint): H.geo.IPoint;

        /**
        * This method translates pixel's x and y coordinates to the according geo point.
        * @param {number} x - 
        * @param {number} y - 
        * @param {H.geo.Point} opt_out - an optional point to store the result
        */
        xyToGeo(x: number, y: number, opt_out?: H.geo.Point): H.geo.Point;

        /**
        * This method translates geographical coordinates (latitude, longitude) supplied by the caller. This method accepts longitudes outside of the normal longitude range. into a point defined in terms of pixel coordinates.
        * @param {number} latitude - The latitude to translate
        * @param {number} longitude - The longitude to translate
        * @param {H.math.IPoint} opt_out - an optional point to store the result
        */
        latLngToPixel(latitude: number, longitude: number, opt_out?: H.math.IPoint): H.math.Point;

        /**
        * Method translates provided map point to world pixel coordinates relative to current projection offset.
        * @param {H.math.IPoint} point - 
        */
        pointToPixel(point: H.math.IPoint): H.math.Point;

    }


    /**
    * Point - Class represents a geographical point, which is defined by the latitude, longitude and optional altitude.
    */
    export class Point implements H.geo.IPoint  {

        /**
        * @var {H.geo.Latitude} lat-The latitude coordinate.
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-The longitude coordinate.
        */
        lng: H.geo.Longitude;

        /**
        * @var {H.geo.Altitude} alt-The altitude coordinate.
        */
        alt: H.geo.Altitude;

        /**
        * @var {H.geo.AltitudeContext} ctx-The altitude context.
        */
        ctx: H.geo.AltitudeContext;

        /**
        * Constructor
        * @param {H.geo.Latitude} lat - The latitude coordinate
        * @param {H.geo.Longitude} lng - The longitude coordinate
        * @param {H.geo.Altitude} opt_alt - The altitude coordinate
        * @param {H.geo.AltitudeContext} opt_ctx - The altitude context
        */
        constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_alt?: H.geo.Altitude, opt_ctx?: H.geo.AltitudeContext);

        /**
        * To compare this point with a supplied other point for equality. Two points are considered equal if they have the same lat and lng as well as equivalent values for alt and ctx.
        * @param {H.geo.IPoint} other - 
        */
        equals(other: H.geo.IPoint): boolean;

        /**
        * To calculate the distance between this point and the supplied other point. The method uses the Haversine formula. The altitude is not considered.
        * @param {H.geo.IPoint} other - 
        */
        distance(other: H.geo.IPoint): number;

        /**
        * This method calculates the geographic point of a destination point using the distance and bearing specified by the caller. The altitude is ignored, instead the WGS84 Mean Radius is taken.
        * @param {number} bearing - The bearing to use in the calculation in degrees
        * @param {number} distance - The distance to the destination in meters
        * @param {boolean} opt_overGreatCircle - If true the computation uses the "Great Circle" otherwise "Rhumb Line".
        */
        walk(bearing: number, distance: number, opt_overGreatCircle?: boolean): H.geo.Point;

        /**
        * This method validates the given IPoint. It checks, if lat, lng, alt and ctx have valid types. Additionally the value of the lat property is clamped into a range of -90 ... +90 and the value of the lng property is modulo into a range of -180 ... +180 plus validates the values of the alt and ctx properties
        * @param {H.geo.IPoint} point - The point to validate
        * @param {Function} opt_caller - The caller to use for InvalidArgumentError. If omitted no error is thrown
        * @param {number} opt_argNr - The argument number to use for InvalidArgumentError.
        */
        static  validate(point: H.geo.IPoint, opt_caller?: Function, opt_argNr?: number): boolean;

        /**
        * This method creates a Point instance from a given IPoint object.
        * @param {H.geo.IPoint} iPoint - The IPoint object to use
        */
        static  fromIPoint(iPoint: H.geo.IPoint): H.geo.Point;

    }


    /**
    * Rect - This class represents a rectangular geographic area. The area is defined by four geographical coordinates two (left, right) longitudes and two (top, bottom) latitudes.
    */
    export class Rect {

        /**
        * Constructor
        * @param {H.geo.Latitude} top - the northern-most latitude
        * @param {H.geo.Longitude} left - the left-most longitude
        * @param {H.geo.Latitude} bottom - the southern-most latitude
        * @param {H.geo.Longitude} right - the right-most latitude
        */
        constructor(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude);

        /**
        * To compare this rectangle with a supplied other rectangle for equality.
        * @param {H.geo.Rect} other - 
        */
        equals(other: H.geo.Rect): boolean;

        /**
        * Toclone this rectangle.
        */
        clone(): H.geo.Rect;

        /**
        * This method returns the top-left corner of the rectangular area.
        */
        getTopLeft(): H.geo.Point;

        /**
        * This method returns the bottom-right corner of the rectangular area.
        */
        getBottomRight(): H.geo.Point;

        /**
        * This method returns the north-most latitude of this rectangular area
        */
        getTop(): H.geo.Latitude;

        /**
        * This method returns the south-most latitude of this rectangular area
        */
        getBottom(): H.geo.Latitude;

        /**
        * This method returns the left-most longitude of this rectangular area
        */
        getLeft(): H.geo.Longitude;

        /**
        * This method returns the right-most longitude of this rectangular area
        */
        getRight(): H.geo.Longitude;

        /**
        * This method returns the center point of this rectangular area
        */
        getCenter(): H.geo.Point;

        /**
        * Returns this width of this rectangular area in decimal degrees.
        */
        getWidth(): number;

        /**
        * Returns this height of this rectangular area in decimal degrees.
        */
        getHeight(): number;

        /**
        * Returns a boolean value indicating whether this rectangular area spans across the date border.
        */
        isCDB(): boolean;

        /**
        * The method checks if the area enclosed by the given bounding box is 0.
        */
        isEmpty(): boolean;

        /**
        * This method checks if the latitude and longitude supplied by the caller lie within the area of this rectangular area.
        * @param {H.geo.Latitude} lat - the latitude
        * @param {H.geo.Longitude} lng - the longitude
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        containsLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean): boolean;

        /**
        * This method checks if the point supplied by the caller lies within the area of this rectangular area.
        * @param {H.geo.IPoint} geoPoint - the point
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        containsPoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean): boolean;

        /**
        * This method checks if the rectangular area supplied by the caller is completely contained within the area of this rectangular area.
        * @param {H.geo.Rect} geoRect - the rectangular area
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        containsRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

        /**
        * This method returns the smallest bounding box that covers this rectangular area and the latitude and longitude supplied by the caller.
        * @param {H.geo.Latitude} lat - the latitude
        * @param {H.geo.Longitude} lng - the longitude
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        * @param {H.geo.Rect} opt_out - an optional rectangular area to store the result
        */
        mergeLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method returns the smallest bounding box that covers this rectangular area and the point supplied by the caller.
        * @param {H.geo.IPoint} geoPoint - the point to merge
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        * @param {H.geo.Rect} opt_out - an optional rectangular area to store the result
        */
        mergePoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
        * @param {H.geo.Rect} geoRect - the point to merge
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        * @param {H.geo.Rect} opt_out - an optional rectangular area to store the result
        */
        mergeRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
        * @param {H.geo.Latitude} top - The top latitude of the rectangle to merge
        * @param {H.geo.Longitude} left - The left longitude of the rectangle to merge
        * @param {H.geo.Latitude} bottom - The bottom latitude of the rectangle to merge
        * @param {H.geo.Longitude} right - The right longitude of the rectangle to merge
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        * @param {H.geo.Rect} opt_out - an optional rectangular area to store the result
        */
        mergeTopLeftBottomRight(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method checks if the intersection of two bounding boxes is non-empty.
        * @param {H.geo.Rect} geoRect - a rectangular area to be tested for intersection with this rectangular area
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        intersects(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

        /**
        * This method merges two rects by their values. The result of the merge is a bounding rect which covers all provided rect bounds.
        * @param {H.geo.Latitude} topA - the northern-most latitude
        * @param {H.geo.Longitude} leftA - the left-most longitude of operand A
        * @param {H.geo.Latitude} bottomA - the southern-most latitude of operand A
        * @param {H.geo.Longitude} rightA - the right-most latitude of operand A
        * @param {H.geo.Latitude} topB - the northern-most latitude of operand B
        * @param {H.geo.Longitude} leftB - the left-most longitude of operand B
        * @param {H.geo.Latitude} bottomB - the southern-most latitude of operand B
        * @param {H.geo.Longitude} rightB - the right-most latitude of operand B
        * @param {H.geo.Rect} opt_out - an optional rect to store the results
        */
        static  merge(topA: H.geo.Latitude, leftA: H.geo.Longitude, bottomA: H.geo.Latitude, rightA: H.geo.Longitude, topB: H.geo.Latitude, leftB: H.geo.Longitude, bottomB: H.geo.Latitude, rightB: H.geo.Longitude, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method creates a rectangular area from a top-left and bottom-right point pair.
        * @param {H.geo.IPoint} topLeft - the top-left corner of the area
        * @param {H.geo.IPoint} bottomRight - the bottom-right corner of the area
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        static  fromPoints(topLeft: H.geo.IPoint, bottomRight: H.geo.IPoint, opt_skipValidation?: boolean): H.geo.Rect;

        /**
        * This method creates the minimum rectangular area covering all of the points in the argument array.
        * @param {Array<H.geo.IPoint>} pointArray - the array of points to cover
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        static  coverPoints(pointArray: Array<H.geo.IPoint>, opt_skipValidation?: boolean): H.geo.Rect;

        /**
        * This method creates the minimum rectangular area covering all of the coordinates in the argument array.
        * @param {Array<number>} latLngAltArray - the array of coordinates to cover
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        static  coverLatLngAlts(latLngAltArray: Array<number>, opt_skipValidation?: boolean): H.geo.Rect | any;

        /**
        * This method creates the minimum rectangular area covering all of the rectangular areas in the argument array.
        * @param {Array<H.geo.Rect>} rectArray - the array of points to cover
        * @param {boolean} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
        */
        static  coverRects(rectArray: Array<H.geo.Rect>, opt_skipValidation?: boolean): H.geo.Rect | any;

        /**
        * This method clones the given bounding rect and resizes the clone if necessary until the location supplied by the caller is at its center.
        * @param {H.geo.IPoint} center - a point which is to be the center of the resized rectangular area
        * @param {H.geo.Rect} opt_out - an optional rectangular area to store the result
        */
        resizeToCenter(center: H.geo.IPoint, opt_out?: H.geo.Rect): H.geo.Rect;

    }


    /**
    * Strip - A strip is a flat list of latitude, longitude, altitude tuples in a fixed order.
    */
    export class Strip {

        /**
        * Constructor
        * @param {Array<number>} opt_latLngAlts - An optional array of latitude, longitude and altitude triples to initialize the strip with.
        * @param {H.geo.AltitudeContext} opt_ctx - An optional altitude context for all altitudes contained in this strip.
        */
        constructor(opt_latLngAlts?: Array<number>, opt_ctx?: H.geo.AltitudeContext);

        /**
        * This method pushes a lat, lng, alt to the end of this strip.
        * @param {H.geo.Latitude} lat - 
        * @param {H.geo.Longitude} lng - 
        * @param {H.geo.Altitude} alt - 
        */
        pushLatLngAlt(lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude);

        /**
        * This method splices the strip at the provided index, removing the specified number of items at that index and inserting the lat, lng, alt array.
        * @param {number} index - The index at which to splice
        * @param {number} opt_nRemove - The number of lat, lng, alt values to remove
        * @param {Array<number>} opt_latLngAlts - The lat, lng, alt values to add
        */
        spliceLatLngAlts(index: number, opt_nRemove?: number, opt_latLngAlts?: Array<number>): Array<number>;

        /**
        * This method inserts one set of lat, lng, alt values into the strip at the specified index.
        * @param {number} index - the index at which to add the element
        * @param {H.geo.Latitude} lat - the latitude to insert
        * @param {H.geo.Longitude} lng - the longitude to insert
        * @param {H.geo.Altitude} alt - the altitude to insert
        */
        insertLatLngAlt(index: number, lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude);

        /**
        * This method removes one set of lat, lng, alt values from the strip at the specified index.
        * @param {number} index - 
        */
        removeLatLngAlt(index: number);

        /**
        * This method pushes the lat, lng, alt values of a H.geo.Point to the end of this strip.
        * @param {H.geo.IPoint} geoPoint - 
        */
        pushPoint(geoPoint: H.geo.IPoint);

        /**
        * This method inserts the lat, lng, alt values of a H.geo.Point into the list at the specified index.
        * @param {number} pointIndex - 
        * @param {H.geo.IPoint} geoPoint - 
        */
        insertPoint(pointIndex: number, geoPoint: H.geo.IPoint);

        /**
        * This method removes one set of lat, lng, alt values from this strip at the virtual point index specified.
        * @param {number} pointIndex - the virtual point index
        */
        removePoint(pointIndex: number);

        /**
        * This method extracts a H.geo.Point from this strip at the virtual point index. If the extracted point has an alt value, the strip's altitude context will be supplied to the point.
        * @param {number} pointIndex - the virtual point index in the strip
        * @param {H.geo.Point} opt_out - an optional point object to store the lat, lng, alt values
        */
        extractPoint(pointIndex: number, opt_out?: H.geo.Point): H.geo.Point;

        /**
        * Example
        * @param {Function} eachFn - the function to be called for each 3 elements
        * @param {number} opt_start - an optional start index to iterate from
        * @param {number} opt_end - an optional end index to iterate to
        */
        eachLatLngAlt(eachFn: Function, opt_start?: number, opt_end?: number);

        /**
        * This method returns the number of times that legs in this strip cross the date border.
        * @param {boolean} opt_closed - indicates whether the strip is closed (i.e. whether the strip's last and first coordinates form the closing leg of a polygon)
        */
        getDBCs(opt_closed?: boolean): number;

        /**
        * This method return the number of points stored in this strip.
        */
        getPointCount(): number;

        /**
        * This method returns the internal array keeping the lat, lng, alt values. Modifying this array directly can destroy the integrity of this strip. Use it only for read access.
        */
        getLatLngAltArray(): Array<number>;

        /**
        * Note: The strip is treated as an open path. If the bounding rectangle for a closed shape is required, the closing leg must be merged in an extra step.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method checks whether two longitudes form a leg which crosses the date border.
        * @param {H.geo.Longitude} lng1 - the start longitude of the leg
        * @param {H.geo.Longitude} lng2 - the end longitude of the leg
        */
        static  isDBC(lng1: H.geo.Longitude, lng2: H.geo.Longitude): boolean;

        /**
        * This method initializes a new strip with an array of lat, lng values. Arrays are expected to have an even length with the format [lat, lng, lat, lng, ...].
        * @param {Array<number>} latLngs - the array of lat, lng value.
        */
        static  fromLatLngArray(latLngs: Array<number>): H.geo.Strip;

    }


}


/**
* Namespace: H.lang
**/
declare namespace H.lang {
    /**
    * IllegalOperationError - An error to throw if an illegal operation happens
    */
    export class IllegalOperationError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {any} opt_message - 
        */
        constructor(opt_caller?: Function, opt_message?: any);

    }


    /**
    * InvalidArgumentError - An error to throw if an argument is invalid
    */
    export class InvalidArgumentError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {number} opt_argNr - The number of the invalid argument (zero based)
        * @param {any} opt_message - 
        */
        constructor(opt_caller?: Function, opt_argNr?: number, opt_message?: any);

    }


    /**
    * OutOfRangeError - An error to throw if an value is out of range
    */
    export class OutOfRangeError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {number} opt_val - 
        * @param {Array<number>} opt_range - The range's values as [min, max]
        */
        constructor(opt_caller?: Function, opt_val?: number, opt_range?: Array<number>);

    }


}


/**
* Namespace: H.map
**/
declare namespace H.map {
    /**
    * AbstractMarker - This class represents marker, which offers a means of identifying a location on the map with an icon.
    */
    export class AbstractMarker extends H.map.Object  {

        /**
        * Constructor
        * @param {H.geo.IPoint} position - The location of this marker
        * @param {H.map.AbstractMarker.Options} opt_options - The values to initialize this marker
        */
        constructor(position: H.geo.IPoint, opt_options?: H.map.AbstractMarker.Options);

        /**
        * This method returns this marker's current position.
        */
        getPosition(): H.geo.Point;

        /**
        * This method sets the marker's current position.
        * @param {H.geo.IPoint} position - 
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * Returns this marker's current icon.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * Sets the marker's current icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * ArrowStyle - This class represents style attributes for arrows to be rendered along a polyline. A ArrowStyle instance is always treated as immutable to avoid inconstiencies and must not modified.
    */
    export class ArrowStyle {

        /**
        * Constructor
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_options - 
        */
        constructor(opt_options?: H.map.ArrowStyle | H.map.ArrowStyle.Options);

        /**
        * This method checks value-equality with another arrow style.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} other - the arrow style to compare with
        */
        equals(other: H.map.ArrowStyle | H.map.ArrowStyle.Options): boolean;

    }


    /**
    * ChangeEvent - An Event to signalize map related changes.
    */
    export class ChangeEvent extends H.util.ChangeEvent  {

        /**
        * @var {any} target-Object which triggered the event
        */
        target: any;

        /**
        * @var {any} currentTarget-Object which has listener attached
        */
        currentTarget: any;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {string} type - The type of the event
        * @param {Object} newValue - The view values that were set after the change
        * @param {Object} oldValue - The view values that were set before the change
        * @param {H.math.BitMask} modifiers - Indicates which values were changed. See properties FOV, PITCH, POSITION, ROLL, SIZE, YAW and ZOOM for the meaning of the bits.
        */
        constructor(type: string, newValue: Object, oldValue: Object, modifiers: H.math.BitMask);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


    /**
    * Circle - A Polygon with a circular shape.
    */
    export class Circle extends H.map.Polygon  {

        /**
        * Constructor
        * @param {H.geo.IPoint} center - The geographical coordinates of the circle's center
        * @param {number} radius - The radius of the circle in meters
        * @param {H.map.Circle.Options} opt_options - An object that specifies circle options and their initial values (among these, precision has a significant impact on the shape of the circle - please see
        */
        constructor(center: H.geo.IPoint, radius: number, opt_options?: H.map.Circle.Options);

        /**
        * To set the geographical center point of this circle. If the specified center is an instance of H.geo.Point you must not modify this Point instance without calling setCenter immediately afterwards.
        * @param {H.geo.IPoint} center - 
        */
        setCenter(center: H.geo.IPoint);

        /**
        * To get the center point of this circle You must not modify the returned Point instance without calling setCenter immediately afterwards.
        */
        getCenter(): H.geo.Point;

        /**
        * To set the length of the radius of the circle in meters. The value is clamped to the of {@code[0 ... 20015089.27787877]} (half WGS84 mean circumference)
        * @param {number} radius - 
        */
        setRadius(radius: number);

        /**
        * To get the length of the radius of the circle in meters.
        */
        getRadius(): number;

        /**
        * To set the precision of this circle {@see H.map.Circle.Options#precision}
        * @param {number} precision - 
        */
        setPrecision(precision: number);

        /**
        * To get the precision value of this circle
        */
        getPrecision(): number;

        /**
        * To set the indicator whether this polygon covers the north pole. It's needed for Polygons whose strip is defined as lines arround the world on longitude axis (for example a circle whose center is one of the poles). In this case a additional information is needed to know if the southern or northern part of the world should be covered by the poygon.
        * @param {boolean} flag - A value of true means it covers the north pole, false means south pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * See H.map.Polygon#setNorthPoleCovering
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips this polygon against a rectangular area. This method will take polygons crossing the date border into account duplicate the shape in the returned list of intersecting strips.
        * @param {H.geo.Rect} geoRect - the rectangular area against which to clip
        * @param {H.geo.PixelProjection} projection - a projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * This method returns the strip which represents the shape of the spatial object.
        */
        getStrip(): H.geo.Strip;

        /**
        * This method sets the geo-information for the spatial object
        * @param {H.geo.Strip} strip - The strip which represents the shape of the spatial object.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
        */
        getBounds(): H.geo.Rect;

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * DataModel - The class represents data model of the map. It holds list of layers that are rendered by map's RenderEngine. The class listens to 'update' events from layers and dispatches them to the RenderEngine.
    */
    export class DataModel extends H.util.OList  {

        /**
        * Constructor
        * @param {Array<any>} opt_layers - array of layers to be added to the data model
        */
        constructor(opt_layers?: Array<any>);

        /**
        * This method adds layer to the data model, which will result in displaying the layer on the map respecting the order in which they were added.
        * @param {H.map.layer.Layer} layer - The Layer to add
        * @param {number} opt_idx - index where the new element should be inserted
        */
        add(layer: H.map.layer.Layer, opt_idx?: number);

        /**
        * 
        * @param {number} idx - 
        * @param {H.map.layer.Layer} layer - 
        */
        set(idx: number, layer: H.map.layer.Layer): H.map.layer.Layer;

        /**
        * This method removes layer with the given index. This will effectively remove the layer from the map.
        * @param {number} idx - index of the layer to be removed
        */
        removeAt(idx: number): H.map.layer.Layer;

        /**
        * This method removes a given layer. This will effectively remove the layer from the map.
        * @param {H.map.layer.Layer} layer - The layer to be removed
        */
        remove(layer: H.map.layer.Layer): boolean;

        /**
        * This method removes all layers from data model.
        */
        flush();

        /**
        * This method retrieves the index of the first object in this list that is identical with the object supplied by the caller.
        * @param {any} entry - The entry for which to return the index.
        */
        indexOf(entry: any): number;

        /**
        * To get the entry at the specified index.
        * @param {number} idx - The index of the entry to get a negative index is treated as being relative from the end of the list
        */
        get(idx: number): any;

        /**
        * This method returns the length of the list.
        */
        getLength(): number;

        /**
        * This method returns all list's entries as an array.
        */
        asArray(): Array<any>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * DomIcon - A visual representation of the H.map.DomMarker.
    */
    export class DomIcon {

        /**
        * Constructor
        * @param {Element | string} element - The element or markup to use for this icon
        * @param {H.map.DomIcon.Options} opt_options - 
        */
        constructor(element: Element | string, opt_options?: H.map.DomIcon.Options);

    }


    /**
    * DomMarker - A marker with a visual representation in the form of a full styleable and scripteable DOM element. DomMarker are predestinated if small amounts of markers with dynamic styled and/or scripted icons should be displayed om the map (e.g. animated interactive SVG).
    */
    export class DomMarker extends H.map.AbstractMarker  {

        /**
        * Constructor
        * @param {H.geo.IPoint} position - 
        * @param {H.map.DomMarker.Options} opt_options - 
        */
        constructor(position: H.geo.IPoint, opt_options?: H.map.DomMarker.Options);

        /**
        * This method returns this marker's current position.
        */
        getPosition(): H.geo.Point;

        /**
        * This method sets the marker's current position.
        * @param {H.geo.IPoint} position - 
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * Returns this marker's current icon.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * Sets the marker's current icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * GeoShape - This class represents a spatial shape in geographic space. It is defined by a path containing the vertices of the shape (lat, lng, alt values).
    */
    export class GeoShape extends H.map.Spatial  {

        /**
        * Constructor
        * @param {boolean} isClosed - Indicates whether this geographical shape is closed (a polygon)
        * @param {H.geo.Strip} strip - The strip describing the shape of the spatial object
        * @param {H.map.Spatial.Options} options - The options to apply
        */
        constructor(isClosed: boolean, strip: H.geo.Strip, options: H.map.Spatial.Options);

        /**
        * This method returns the strip which represents the shape of the spatial object.
        */
        getStrip(): H.geo.Strip;

        /**
        * This method sets the geo-information for the spatial object
        * @param {H.geo.Strip} strip - The strip which represents the shape of the spatial object.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
        */
        getBounds(): H.geo.Rect;

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Group - This class represents a map object which can contain other map objects. It's visibility, zIndex and object-order influences the contained map objects
    */
    export class Group extends H.map.Object  {

        /**
        * Constructor
        * @param {H.map.Group.Options} opt_options - an optional object containing initialization values
        */
        constructor(opt_options?: H.map.Group.Options);

        /**
        * 
        * @param {Function} callback - 
        * @param {boolean} opt_recursive - Indicates whether sub groups should be traversed recursively
        * @param {any} opt_context - The context to use as "this" within the callback
        */
        forEach(callback: Function, opt_recursive?: boolean, opt_context?: any);

        /**
        * To get a list of all objects of this group. On groups with many chilren this method can cause a higher memory and CPU consumption. Alternatively you case use H.map.Group#forEach
        * @param {boolean} opt_recursive - Indicates whether objects in sub-groups are also collected .
        */
        getObjects(opt_recursive?: boolean): Object;

        /**
        * Method returns the bounding rectangle for the group. The rectangle is the smallest rectangle that covers all objects. If group doesn't contains objects method returns null.
        */
        getBounds(): H.geo.Rect;

        /**
        * To add an object to this group.
        * @param {Object} object - 
        */
        addObject(object: Object): Object;

        /**
        * Appends a list of objects to this group
        * @param {Object} objects - 
        */
        addObjects(objects: Object);

        /**
        * Removes an object from this group.
        * @param {Object} object - The object to remove
        */
        removeObject(object: Object): Object;

        /**
        * Removes objects from this group.
        * @param {Object} objects - The list of objects to remove
        */
        removeObjects(objects: Object);

        /**
        * Method removes all objects from the group.
        */
        removeAll();

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * HitArea - This class represents an area that objects, like a marker, occupies in the screen space, meaning that object can be probed and returned by H.Map@getObjectsAt method.
    */
    export class HitArea {

        /**
        * Constructor
        * @param {H.map.HitArea.ShapeType} shapeType - The shape type of the HitArea
        * @param {Array<number>} opt_values - The type-dependent values to define the shape of the hit area. The format for the different types are:
        */
        constructor(shapeType: H.map.HitArea.ShapeType, opt_values?: Array<number>);

    }


    /**
    * IControl - Control interface defines method which are used for direct view or camera manipulation
    */
    export interface IControl {

        /**
        * This method starts control action for camera. This action allows to control camera animation and movement according to provided values in the H.map.IControl#control function
        * @param {H.util.kinetics.IKinetics} opt_kinetics - kinetics settings
        * @param {number} opt_atX - control starts at x screen coordinate
        * @param {number} opt_atY - control starts at y screen coordinate
        */
        startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number);

        /**
        * This method triggers single control action on engine. This will trigger an animation which will start modification of the view's or camera's properties according to values begin set. Modification will occur at every frame. The speed values are measure by 'levels per frame' were 1 level cooresponds to a distance to next zoom level.
        * @param {number} moveX - moves the view/cam in right/left direction
        * @param {number} moveY - moves the view/cam in bottom/top direction
        * @param {number} moveZ - moves the view/cam in depth direction (changes zoom level)
        * @param {number} angleX - rotates cam over x-axis
        * @param {number} angleY - rotates cam over y-axis
        * @param {number} angleZ - rotates cam over z-axis
        * @param {number} zoom - changes current zoom level (for view works as moveZ)
        * @param {number} opt_timestamp - 
        */
        control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, zoom: number, opt_timestamp?: number);

        /**
        * Example
        * @param {boolean} opt_preventKinetics - if set to true will prevent kinetics animation
        * @param {Function} opt_adjustView - user defined function which can adjust the final view this function takes last requestedData from the view model and should return a modified H.map.ViewModel.CameraData which will be set as the final view
        */
        endControl(opt_preventKinetics?: boolean, opt_adjustView?: Function);

    }


    /**
    * ICopyright - An interface to specify a copyright note
    */
    export interface ICopyright {

        /**
        * @var {string} label-A short textual representation of the copyright note, e.g. "DigitalGlobe 2009"
        */
        label: string;

        /**
        * @var {string} alt-A detailed textual representation of the copyright note, e.g. "copyright 2009 DigitalGlobe, Inc."
        */
        alt: string;

    }


    /**
    * IInteraction - Interface describes interaction with the view port. Interaction will reflect view change depending on the interaction coordinates passed and the modifiers which specify the type of interaction.
    */
    export interface IInteraction {

        /**
        * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
        * @param {number} modifiers - a bitmask which specifies what operations should performed during every interaction
        * @param {H.util.kinetics.IKinetics} opt_kinetics - specifies kinetic move at the end of interaction
        */
        startInteraction(modifiers: number, opt_kinetics?: H.util.kinetics.IKinetics);

        /**
        * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
        * @param {number} x - viewport x coordinate
        * @param {number} y - viewport y coordinate
        * @param {number} opt_bx - x coordinate for second pointer/touch if present
        * @param {number} opt_by - y coordinate for secong pointer/touch if present
        * @param {number} opt_timestamp - known timestamp which should be passed
        */
        interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number);

        /**
        * This method ends interaction and applies kinetic movement if defined by using startInteraction method
        * @param {boolean} opt_preventKinetics - if set to true will prevent kinetics behaviour at the end of interaction
        */
        endInteraction(opt_preventKinetics?: boolean);

    }


    /**
    * Icon - A visual representation of the H.map.Marker.
    */
    export class Icon extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - Either an image URL, a SVG markup, an image or a canvas.
        * @param {H.map.Icon.Options} opt_options - 
        */
        constructor(bitmap: string | HTMLImageElement | HTMLCanvasElement, opt_options?: H.map.Icon.Options);

        /**
        * Returns the icon's bitmap loading state
        */
        getState(): H.map.Icon.State;

        /**
        * Returns the bitmap of this icon or null if the bitmap is not ready yet (see H.map.Icon#getState)
        */
        getBitmap(): HTMLImageElement | HTMLCanvasElement;

        /**
        * Returns the size of this icon or null if a size wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY
        */
        getSize(): H.math.Size;

        /**
        * Returns the anchor point of this icon or null if an anchor wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY.
        */
        getAnchor(): H.math.Point;

        /**
        * Returns the hit area of the icon.
        */
        getHitArea(): H.map.HitArea;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Imprint - This class encapsulates the brand, copyright and terms of use elements on the map.
    */
    export class Imprint extends H.util.Disposable  implements H.util.ICapturable  {

        /**
        * Constructor
        * @param {H.Map} map - The map where the imprint is attached to
        * @param {H.map.Imprint.Options} opt_options - The options to style the imprint
        */
        constructor(map: H.Map, opt_options?: H.map.Imprint.Options);

        /**
        * To set the imprint options. If no opt_options argument is defined then all values are reset to their defaults.
        * @param {H.map.Imprint.Options} opt_options - The options to style the imprint
        */
        setOptions(opt_options?: H.map.Imprint.Options);

        /**
        * This method retrieves the copyright string for the current view of the map.
        */
        getCopyrights(): string;

        /**
        * To get the CSS style declaration of the imprint DOM element
        */
        getStyle(): CSSStyleDeclaration;

        /**
        * Method adds a callback which will be triggered when the object is disposed
        * @param {Function} callback - 
        * @param {Object} opt_scope - 
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

        /**
        * This method is used to capture the element view
        * @param {HTMLCanvasElement} canvas - HTML Canvas element to draw the view of the capturable element
        * @param {number} pixelRatio - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
        * @param {Function} callback - Callback function to call once result of the capturing is ready
        * @param {Function} opt_errback - Callback function to call if error occurred during capturing
        */
        capture(canvas: HTMLCanvasElement, pixelRatio: number, callback: Function, opt_errback?: Function);

    }


    /**
    * Marker - A marker with a visual representation in the form of a bitmap icon. Marker are predestinated if large amounts of markers with static icons should be displayed om the map.
    */
    export class Marker extends H.map.AbstractMarker  {

        /**
        * Constructor
        * @param {H.geo.IPoint} position - The location of this marker
        * @param {H.map.Marker.Options} opt_options - The values to initialize this marker
        */
        constructor(position: H.geo.IPoint, opt_options?: H.map.Marker.Options);

        /**
        * This method returns this marker's current position.
        */
        getPosition(): H.geo.Point;

        /**
        * This method sets the marker's current position.
        * @param {H.geo.IPoint} position - 
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * Returns this marker's current icon.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * Sets the marker's current icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Object - This class represents the abstract base class for map objects such as polylines, polygons, markers, groups etc.
    */
    export class Object extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {Object} opt_options - The values to initialize this object
        */
        constructor(opt_options?: Object);

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares two objects regarding their z-order, useful to sort a list of objects via Array's sort() method
        * @param {Object} first - The first object to compare
        * @param {Object} second - The second object to compare
        */
        static  compareZOrder(first: Object, second: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Overlay - This class represents an overlay, which offers a bitmap that covers a geographical reactangular area on the map.
    */
    export class Overlay extends H.map.Object  {

        /**
        * Constructor
        * @param {H.geo.Rect} bounds - The geographical reactangular area of this overlay
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - Either an image URL, a SVG markup, an image or a canvas.
        * @param {H.map.Overlay.Options} opt_options - Optional values values to initialize this overlay
        */
        constructor(bounds: H.geo.Rect, bitmap: string | HTMLImageElement | HTMLCanvasElement, opt_options?: H.map.Overlay.Options);

        /**
        * This method returns this overlay's current bounds.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method sets the overlay's current bounds.
        * @param {H.geo.Rect} bounds - 
        */
        setBounds(bounds: H.geo.Rect): H.map.Overlay;

        /**
        * Returns this overlay's current bitmap.
        */
        getBitmap(): HTMLImageElement | HTMLCanvasElement;

        /**
        * Sets the overlay's current bitmap.
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - Either an image URL, a SVG markup, an image or a canvas.
        */
        setBitmap(bitmap: string | HTMLImageElement | HTMLCanvasElement): H.map.Overlay;

        /**
        * Returns this overlay's current opacity.
        */
        getOpacity(): number;

        /**
        * Sets the overlay's current opacity.
        * @param {number} opacity - The opacity in range from 0 (transparent) to 1 (opaque).
        */
        setOpacity(opacity: number): H.map.Overlay;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Polygon - This class represents a polygon in geo-space. It is defined by a strip containing the vertices of a geo shape object (lat, lng, alt values) and a pen to use when rendering the polyline. Polygon represents a closed plane defined by the list of verticies, projected on the map display. List of vericies which define the polygon are is a list of geo coordinates encapsulated by the strip object H.geo.Strip
    */
    export class Polygon extends H.map.GeoShape  {

        /**
        * Constructor
        * @param {H.geo.Strip} strip - the strip describing this polygon's vertices
        * @param {H.map.Spatial.Options} opt_options - optional initialization parameters
        */
        constructor(strip: H.geo.Strip, opt_options?: H.map.Spatial.Options);

        /**
        * To set the indicator whether this polygon covers the north pole. It's needed for Polygons whose strip is defined as lines arround the world on longitude axis (for example a circle whose center is one of the poles). In this case a additional information is needed to know if the southern or northern part of the world should be covered by the poygon.
        * @param {boolean} flag - A value of true means it covers the north pole, false means south pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * See H.map.Polygon#setNorthPoleCovering
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips this polygon against a rectangular area. This method will take polygons crossing the date border into account duplicate the shape in the returned list of intersecting strips.
        * @param {H.geo.Rect} geoRect - the rectangular area against which to clip
        * @param {H.geo.PixelProjection} projection - a projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * This method returns the strip which represents the shape of the spatial object.
        */
        getStrip(): H.geo.Strip;

        /**
        * This method sets the geo-information for the spatial object
        * @param {H.geo.Strip} strip - The strip which represents the shape of the spatial object.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
        */
        getBounds(): H.geo.Rect;

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Polyline - This class represents a polyline in geo-space. It is defined by a path containing the vertices of a polyline (lat, lng, alt values) and a pen to use when tracing the path on the map.
    */
    export class Polyline extends H.map.GeoShape  {

        /**
        * Constructor
        * @param {H.geo.Strip} strip - the strip describing this polygon's vertices
        * @param {H.map.Polyline.Options} opt_options - optional initialization parameters
        */
        constructor(strip: H.geo.Strip, opt_options?: H.map.Polyline.Options);

        /**
        * This method clips this polyline against a rectangular area and returns the intersecting sub-lines.
        * @param {H.geo.Rect} geoRect - 
        */
        clip(geoRect: H.geo.Rect): Array<Array<number>>;

        /**
        * This method returns the strip which represents the shape of the spatial object.
        */
        getStrip(): H.geo.Strip;

        /**
        * This method sets the geo-information for the spatial object
        * @param {H.geo.Strip} strip - The strip which represents the shape of the spatial object.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
        */
        getBounds(): H.geo.Rect;

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Rect - A Polygon with a rectangular shape.
    */
    export class Rect extends H.map.Polygon  {

        /**
        * Constructor
        * @param {H.geo.Rect} bounds - The geographical bounding box for this rectangle
        * @param {H.map.Spatial.Options} opt_options - 
        */
        constructor(bounds: H.geo.Rect, opt_options?: H.map.Spatial.Options);

        /**
        * To set the bounds of this rectangle.
        * @param {H.geo.Rect} bounds - 
        */
        setBounds(bounds: H.geo.Rect);

        /**
        * To set the indicator whether this polygon covers the north pole. It's needed for Polygons whose strip is defined as lines arround the world on longitude axis (for example a circle whose center is one of the poles). In this case a additional information is needed to know if the southern or northern part of the world should be covered by the poygon.
        * @param {boolean} flag - A value of true means it covers the north pole, false means south pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * See H.map.Polygon#setNorthPoleCovering
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips this polygon against a rectangular area. This method will take polygons crossing the date border into account duplicate the shape in the returned list of intersecting strips.
        * @param {H.geo.Rect} geoRect - the rectangular area against which to clip
        * @param {H.geo.PixelProjection} projection - a projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * This method returns the strip which represents the shape of the spatial object.
        */
        getStrip(): H.geo.Strip;

        /**
        * This method sets the geo-information for the spatial object
        * @param {H.geo.Strip} strip - The strip which represents the shape of the spatial object.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
        */
        getBounds(): H.geo.Rect;

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Spatial - This class represents a spatial map object which provides its projected geometry.
    */
    export class Spatial extends H.map.Object  {

        /**
        * Constructor
        * @param {boolean} isClosed - Indicates whether this spatial object represents a closed shape
        * @param {H.map.Spatial.Options} opt_options - The options to apply
        */
        constructor(isClosed: boolean, opt_options?: H.map.Spatial.Options);

        /**
        * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent inconsistancies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * To set the arrow style of this object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - the arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * Indicates whether this spatial object represents a closed shape
        */
        isClosed(): boolean;

        /**
        * Returns the ID of this object.
        */
        getId(): any;

        /**
        * Sets the visibility of this object.
        * @param {boolean} opt_visibility - Indicates whether this map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * Returns the visibility of this object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * Returns the z-index of this object.
        */
        getZIndex(): number | any;

        /**
        * To set the-index of this object.
        * @param {number | any} zIndex - 
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * Compares the rendering z-order of this object with another object.
        * @param {Object} other - The other map object to compare with
        */
        compareZOrder(other: Object): number;

        /**
        * Returns the parent group which contains this object or null if the object is not contained by any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object in which this object is attached or the object itself.
        */
        getRootGroup(): Object;

        /**
        * Checks whether the given object is an inclusive descendant of this object
        * @param {any} object - The object that's being compared against.
        */
        contains(object: any): boolean;

        /**
        * The current provider of this object
        */
        getProvider(): Object;

        /**
        * Returns the invalidations of this object
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates this map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method returns previously stored arbitrary data from this object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this map object
        * @param {any} data - the data to be stored
        */
        setData(data: any): Object;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * SpatialStyle - The SpatialStyle class represents a style with which spatial objects like polylines and polygons are drawn. A SpatialStyle instance is always treated as immutable to avoid inconstiencies and must not modified.
    */
    export class SpatialStyle {

        /**
        * @var {string} strokeColor-The color of the stroke in CSS syntax, default is 'rgba(0, 85, 170, 0.6)'.
        */
        strokeColor: string;

        /**
        * @var {string} fillColor-The filling color in CSS syntax, default is 'rgba(0, 85, 170, 0.4)'.
        */
        fillColor: string;

        /**
        * @var {number} lineWidth-The width of the line in pixels, default is 2.
        */
        lineWidth: number;

        /**
        * @var {H.map.SpatialStyle.LineCap} lineCap-The style of the end caps for a line, default is 'round'.
        */
        lineCap: H.map.SpatialStyle.LineCap;

        /**
        * @var {H.map.SpatialStyle.LineJoin} lineJoin-The type of corner created, when two lines meet, default is 'miter'.
        */
        lineJoin: H.map.SpatialStyle.LineJoin;

        /**
        * @var {number} miterLimit-The miter length is the distance between the inner corner and the outer corner where two lines meet. The default is 10.
        */
        miterLimit: number;

        /**
        * @var {Array<number>} lineDash-The line dash pattern as an even numbered list of distances to alternately produce a line and a space. The default is [ ].
        */
        lineDash: Array<number>;

        /**
        * @var {number} lineDashOffset-The phase offset of the line dash pattern The default is 0.
        */
        lineDashOffset: number;

        /**
        * @var {number} static MAX_LINE_WIDTH-This constant represents the maximum line width which can be used for rendering.
        */
        static MAX_LINE_WIDTH: number;

        /**
        * @var {H.map.SpatialStyle} static DEFAULT_STYLE-This static member defines the default style for spatial objects on the map. It's value is  { strokeColor: '#05A', fillColor: 'rgba(0, 85, 170, 0.4)' lineWidth: 1, lineCap: 'round', lineJoin: 'miter', miterLimit: 10, lineDash: [ ], lineDashOffset: 0 }
        */
        static DEFAULT_STYLE: H.map.SpatialStyle;

        /**
        * Constructor
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_options - The optional style attributes
        */
        constructor(opt_options?: H.map.SpatialStyle | H.map.SpatialStyle.Options);

        /**
        * This method checks value-equality with another style.
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} other - the style to compare with
        */
        equals(other: H.map.SpatialStyle | H.map.SpatialStyle.Options): boolean;

        /**
        * Returns a copy of spatial style object and replaces the passed style attributes into it.
        * @param {H.map.SpatialStyle.Options} opt_attributes - The style attributes to set on the copied style instance
        */
        getCopy(opt_attributes?: H.map.SpatialStyle.Options): H.map.SpatialStyle;

    }


    /**
    * ViewModel - This class represents a view of the map. It consists of a virtual camera and a look-at point both of which have a position in geo-space and orientation angles. The view model allows to change the values of these objects in order to move or rotate the map or zoom in and out.
    */
    export class ViewModel extends H.util.EventTarget  implements H.map.IControl  {

        /**
        * This method returns the camera data, which is currently rendered.
        */
        getCameraData(): H.map.ViewModel.CameraData;

        /**
        * This method sets new camera data to be processed by the renderer.
        * @param {H.map.ViewModel.CameraData} data - the values to be modified
        */
        setCameraData(data: H.map.ViewModel.CameraData): H.map.ViewModel;

        /**
        * This method sets a new zoom level to be processed by the renderer
        * @param {number} zoom - the new zoom level
        * @param {boolean} animate - 
        */
        setZoom(zoom: number, animate: boolean);

        /**
        * This method returns the zoom level that is currently rendered.
        */
        getZoom(): number;

        /**
        * This method returns the currently requested data.
        */
        getRequestedCameraData(): H.map.ViewModel.CameraData;

        /**
        * A method to signal the begin of a control operation.
        * @param {H.util.kinetics.IKinetics} opt_kinetics - kinetics settings
        * @param {number} opt_atX - x screen coordinate at which control has started
        * @param {number} opt_atY - y screen coordinate at which control has started
        */
        startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number);

        /**
        * A method to set the values for a continuously modification of the ViewModel on different axes. If the current render engine doesn't support certain modifications then they are ignored.
        * @param {number} moveX - The movement on x-axis as levels per millisecond where a level correlates to the distance between camera and look-at point.
        * @param {number} moveY - The movement on y-axis as levels per millisecond where a level correlates to the distance between camera and look-at point
        * @param {number} moveZ - The movement on z-axis as levels per millisecond.
        * @param {number} angleX - The rotation of on screen's x axis as degrees per millisecond.
        * @param {number} angleY - The rotation of on screen's y axis as degrees per millisecond.
        * @param {number} angleZ - The rotation of on screen's z axis as degrees per millisecond.
        * @param {number} opt_zoom - The modification of the zoom level as levels per millisecond
        */
        control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, opt_zoom?: number);

        /**
        * A method to signal the end of a control operation.
        * @param {boolean} opt_preventKinetics - A flag to indicate whether a kinetic effect is performed
        * @param {Function} opt_adjustView - An callback to adjust the final ViewModel by modifying the passed camera data.
        */
        endControl(opt_preventKinetics?: boolean, opt_adjustView?: Function);

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * ViewPort - ViewPort object holds information about the HTML element where the map is rendered. It contains information regarding the element (view port) size and triggers events when the element size is changed.
    */
    export class ViewPort extends H.util.EventTarget  implements H.map.IInteraction  {

        /**
        * @var {Element} element-This property holds the HTML element, which defines the viewport.
        */
        element: Element;

        /**
        * @var {number} width-This property holds this viewport's current width
        */
        width: number;

        /**
        * @var {number} height-This property holds this viewport's current height
        */
        height: number;

        /**
        * @var {number} margin-This property holds this viewport's current margin value
        */
        margin: number;

        /**
        * @var {H.map.ViewPort.Padding} padding-This property holds this viewport's current padding
        */
        padding: H.map.ViewPort.Padding;

        /**
        * @var {H.math.Point} center-This property holds this viewport's current center point
        */
        center: H.math.Point;

        /**
        * Constructor
        * @param {Element} element - html element were map will be rendered
        * @param {H.map.ViewPort.Options} opt_options - optional configuration parameters
        */
        constructor(element: Element, opt_options?: H.map.ViewPort.Options);

        /**
        * This method sets the margin on the viewPort
        * @param {number} margin - margin which is used to fetch map data
        */
        setMargin(margin: number);

        /**
        * This method sets the padding on the viewport. Padding will result in shifted map center which will be the visual center of the padded area.
        * @param {number} top - padding from the top
        * @param {number} right - padding from the right
        * @param {number} bottom - padding from the bottom
        * @param {number} left - padding from the left
        */
        setPadding(top: number, right: number, bottom: number, left: number);

        /**
        * This method updates size of the viewport according to container size. It must be called whenever the HTML element changed size in order to update the map's viewport values.
        */
        resize();

        /**
        * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
        * @param {number} modifiers - a bitmask which specifies what operations should performed during every interaction
        * @param {H.util.kinetics.IKinetics} opt_kinetics - specifies kinetic move at the end of interaction
        */
        startInteraction(modifiers: number, opt_kinetics?: H.util.kinetics.IKinetics);

        /**
        * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
        * @param {number} x - viewport x coordinate
        * @param {number} y - viewport y coordinate
        * @param {number} opt_bx - x coordinate for second pointer/touch if present
        * @param {number} opt_by - y coordinate for secong pointer/touch if present
        * @param {number} opt_timestamp - known timestamp which should be passed
        */
        interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number);

        /**
        * This method ends interaction and applies kinetic movement if defined by using startInteraction method
        * @param {boolean} opt_preventKinetics - if set to true will prevent kinetics behaviour at the end of interaction
        */
        endInteraction(opt_preventKinetics?: boolean);

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.map.AbstractMarker
**/
declare namespace H.map.AbstractMarker {
    /**
    * Options - Options used to initialize a AbstractMarker
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.Icon | H.map.DomIcon} icon-The icon to use for the visual representation, if omitted a default icon is used.
        */
        icon?: H.map.Icon | H.map.DomIcon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data: any;

    }


}


/**
* Namespace: H.map.ArrowStyle
**/
declare namespace H.map.ArrowStyle {
    /**
    * Options - An object type to specify the style of arrows to render along a polyline
    */
    export interface Options {

        /**
        * @var {string} fillColor-The CSS color value used to fill the arrow shapes. If omitted or the value evaluates to false it defaults to "rgba(255, 255, 255, 0.75)"
        */
        fillColor?: string;

        /**
        * @var {number} width-The width of the arrow shape. The value is taken as a factor of the width of the line, where the arrow description is applied. If omitted or the value is <= 0 it defaults to 1.2
        */
        width?: number;

        /**
        * @var {number} length-The length of the arrow shapes. The value is taken as a factor of the width of the line at the end of which the arrow is drawn. If omitted or the value is <= 0 it defaults to 1.6
        */
        length?: number;

        /**
        * @var {number} frequency-The frequency of arrow shapes. The value is taken as factor of the length of the arrow. A value of 1 results in gapless arrows. If omitted or the value is false it defaults to 5
        */
        frequency?: number;

    }


}


/**
* Namespace: H.map.Circle
**/
declare namespace H.map.Circle {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle} style-the style to be used when tracing the polyline
        */
        style?: H.map.SpatialStyle;

        /**
        * @var {boolean} visibility-An optional boolean value indicating whether this map object is visible, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} precision-The precision of a circle as a number of segments to be used when rendering the circle. The value is clamped to the range between [4 ... 360], where 60 is the default. Note that the lower the value the more angular and the less circle-like the shape appears and, conversely, the higher the value the smoother and more rounded the result. Thus, starting at the extreme low end of the possible values, 4 produces a square, 6 a hexagon, while 30 results in a circle-like shape, although it appears increasingly angular as the zoom level increases (as you zoom in), and finally 360 produces a smooth circle.
        */
        precision?: number;

        /**
        * @var {number} zIndex-The z-index value of the circle, default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level for which the circle is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the circle is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
        */
        data: any;

    }


}


/**
* Namespace: H.map.DomIcon
**/
declare namespace H.map.DomIcon {
    /**
    * Options - Options used to initialize a DomIcon
    */
    export interface Options {

        /**
        * @var {Function} onAttach-A callback which is invoked before a clone of the icon's element is appended and displayed on the map. This callback can be used to setup the clone.
        */
        onAttach?: Function;

        /**
        * @var {Function} onDetach-A callback which is invoked after a clone of the icon's element is removed from the map. This callback can be used to clean up the clone.
        */
        onDetach?: Function;

    }


}


/**
* Namespace: H.map.DomMarker
**/
declare namespace H.map.DomMarker {
    /**
    * Options - Options used to initialize a DomMarker
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.DomIcon} icon-The icon to use for the visual representation, if omitted a default icon is used.
        */
        icon?: H.map.DomIcon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
        */
        data: any;

    }


}


/**
* Namespace: H.map.Group
**/
declare namespace H.map.Group {
    /**
    * Options - Options used to initialize a group
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data: any;

        /**
        * @var {Object} objects-A list of map objects to add initially to this group.
        */
        objects?: Object;

    }


}


/**
* Namespace: H.map.HitArea
**/
declare namespace H.map.HitArea {
    /**
    * ShapeType - Enumeration represents possible shape types that HitArea can have.
    */
    export enum ShapeType {

        /**
        * NONE - 
        */
        NONE,

        /**
        * RECT - 
        */
        RECT,

        /**
        * CIRCLE - 
        */
        CIRCLE,

        /**
        * POLYGON - 
        */
        POLYGON,

    }


}


/**
* Namespace: H.map.Icon
**/
declare namespace H.map.Icon {
    /**
    * State - The state types of an Icon
    */
    export enum State {

        /**
        * ERROR - 
        */
        ERROR,

        /**
        * LOADING - 
        */
        LOADING,

        /**
        * READY - 
        */
        READY,

    }


    /**
    * Options - Options used to initialize a Icon
    */
    export interface Options {

        /**
        * @var {H.math.ISize} size-The icon's size in pixel, default is the bitmap's natural size
        */
        size?: H.math.ISize;

        /**
        * @var {H.math.IPoint} anchor-The anchorage point in pixel, default is bottom-center
        */
        anchor?: H.math.IPoint;

        /**
        * @var {H.map.HitArea} hitArea-The area to use for hit detection, default is the whole rectangular area
        */
        hitArea?: H.map.HitArea;

        /**
        * @var {H.map.HitArea} asCanvas-Indicates whether a non canvas bitmap is converted into a canvas, default is true. The conversion improves the rendering performance but it could also cause a higher memory consumption.
        */
        asCanvas?: H.map.HitArea;

        /**
        * @var {boolean} crossOrigin-Specifies whether to use anonynous Cross-Origin Resource Sharing (CORS) when fetching an image to prevent resulting canvas from tainting, default is false. The option is ignored by IE9-10.
        */
        crossOrigin: boolean;

    }


}


/**
* Namespace: H.map.Imprint
**/
declare namespace H.map.Imprint {
    /**
    * Options - Options to style an imprint
    */
    export interface Options {

        /**
        * @var {boolean} invert-Indicates whether the logo is inverted. If omitted the current value remains, default is false.
        */
        invert?: boolean;

        /**
        * @var {string} font-The font of the text. If omitted the current value remains, default is "11px Arial,sans-serif".
        */
        font?: string;

        /**
        * @var {string} href-The URL of the "Terms of use" link. If omitted the current value remains, default is "http://here.com/terms".
        */
        href?: string;

    }


}


/**
* Namespace: H.map.Marker
**/
declare namespace H.map.Marker {
    /**
    * Options - Options used to initialize a Marker
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.Icon} icon-The icon to use for the visual representation, if omitted a default icon is used.
        */
        icon?: H.map.Icon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data?: any;

    }


}


/**
* Namespace: H.map.Object
**/
declare namespace H.map.Object {
    /**
    * Options - Options used to initialize a map object
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data: any;

    }


    /**
    * Type - The major types of map objects
    */
    export enum Type {

        /**
        * ANY - spatial object
        */
        ANY,

        /**
        * OVERLAY - spatial object
        */
        OVERLAY,

        /**
        * SPATIAL - spatial object
        */
        SPATIAL,

        /**
        * MARKER - Marker object
        */
        MARKER,

        /**
        * DOM_MARKER - DomMarker object
        */
        DOM_MARKER,

        /**
        * GROUP - DomMarker object
        */
        GROUP,

    }


}


/**
* Namespace: H.map.Overlay
**/
declare namespace H.map.Overlay {
    /**
    * Options - Options used to initialize an Overlay
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {number} opacity-The opacity of the object in range from 0 (transparent) to 1 (opaque), default is 1.
        */
        opacity?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data: any;

    }


}


/**
* Namespace: H.map.Polyline
**/
declare namespace H.map.Polyline {
    /**
    * Options - Options which are used to initialize a polyline
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} style-the style to be used when tracing the polyline
        */
        style?: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {H.map.ArrowStyle | H.map.ArrowStyle.Options} arrows-The arrows style to be used when rendering the polyline.
        */
        arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options;

        /**
        * @var {boolean} visibility-An optional boolean value indicating whether this map object is visible, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
        */
        data: any;

    }


}


/**
* Namespace: H.map.Spatial
**/
declare namespace H.map.Spatial {
    /**
    * Label - Data to used as rendering hint for a label
    */
    export interface Label {

        /**
        * @var {number} x-The X coordinate of the first line's starting point
        */
        x: number;

        /**
        * @var {number} y-The Y coordinate of the first line's base line
        */
        y: number;

        /**
        * @var {number} angle-The clockwise rotation angle in radians
        */
        angle: number;

        /**
        * @var {string} font-The CSS font-family
        */
        font: string;

        /**
        * @var {number} size-The CSS font-size
        */
        size: number;

        /**
        * @var {string} color-The CSS color
        */
        color: string;

        /**
        * @var {string} text-The text content, new line characters (\u000A) are interpreted as line breaks
        */
        text: string;

    }


    /**
    * Options - Options which are used to initialize spatial object object
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} style-the style to be used when tracing the spatial object
        */
        style?: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {H.map.ArrowStyle | H.map.ArrowStyle.Options} arrows-The arrows style to be used when rendering the spatial.
        */
        arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options;

        /**
        * @var {boolean} visibility-An optional boolean value indicating whether this map object is visible, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
        */
        data: any;

    }


}


/**
* Namespace: H.map.SpatialStyle
**/
declare namespace H.map.SpatialStyle {
    /**
    * LineCap - The style of the end caps for a line, one of 'butt', 'round' or 'square'.
    */
    export interface LineCap {

    }


    /**
    * LineJoin - The type of corner created, when two lines meet, one of 'round', 'bevel' or 'miter'.
    */
    export interface LineJoin {

    }


    /**
    * Options - Options used to initialize a style. If a property is not set, the default value from H.map.SpatialStyle is taken.
    */
    export interface Options {

        /**
        * @var {string} strokeColor-The color of the stroke in CSS syntax.
        */
        strokeColor?: string;

        /**
        * @var {string} fillColor-The color of the stroke in CSS syntax.
        */
        fillColor?: string;

        /**
        * @var {number} lineWidth-The width of the line in pixels, default is 2. The maximum supported line width is 100.
        */
        lineWidth?: number;

        /**
        * @var {H.map.SpatialStyle.LineCap} lineCap-The style of the end caps for a line.
        */
        lineCap?: H.map.SpatialStyle.LineCap;

        /**
        * @var {H.map.SpatialStyle.LineJoin} lineJoin-The type of corner created, when two lines meet.
        */
        lineJoin?: H.map.SpatialStyle.LineJoin;

        /**
        * @var {number} miterLimit-The miter limit in pixel, default is 10. The maximum supported miter limit is 100
        */
        miterLimit?: number;

        /**
        * @var {Array<number>} lineDash-The line dash pattern as an even numbered list of distances to alternately produce a line and a space. If the browser doesn't support this feature this style property is ignored.
        */
        lineDash: Array<number>;

        /**
        * @var {number} lineDashOffset-The phase offset of the line dash pattern
        */
        lineDashOffset?: number;

    }


}


/**
* Namespace: H.map.ViewModel
**/
declare namespace H.map.ViewModel {
    /**
    * CameraData - Defines camera's properties.
    */
    export interface CameraData {

        /**
        * @var {number} zoom-zoom level to be used by rendering engine
        */
        zoom?: number;

        /**
        * @var {H.geo.IPoint} position-the position of the virtual camera in geo-space
        */
        position: H.geo.IPoint;

        /**
        * @var {number} pitch-the rotation of the virtual camera along its local x-axis
        */
        pitch?: number;

        /**
        * @var {number} yaw-the rotation of the virtual camera along its local y-axis
        */
        yaw?: number;

        /**
        * @var {number} roll-the rotation of the virtual camera along its local z-axis
        */
        roll?: number;

        /**
        * @var {number} fov-
        */
        fov?: number;

    }


    /**
    * RequestedData - Defines currently requested view data, which will be rendered by the map.
    */
    export interface RequestedData {

        /**
        * @var {H.map.ViewModel.CameraData} camera-The requested camera properties
        */
        camera?: H.map.ViewModel.CameraData;

        /**
        * @var {number} zoom-The requested zoom level
        */
        zoom?: number;

        /**
        * @var {boolean} animate-indicates if the requested transition should be animated
        */
        animate?: boolean;

    }


    /**
    * UpdateEvent - Update event is fired whenever view model data is changed. It contains property which hold currently requested data
    */
    export class UpdateEvent extends H.util.Event  {

        /**
        * @var {any} target-Object which triggered the event
        */
        target: any;

        /**
        * @var {any} currentTarget-Object which has listener attached
        */
        currentTarget: any;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {H.map.ViewModel.RequestedData} requested - 
        */
        constructor(requested: H.map.ViewModel.RequestedData);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


}


/**
* Namespace: H.map.ViewPort
**/
declare namespace H.map.ViewPort {
    /**
    * Options - Options which may be used to initialize new ViewPort instance
    */
    export interface Options {

        /**
        * @var {number} margin-The size in pixel of the supplemental area to render for each side of the map
        */
        margin?: number;

        /**
        * @var {H.map.ViewPort.Padding} padding-The padding in pixels for each side of the map
        */
        padding?: H.map.ViewPort.Padding;

        /**
        * @var {boolean} fixedCenter-Indicates whether the center of the map should remain unchanged if the viewport's size or or padding has been changed, default is true
        */
        fixedCenter?: boolean;

    }


    /**
    * Padding - Represents viewport padding definition.
    */
    export interface Padding {

        /**
        * @var {number} top-the padding on the top edge (in pixels)
        */
        top: number;

        /**
        * @var {number} right-the padding on the right edge (in pixels)
        */
        right: number;

        /**
        * @var {number} bottom-the padding on the bottom edge (in pixels)
        */
        bottom: number;

        /**
        * @var {number} left-the padding on the left edge (in pixels)
        */
        left: number;

    }


}


/**
* Namespace: H.map.layer
**/
declare namespace H.map.layer {
    /**
    * BaseTileLayer - BaseTileLayer encapsulates funcitonailty that is common to all layers that deliver tiles, such as H.map.layer.TileLayer. The functionality includes geo bounding box to grid calculation, tile request management.
    */
    export class BaseTileLayer extends H.map.layer.Layer  {

        /**
        * Constructor
        * @param {H.map.provider.TileProvider} provider - data source for the TileLayer
        * @param {H.map.layer.ITileLayer.Options} opt_options - additional options
        */
        constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options);

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to geometrical projected rectangle at the current projection zoom level or at provided zoom level
        * @param {H.geo.Rect} geoRect - geo bounds to be projected
        * @param {number} opt_zoom - overrides current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method returns tile grid for a bounding rectangle
        * @param {H.math.Rect} rectBounds - projected rect bounds which coorespond to geo bounding box
        * @param {number} zoom - current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - zoom level
        */
        cancelTile(x: number, y: number, z: number);

        /**
        * This method requests tiles from the data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded will be included in response as soon as they will be available during subsequent calls.
        * @param {H.math.Rect} tileBounds - bounds in tile grid
        * @param {boolean} isCDB - 
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by this layer.
        * @param {number} zoomLevel - the zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level for which this layer will provide tiles.
        * @param {number} min - The new minimum zoom level of this layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level for which this layer will provide tiles.
        * @param {number} max - The new maximum zoom level of this layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class inheriting layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - the bounding area for which to retrieve the copyright information
        * @param {number} level - the zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * IMarkerLayer - This interface describes a layer which provides marker objects to the renderer.
    */
    export interface IMarkerLayer {

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

    }


    /**
    * ITileLayer - This interface describes a layer which provides data partitioned in quad-tree tiles in an x, y, z fashion (where z describes the level within the tree and x and y describe the absolute column and row indeces whithin the level).
    */
    export interface ITileLayer {

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, i.e. caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - zoom level
        */
        cancelTile(x: number, y: number, z: number);

    }


    /**
    * Layer - The Layer class represents an object that is evaluated by the renderer in the order in which it is added to the layers collection. It provides the basic infrastructure for dispatching update events to the renderer in case new data is available.
    */
    export class Layer extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {H.map.layer.Layer.Options} opt_options - optional configuration object
        */
        constructor(opt_options?: H.map.layer.Layer.Options);

        /**
        * This method checks if a zoom level can be served by this layer.
        * @param {number} zoomLevel - the zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level for which this layer will provide tiles.
        * @param {number} min - The new minimum zoom level of this layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level for which this layer will provide tiles.
        * @param {number} max - The new maximum zoom level of this layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class inheriting layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - the bounding area for which to retrieve the copyright information
        * @param {number} level - the zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * MarkerTileLayer - ObjectTileLayer represents map objects which are requested on a tile basis
    */
    export class MarkerTileLayer extends H.map.layer.BaseTileLayer  implements H.map.layer.IMarkerLayer  {

        /**
        * Constructor
        * @param {H.map.provider.MarkerTileProvider} provider - 
        * @param {H.map.layer.ITileLayer.Options} opt_options - 
        */
        constructor(provider: H.map.provider.MarkerTileProvider, opt_options?: H.map.layer.ITileLayer.Options);

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to geometrical projected rectangle at the current projection zoom level or at provided zoom level
        * @param {H.geo.Rect} geoRect - geo bounds to be projected
        * @param {number} opt_zoom - overrides current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method returns tile grid for a bounding rectangle
        * @param {H.math.Rect} rectBounds - projected rect bounds which coorespond to geo bounding box
        * @param {number} zoom - current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - zoom level
        */
        cancelTile(x: number, y: number, z: number);

        /**
        * This method requests tiles from the data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded will be included in response as soon as they will be available during subsequent calls.
        * @param {H.math.Rect} tileBounds - bounds in tile grid
        * @param {boolean} isCDB - 
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by this layer.
        * @param {number} zoomLevel - the zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level for which this layer will provide tiles.
        * @param {number} min - The new minimum zoom level of this layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level for which this layer will provide tiles.
        * @param {number} max - The new maximum zoom level of this layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class inheriting layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - the bounding area for which to retrieve the copyright information
        * @param {number} level - the zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

    }


    /**
    * ObjectLayer - This class represents a layer which renders map objects. Spatial objects like polygons and polylines a rendered to tiles before being passed to the enigne. Point objects like markers are provided as objects given an rectangular area.
    */
    export class ObjectLayer extends H.map.layer.Layer  implements H.map.layer.IMarkerLayer  {

        /**
        * Constructor
        * @param {Object} provider - the ObjectProvider which provides the map objects to this object layer.
        * @param {Object} opt_options - The options for this layer
        */
        constructor(provider: Object, opt_options?: Object);

        /**
        * This method returns current ObjectLayer's data provider
        */
        getProvider(): Object;

        /**
        * To request overlay objects for the passsed bounding rectangle. It returns all overlay objects which are contained within this bounding rectangle.
        * @param {H.geo.Rect} bounds - The bounding rectangle for which overlays are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestOverlays(bounds: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): Object;

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, i.e. caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - zoom level
        */
        cancelTile(x: number, y: number, z: number);

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which marker are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method checks if a zoom level can be served by this layer.
        * @param {number} zoomLevel - the zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level for which this layer will provide tiles.
        * @param {number} min - The new minimum zoom level of this layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level for which this layer will provide tiles.
        * @param {number} max - The new maximum zoom level of this layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class inheriting layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - the bounding area for which to retrieve the copyright information
        * @param {number} level - the zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * TileLayer - Tile Layer, represents data shown on map on a tile basis. Can be used to show map tile images or other type of data which is partitioned into tiles.
    */
    export class TileLayer extends H.map.layer.BaseTileLayer  implements H.map.layer.ITileLayer  {

        /**
        * Constructor
        * @param {H.map.provider.TileProvider} provider - data source for the TileLayer
        * @param {H.map.layer.ITileLayer.Options} opt_options - additional options
        */
        constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options);

        /**
        * This method will be called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, i.e. caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - tile row position
        * @param {number} y - tile column position
        * @param {number} z - zoom level
        */
        cancelTile(x: number, y: number, z: number);

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to geometrical projected rectangle at the current projection zoom level or at provided zoom level
        * @param {H.geo.Rect} geoRect - geo bounds to be projected
        * @param {number} opt_zoom - overrides current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method returns tile grid for a bounding rectangle
        * @param {H.math.Rect} rectBounds - projected rect bounds which coorespond to geo bounding box
        * @param {number} zoom - current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests tiles from the data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded will be included in response as soon as they will be available during subsequent calls.
        * @param {H.math.Rect} tileBounds - bounds in tile grid
        * @param {boolean} isCDB - 
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by this layer.
        * @param {number} zoomLevel - the zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level for which this layer will provide tiles.
        * @param {number} min - The new minimum zoom level of this layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level for which this layer will provide tiles.
        * @param {number} max - The new maximum zoom level of this layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class inheriting layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - the bounding area for which to retrieve the copyright information
        * @param {number} level - the zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.map.layer.IMarkerLayer
**/
declare namespace H.map.layer.IMarkerLayer {
    /**
    * Response - This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
    */
    export interface Response {

        /**
        * @var {number} total-The total number of markers, inclusive markers with not ready icons
        */
        total: number;

        /**
        * @var {Array<H.map.AbstractMarker>} markers-The marker objects for the bounding rectangle (only ready)
        */
        markers: Array<H.map.AbstractMarker>;

    }


    /**
    * TiledResponse - This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
    */
    export interface TiledResponse {

        /**
        * @var {number} number-of returned tiles
        */
        number: number;

        /**
        * @var {number} requested-number of requested tiles
        */
        requested: number;

        /**
        * @var {Array<H.map.AbstractMarker>} objects-the marker objects within requested tiled area
        */
        objects: Array<H.map.AbstractMarker>;

    }


}


/**
* Namespace: H.map.layer.ITileLayer
**/
declare namespace H.map.layer.ITileLayer {
    /**
    * Options - Options which are used to initialize a TileLayer object.
    */
    export interface Options {

        /**
        * @var {H.geo.IProjection} projection-an optional projection to be used for this layer, default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {number} opacity-tile layer opacity, default is 1
        */
        opacity?: number;

    }


    /**
    * Response - A response object for a tile request. Contains total number of elements requested and an array of currently available Tiles
    */
    export interface Response {

        /**
        * @var {number} total-the total number of requested tiles
        */
        total: number;

        /**
        * @var {Array<H.map.provider.Tile>} tiles-the tiles which this provider can currently return synchronously
        */
        tiles: Array<H.map.provider.Tile>;

    }


}


/**
* Namespace: H.map.layer.Layer
**/
declare namespace H.map.layer.Layer {
    /**
    * Options - Options which can be used when creating new layer object.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the layer can provide data, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the layer can provide data, default is 22
        */
        max?: number;

        /**
        * @var {boolean} dark-Indicates whether the content of this layer is mainly dark, default is false See also H.Map.Options#autoColor
        */
        dark?: boolean;

        /**
        * @var {H.geo.IProjection} projection-The projection to be used for this layer, default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {number} minWorldSize-The minimal world size at zoom level 0, default is 256
        */
        minWorldSize?: number;

    }


}


/**
* Namespace: H.map.layer.ObjectLayer
**/
declare namespace H.map.layer.ObjectLayer {
    /**
    * Options - Configuration object which can be use to initialize the ObjectLayer.
    */
    export interface Options {

        /**
        * @var {number} tileSize-the size of the tiles rendered by this layer for polylines and polygons (must be power of 2, default is 256)
        */
        tileSize?: number;

        /**
        * @var {number} tileCacheSize-the number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
        */
        tileCacheSize?: number;

        /**
        * @var {number} dataCacheSize-the number of tiles to cache which have render data only, default is 512
        */
        dataCacheSize?: number;

        /**
        * @var {number} pixelRatio-The pixelRatio to use for over-sampling in cases of high-resolution displays
        */
        pixelRatio?: number;

    }


    /**
    * OverlaysResponse - A response object returned by the H.map.layer.ObjectLayer#requestOverlays function.
    */
    export interface OverlaysResponse {

        /**
        * @var {number} total-The total number of overlays within the requested bounds, inclusive overlays which are not ready loaded yet
        */
        total: number;

        /**
        * @var {Array<H.map.Overlay>} overlays-A list all overlays which are ready to render
        */
        overlays: Array<H.map.Overlay>;

    }


}


/**
* Namespace: H.map.provider
**/
declare namespace H.map.provider {
    /**
    * ImageTileProvider - An ImageTileProvider uses network service to provide bitmap images as tiles.
    */
    export class ImageTileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * @var {number} tileSize-Size of a tile image supported by the provider
        */
        tileSize: number;

        /**
        * @var {any} requestTile-Request data on a tile basis
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-Cancels tile from being requested using a tile-key
        */
        cancelTileByKey: any;

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.ImageTileProvider.Options} options - configuration for tile provider
        */
        constructor(options: H.map.provider.ImageTileProvider.Options);

        /**
        * This method returns cache which should be used to store tiles
        */
        getCache(): H.util.ICache;

        /**
        * This method request tile from remote service
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - function which is called after response arrives
        * @param {Function} onError - function which is called in case of communication error
        * @param {Object} opt_priority - optional request priority level
        */
        requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: Object): H.util.ICancelable;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean);

        /**
        * This method creates a tile object with given parameters
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile coordinate (zoom)
        * @param {HTMLImageElement | HTMLCanvasElement} data - data for the tile
        * @param {Object} opt_options - free form options object. These options are meant to be used in tile specific rendering cases
        */
        createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's uri, and the tile's x, y and z coordinates, seperated by underscores e.g.: "4711_7_42_23"
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The z tile coordinate (zoom level)
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Invalidations - This class represents invalidation states of a renderable object. A renderer can optimize its rendering strategies based on the information in this object.
    */
    export class Invalidations {

        /**
        * @var {H.map.provider.Invalidations.Mark} static MARK_INITIAL-This constant represents the initial invalidation mark an invalidations object has.
        */
        static MARK_INITIAL: H.map.provider.Invalidations.Mark;

        /**
        * To update invalidation marks accordingly to the given the invalidation types.
        * @param {H.map.provider.Invalidations.Mark} mark - The invalidation mark to set
        * @param {H.math.BitMask} types - The descrete invalidation types to update
        */
        update(mark: H.map.provider.Invalidations.Mark, types: H.math.BitMask);

        /**
        * This method returns the current invalidation mark of this invalidations object.
        */
        getMark(): H.map.provider.Invalidations.Mark;

        /**
        * Checks whether any change occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isAny(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * Checks whether a visual change occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isVisual(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * Checks whether a spatial change occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isSpatial(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * Checks whether an add-operation occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isAdd(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * Checks whether a remove operation occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isRemove(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * Checks whether a z-order change occurred after the specified since mark
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isZOrder(since: H.map.provider.Invalidations.Mark): boolean;

    }


    /**
    * LocalObjectProvider - A LocalObjectProvider acts as a database for map objects. It provides functionality to fetch visible objects within concrete geographical bounds and zoom levels. All objects are organized within a hierarchical group structure. An object can be added to the provider by adding it to a group within this structure. The root group of the provider can be fetched via H.map.provider.LocalObjectProvider#getRootGroup. A H.Map has already its own LocalObjectProvider and provides functionality to add and remove objects. Only in advanced use cases there is a need to create an additional LocalObjectProvider.
    */
    export class LocalObjectProvider extends H.map.provider.ObjectProvider  {

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - 
        */
        constructor(opt_options?: H.map.provider.Provider.Options);

        /**
        * Returns the root group of this provider.
        */
        getRootGroup(): H.map.Group;

        /**
        * To remove an object from this provider's database. It must not called directly. It is invoked by H.map.Group which checks beforehand, that it is an H.map.Object instance and its provider is this provider.
        * @param {Object} object - The object to remove
        */
        removeObject(object: Object);

        /**
        * Returns the accumulate invalidations of this provider's objects that have occurred.
        * @param {Object} opt_type - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
        */
        getInvalidations(opt_type?: Object): H.map.provider.Invalidations;

        /**
        * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
        * @param {Object} mapObject - The map object to be invalidated
        * @param {H.math.BitMask} changes - The flags indicating the types of occurred changes
        */
        invalidateObject(mapObject: Object, changes: H.math.BitMask);

        /**
        * Checks whether this provider is currently providing overlay map objects. A concrete implementation of ObjectProvider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * Returns all Overlay objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestOverlays(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Overlay>;

        /**
        * Checks whether this provider is currently providing spatial map objects. A concrete implementation of ObjectProvider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * Returns all polyline, polygon, circle and rect objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatials(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Returns the spatial objects which intersect the given tile
        * @param {Object} tile - The tile for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatialsByTile(tile: Object, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Checks whether this provider is currently providing Marker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * Returns all Marker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Marker>;

        /**
        * Checks whether this provider is currently providing DomMarker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Returns all DomMarker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestDomMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.DomMarker>;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * MarkerTileProvider - A MarkerTileProvider uses network service to provide markers on tile basis.
    */
    export class MarkerTileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * @var {any} requestTile-Request data on a tile basis
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-Cancels tile from being requested using a tile-key
        */
        cancelTileByKey: any;

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.MarkerTileProvider.Options} options - configuration for tile provider
        */
        constructor(options: H.map.provider.MarkerTileProvider.Options);

        /**
        * To signal to this provider that a map object has been changed. The method marks tile, that contains that object as invalid and triggers dispatchUpdate()
        * @param {H.map.AbstractMarker} marker - The map object to be invalidated
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask);

        /**
        * Checks whether this provider is currently providing H.map.DomMarker map objects.
        */
        providesDomMarkers(): boolean;

        /**
        * This method returns cache which should be used to store tiles
        */
        getCache(): H.util.ICache;

        /**
        * This method request tile from remote service
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - function which is called after response arrives
        * @param {Function} onError - function which is called in case of communication error
        * @param {Object} opt_priority - optional request priority level
        */
        requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: Object): H.util.ICancelable;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean);

        /**
        * This method creates a tile object with given parameters
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile coordinate (zoom)
        * @param {HTMLImageElement | HTMLCanvasElement} data - data for the tile
        * @param {Object} opt_options - free form options object. These options are meant to be used in tile specific rendering cases
        */
        createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's uri, and the tile's x, y and z coordinates, seperated by underscores e.g.: "4711_7_42_23"
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The z tile coordinate (zoom level)
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * ObjectProvider - An abstract class to manage and provide map objects (Marker, Polyline, Polygon)
    */
    export class ObjectProvider extends H.map.provider.Provider  {

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - 
        */
        constructor(opt_options?: H.map.provider.Provider.Options);

        /**
        * Returns the accumulate invalidations of this provider's objects that have occurred.
        * @param {Object} opt_type - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
        */
        getInvalidations(opt_type?: Object): H.map.provider.Invalidations;

        /**
        * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
        * @param {Object} mapObject - The map object to be invalidated
        * @param {H.math.BitMask} changes - The flags indicating the types of occurred changes
        */
        invalidateObject(mapObject: Object, changes: H.math.BitMask);

        /**
        * Checks whether this provider is currently providing overlay map objects. A concrete implementation of ObjectProvider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * Returns all Overlay objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestOverlays(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Overlay>;

        /**
        * Checks whether this provider is currently providing spatial map objects. A concrete implementation of ObjectProvider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * Returns all polyline, polygon, circle and rect objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatials(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Returns the spatial objects which intersect the given tile
        * @param {Object} tile - The tile for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestSpatialsByTile(tile: Object, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * Checks whether this provider is currently providing Marker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * Returns all Marker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Marker>;

        /**
        * Checks whether this provider is currently providing DomMarker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Returns all DomMarker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area in geo space to intersect with
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        */
        requestDomMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.DomMarker>;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Provider - A Provider defines an object which works as a database for the map. Providers can exists in different forms they can implement client side object storage or they can request data from the remote service.
    */
    export class Provider extends H.util.EventTarget  {

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - 
        */
        constructor(opt_options?: H.map.provider.Provider.Options);

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * RemoteTileProvider - RemoteTileProvider is an abstract class which should be used by classes implementing data provision on a tile basis. Every child class needs to implement 'requestInternal' (to request remote tile) and 'getCache' (to provide configured cache object were tiled data is being cached)
    */
    export class RemoteTileProvider extends H.map.provider.TileProvider  {

        /**
        * @var {any} requestTile-Request data on a tile basis
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-Cancels tile from being requested using a tile-key
        */
        cancelTileByKey: any;

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.TileProvider.Options} options - The options to instantiate this TileProvider
        */
        constructor(options: H.map.provider.TileProvider.Options);

        /**
        * This method returns cache which should be used to store tiles
        */
        getCache(): H.util.ICache;

        /**
        * This method request tile from remote service
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - function which is called after response arrives
        * @param {Function} onError - function which is called in case of communication error
        * @param {Object} opt_priority - optional request priority level
        */
        requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: Object): H.util.ICancelable;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean);

        /**
        * This method creates a tile object with given parameters
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile coordinate (zoom)
        * @param {HTMLImageElement | HTMLCanvasElement} data - data for the tile
        * @param {Object} opt_options - free form options object. These options are meant to be used in tile specific rendering cases
        */
        createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's uri, and the tile's x, y and z coordinates, seperated by underscores e.g.: "4711_7_42_23"
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The z tile coordinate (zoom level)
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Tile - Generic Tile object which represents a part of the world fiting into the Tile area represented by the Tiel coordinates (x - row, y - column) and the zoom level (z). Number of tiles at particular zoom level (which means number of areas into world is being splitted) is defined as following: numberOfRows = numberOfColumns = 2^zoomlevel
    */
    export class Tile {

        /**
        * @var {string} key-Unique tile key generated by provider
        */
        key: string;

        /**
        * @var {any} data-Tile data (an image for example)
        */
        data: any;

        /**
        * @var {boolean} valid-This property holds a boolean flag indicating whether this tile is still valid (true) or whether it should be re-fetched (false)
        */
        valid: boolean;

        /**
        * @var {number} x-Tile column
        */
        x: number;

        /**
        * @var {number} y-Tile row
        */
        y: number;

        /**
        * @var {number} z-Tile zoom level
        */
        z: number;

        /**
        * Constructor
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile zoom level
        * @param {any} data - generic data object which cooresponds to the given coordinates
        */
        constructor(x: number, y: number, z: number, data: any);

    }


    /**
    * TileProvider - TileProvider is an abstract class to provide data on a tile basis
    */
    export class TileProvider extends H.map.provider.Provider  {

        /**
        * @var {any} requestTile-Request data on a tile basis
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-Cancels tile from being requested using a tile-key
        */
        cancelTileByKey: any;

        /**
        * @var {string} uri-This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
        */
        uri: string;

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.TileProvider.Options} options - The options to instantiate this TileProvider
        */
        constructor(options: H.map.provider.TileProvider.Options);

        /**
        * This method creates a tile object with given parameters
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile coordinate (zoom)
        * @param {HTMLImageElement | HTMLCanvasElement} data - data for the tile
        * @param {Object} opt_options - free form options object. These options are meant to be used in tile specific rendering cases
        */
        createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's uri, and the tile's x, y and z coordinates, seperated by underscores e.g.: "4711_7_42_23"
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The z tile coordinate (zoom level)
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.map.provider.ImageTileProvider
**/
declare namespace H.map.provider.ImageTileProvider {
    /**
    * Options - Options to initialize an ImageTileProvider instance
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted an auto-generated unique Session ID is used. If a cross sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimal supported zoom level, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22
        */
        max?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implementation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

        /**
        * @var {number} tileSize-The size of a tile as edge length in pixels. It must be 2^n where n is in range [0 ... 30], default is 256
        */
        tileSize?: number;

        /**
        * @var {Function} getURL-The function to create an URL for the specified tile. If it returns a falsy the tile is not requested.
        */
        getURL: Function;

        /**
        * @var {string | boolean} crossOrigin-The CORS settings to use for the crossOrigin attribute for the image, if omitted or if the value evaluates to false no CORS settings are used.
        */
        crossOrigin: string | boolean;

    }


}


/**
* Namespace: H.map.provider.Invalidations
**/
declare namespace H.map.provider.Invalidations {
    /**
    * Flag - This enumeration encapsulates bit flags for different invalidations of map objects.
    */
    export enum Flag {

        /**
        * NONE - 
        */
        NONE,

        /**
        * VISUAL - 
        */
        VISUAL,

        /**
        * SPATIAL - 
        */
        SPATIAL,

        /**
        * ADD - 
        */
        ADD,

        /**
        * REMOVE - 
        */
        REMOVE,

        /**
        * Z_ORDER - 
        */
        Z_ORDER,

    }


    /**
    * Mark - The invalidation mark represents a counter which is increased whenever an invalidation takes place.
    */
    export interface Mark {

    }


}


/**
* Namespace: H.map.provider.MarkerTileProvider
**/
declare namespace H.map.provider.MarkerTileProvider {
    /**
    * Options - Options which are used to initialize the MarkerTileProvider object.
    */
    export interface Options {

        /**
        * @var {number} min-The minimal supported zoom level, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22
        */
        max?: number;

        /**
        * @var {Function} requestData-function that fetches marker data and creates array of H.map.AbstractMarker that is passed success callback, if function fails to fetch data onError callback must be called
        */
        requestData: Function;

        /**
        * @var {boolean} providesDomMarkers-indicates if markers provided are of type H.map.DomMarker or H.map.Marker, default is H.map.Marker
        */
        providesDomMarkers?: boolean;

    }


}


/**
* Namespace: H.map.provider.Provider
**/
declare namespace H.map.provider.Provider {
    /**
    * Options - Options to initialize a Provider instance
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted an auto-generated unique Session ID is used. If a cross sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimal supported zoom level, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22
        */
        max?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implementation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

    }


}


/**
* Namespace: H.map.provider.TileProvider
**/
declare namespace H.map.provider.TileProvider {
    /**
    * Options - Options to initialize a TileProvider instance
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted an auto-generated unique Session ID is used. If a cross sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimal supported zoom level, default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, default is 22
        */
        max?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implememtation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

        /**
        * @var {number} tileSize-The size of a tile as edge length in pixels. It must be 2^n where n is in range [0 ... 30], default is 256
        */
        tileSize?: number;

    }


}


/**
* Namespace: H.map.render
**/
declare namespace H.map.render {
    /**
    * RenderEngine - Abstract RenderEngine class. Render engines are used to render geographical position set on the view model to the actual screen (viewport element). The rendered result may be different for different engines, since every engine uses its onw capabilities and specific implementation to present the current view model data in best possible way. In example for 2D engines user will se mostly 2 dimensional flat map presented by tiles, on the other hand 3D engines like panorama will display the same coordinates as a 'street view'. In other words RenderEngine is responsible for managing the rendering loop as well as for synchronizing rendered data with the view model and the data model. It manages what and how gets rendered inside the current viewport.
    */
    export class RenderEngine extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {H.map.ViewPort} viewPort - 
        * @param {H.map.ViewModel} viewModel - 
        * @param {H.map.DataModel} dataModel - 
        * @param {Object} options - 
        */
        constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: Object);

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.map.render.p2d
**/
declare namespace H.map.render.p2d {
    /**
    * RenderEngine - Canvas render engine implementation. This engine will present geo position (camera data) provided by the view model on a 2D canvas element, were all layers are rendered into the single canvas element in provided order. This class contains some additional canvas rendering specific functionality, which can be used by the application.
    */
    export class RenderEngine extends H.map.render.RenderEngine  {

        /**
        * Constructor
        * @param {H.map.ViewPort} viewPort - 
        * @param {H.map.ViewModel} viewModel - 
        * @param {H.map.DataModel} dataModel - 
        * @param {H.map.render.p2d.RenderEngine.Options} options - 
        */
        constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: H.map.render.p2d.RenderEngine.Options);

        /**
        * This method changes animation duration for all engine's animations
        * @param {number} duration - 
        */
        setAnimationDuration(duration: number);

        /**
        * This method returns current animation duration setting for engine's animations
        */
        getAnimationDuration(): number;

        /**
        * This method allows to set ease for all engine's animations.
        * @param {Function} easeFunction - function which alters progress. Function will receive progress as parameter which is a values between 0..1 and should return altered values also in 0..1 range.
        */
        setAnimationEase(easeFunction: Function);

        /**
        * This method return current setting for the animation ease.
        */
        getAnimationEase(): Function;

        /**
        * This method resets animation settings on the engine to defaults. Duration 300ms and ease to H.util.animation.ease.EASE_OUT_QUAD
        */
        resetAnimationDefaults();

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


}


/**
* Namespace: H.map.render.p2d.RenderEngine
**/
declare namespace H.map.render.p2d.RenderEngine {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {Object} renderBaseBackground-Object describes how many cached zoom levels should be used as a base map background while base map tiles are
        */
        renderBaseBackground?: Object;

        /**
        * @var {number} pixelRatio-The pixelRatio to use for over-sampling in cases of high-resolution displays
        */
        pixelRatio: number;

        /**
        * @var {boolean} enableSubpixelRendering-
        */
        enableSubpixelRendering?: boolean;

    }


}


/**
* Namespace: H.mapevents
**/
declare namespace H.mapevents {
    /**
    * Behavior - Behavior class uses map events and adds behavior functionality to the map. This allows map panning and zooming via using mouse wheel
    */
    export class Behavior extends H.util.Disposable  {

        /**
        * @var {number} static DRAGGING-Map responds to user dragging via mouse or touch
        */
        static DRAGGING: number;

        /**
        * @var {number} static WHEELZOOM-Map zooms in or out in respond to mouse wheel events
        */
        static WHEELZOOM: number;

        /**
        * @var {number} static DBLTAPZOOM-Map zooms in or out in response to double click or double tap. For double tap if more that one touches are on the screen map will zoom out.
        */
        static DBLTAPZOOM: number;

        /**
        * Constructor
        * @param {H.mapevents.MapEvents} mapEvents - previously initialized map events instance
        * @param {H.mapevents.Behavior.Options} options - additional options (i.e kinetics)
        */
        constructor(mapEvents: H.mapevents.MapEvents, options?: H.mapevents.Behavior.Options);

        /**
        * This method destroys all map interaction handling. Should be used when the behavior functionality is disposed. Behavior object will also be disposed (this function will be called) when attached H.mapevents.MapEvents object is dispose.
        */
        dispose();

        /**
        * This method disables the behavior functionality for the map
        * @param {number} opt_behavior - The bitmask of behaviors to disable. If no arguments are passed, all behaviors will be disabled.
        */
        disable(opt_behavior?: number);

        /**
        * This method re-enables the behavior functionality for the map.
        * @param {number} opt_behavior - The bitmask of behaviors to enable. If no arguments are passed, all behaviors will be enabled.
        */
        enable(opt_behavior?: number);

        /**
        * This method checks if certain functionality is enabled
        * @param {number} behavior - value like H.mapevents.Behavior.DRAGGING which the check is being performed
        */
        isEnabled(behavior: number): boolean;

    }


    /**
    * ContextMenuEvent - ContextMenuEvent should be fired, when a user right-clicks or longpresses on a map object.
    */
    export class ContextMenuEvent extends H.util.Event  {

        /**
        * @var {Array<H.util.ContextItem>} viewportX-Contains ContextItems, that will be used to create context menu entries. Should be filled by listeners of the "contextmenu" event
        */
        viewportX: Array<H.util.ContextItem>;

        /**
        * @var {number} viewportY-Map viewport y position
        */
        viewportY: number;

        /**
        * @var {Object} target-Target for the event
        */
        target: Object;

        /**
        * @var {Event} originalEvent-Original event
        */
        originalEvent: Event;

        /**
        * @var {Object} currentTarget-Object which has listener attached
        */
        currentTarget: Object;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {number} viewportX - The x coordinate on the viewport
        * @param {number} viewportY - The y coordinate on the viewport
        * @param {Object} target - The event's target element
        * @param {Event} originalEvent - target of the event
        */
        constructor(viewportX: number, viewportY: number, target: Object, originalEvent: Event);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


    /**
    * Event - Custom map event. Contains list of pointers on the map, list of changed pointers and original event. Inherits from H.util.Event.
    */
    export class Event extends H.util.Event  {

        /**
        * @var {Array<H.mapevents.Pointer>} pointers-Pointers which are currently on the screen
        */
        pointers: Array<H.mapevents.Pointer>;

        /**
        * @var {Array<H.mapevents.Pointer>} changedPointers-Pointers which has changed in course of event
        */
        changedPointers: Array<H.mapevents.Pointer>;

        /**
        * @var {Array<H.mapevents.Pointer>} targetPointers-Pointers which are on same target as the current pointer
        */
        targetPointers: Array<H.mapevents.Pointer>;

        /**
        * @var {H.mapevents.Pointer} currentPointer-Current pointer
        */
        currentPointer: H.mapevents.Pointer;

        /**
        * @var {Event} originalEvent-Original event fired by the browser
        */
        originalEvent: Event;

        /**
        * @var {Object} target-Object which triggered event. Can be the map object (i.e marker or polyline) or the map itself
        */
        target: Object;

        /**
        * @var {Object} currentTarget-Object which has listener attached
        */
        currentTarget: Object;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {string} type - type of event
        * @param {Array<H.mapevents.Pointer>} pointers - pointers which are currently on the screen
        * @param {Array<H.mapevents.Pointer>} changedPointers - pointers which changed during event
        * @param {Array<H.mapevents.Pointer>} targetPointers - pointers on the event target
        * @param {H.mapevents.Pointer} currentPointer - pointer which triggered the event
        * @param {Object} target - target map object which triggered event
        * @param {Event} originalEvent - original dom event
        */
        constructor(type: string, pointers: Array<H.mapevents.Pointer>, changedPointers: Array<H.mapevents.Pointer>, targetPointers: Array<H.mapevents.Pointer>, currentPointer: H.mapevents.Pointer, target: Object, originalEvent: Event);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


    /**
    * MapEvents - MapEvents enable the events functionality on the map and on the map objects. By using this extension it is possible to listen to events on map objects like markers, polylines, polygons, circles and on the map object itself. Events are triggered depending on user interaction. Please check the Events Summary section for the list of events fired by this class and by the map objects.
    */
    export class MapEvents extends H.util.Disposable  {

        /**
        * Constructor
        * @param {H.Map} map - map instance which is used for firing events
        */
        constructor(map: H.Map);

        /**
        * This method destroys the MapEvents by removing all handlers from the map object. After calling this function mapEvents and map objects will not trigger any events. This object will be disposed automatically if the corresponding map object is disposed.
        */
        dispose();

        /**
        * This method returns map into which events are attached
        */
        getAttachedMap(): H.Map;

    }


    /**
    * Pointer - Class representing pointer on the map surface. A pointer in platform specific definition would mean either mouse, touch, pen or any pointing device which can trigger browser events.
    */
    export class Pointer {

        /**
        * @var {number} static viewportX-X coordinate on the map's viewport
        */
        static viewportX: number;

        /**
        * @var {number} static viewportY-Y coordinate on the map's viewport
        */
        static viewportY: number;

        /**
        * @var {Object} static target-Map object directly under the pointer. Can be null if if pointer is out of the map viewport
        */
        static target: Object;

        /**
        * @var {number} static id-Pointer unique identifier.
        */
        static id: number;

        /**
        * @var {string} static type-Pointer type can be: 'mouse', 'touch' or 'pen'
        */
        static type: string;

        /**
        * @var {Object} static dragTarget-Object which is currently dragged by the pointer
        */
        static dragTarget: Object;

        /**
        * @var {H.mapevents.Pointer.Button} static button-Indicates which pointer device button has changed.
        */
        static button: H.mapevents.Pointer.Button;

        /**
        * Constructor
        * @param {number} viewportX - pointer position on x-axis
        * @param {number} viewportY - pointer position on y-axis
        * @param {number} id - unique pointer identifier among currently available pointers
        * @param {string} type - type of pointer can be i.e 'mouse', 'touch'. 'pen'
        * @param {H.mapevents.Pointer.Button} opt_button - Indicates which pointer device button has changed.
        * @param {number} opt_buttons - Indicates which pointer device buttons are being pressed, expressed as a bitmask. Uses the same values, as "buttons" in Pointer Events spec.
        */
        constructor(viewportX: number, viewportY: number, id: number, type: string, opt_button?: H.mapevents.Pointer.Button, opt_buttons?: number);

    }


    /**
    * WheelEvent - WheelEvent is fired when the mouse wheel is used over the map. It contains information about cursor position and the map object which resides directly under the cursor.
    */
    export class WheelEvent extends H.util.Event  {

        /**
        * @var {number} delta-Wheel move delta
        */
        delta: number;

        /**
        * @var {number} viewportX-Map viewport x position
        */
        viewportX: number;

        /**
        * @var {number} viewportY-Map viewport y position
        */
        viewportY: number;

        /**
        * @var {Object} target-Target for the event
        */
        target: Object;

        /**
        * @var {Event} originalEvent-Original mouse wheel event
        */
        originalEvent: Event;

        /**
        * @var {Object} currentTarget-Object which has listener attached
        */
        currentTarget: Object;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {number} deltaY - The wheel move delta on y-axis
        * @param {number} viewportX - The x coordinate on the viewport
        * @param {number} viewportY - The y coordinate on the viewport
        * @param {Object} target - The event's target element
        * @param {Event} originalEvent - target of the event
        */
        constructor(deltaY: number, viewportX: number, viewportY: number, target: Object, originalEvent: Event);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


}


/**
* Namespace: H.mapevents.Behavior
**/
declare namespace H.mapevents.Behavior {
    /**
    * Options - Options which are used to initialize the Behavior class.
    */
    export interface Options {

        /**
        * @var {H.util.kinetics.IKinetics} kinetics-The parameters for the kinetic movement.
        */
        kinetics?: H.util.kinetics.IKinetics;

        /**
        * @var {number} enable-The bitmask of behaviors to enable like H.mapevents.Behavior.DRAGGING. All are enabled by default.
        */
        enable?: number;

    }


}


/**
* Namespace: H.mapevents.Pointer
**/
declare namespace H.mapevents.Pointer {
    /**
    * Button - Types of a button
    */
    export enum Button {

        /**
        * NONE - No button
        */
        NONE,

        /**
        * LEFT - Left mouse button or touch contact or pen contact
        */
        LEFT,

        /**
        * MIDDLE - Middle mouse button
        */
        MIDDLE,

        /**
        * RIGHT - Right mouse button or Pen barrel button
        */
        RIGHT,

    }


    /**
    * Buttons - Indicates which pointer device buttons are being pressed, expressed as a bitmask. Bit values are:
    */
    export interface Buttons {

    }


}


/**
* Namespace: H.math
**/
declare namespace H.math {
    /**
    * BitMask - A signed 32 bit integer (JS restriction) where bit operator can be applied to. The range is [-2,147,483,648 ... 2,147,483,647] or [-2^31 ... 2^31 â 1]
    */
    export interface BitMask {

    }


    /**
    * IPoint - An interface for a 2-dimensional point consisting a x and y coordinate.
    */
    export interface IPoint {

        /**
        * @var {number} x-The point's coordinate on X-axis.
        */
        x: number;

        /**
        * @var {number} y-The point's coordinate on Y-axis.
        */
        y: number;

    }


    /**
    * ISize - An interface for a 2-dimensional size consisting a with and a height.
    */
    export interface ISize {

        /**
        * @var {number} w-The size's width.
        */
        w: number;

        /**
        * @var {number} h-The size's height.
        */
        h: number;

    }


    /**
    * Point - Class represents a 2-dimensional point, defined by x and y coordinates.
    */
    export class Point implements H.math.IPoint  {

        /**
        * @var {number} x-The point's coordinate on X-axis.
        */
        x: number;

        /**
        * @var {number} y-The point's coordinate on Y-axis.
        */
        y: number;

        /**
        * Constructor
        * @param {number} x - coordinate on x-axis
        * @param {number} y - coordinate on y-axis
        */
        constructor(x: number, y: number);

        /**
        * Sets the x and y coordinate of this point
        * @param {number} x - coordinate on x-axis
        * @param {number} y - coordinate on y-axis
        */
        set(x: number, y: number);

        /**
        * This method creates a copy of the current point.
        * @param {H.math.Point} opt_out - An optional point to store the copied values
        */
        clone(opt_out?: H.math.Point): H.math.Point;

        /**
        * This method adds given point coordinates to the current one.
        * @param {H.math.IPoint} other - The point to add
        */
        add(other: H.math.IPoint): H.math.Point;

        /**
        * This method substract given point coordinates from the current point.
        * @param {H.math.IPoint} other - The point to subtract
        */
        sub(other: H.math.IPoint): H.math.Point;

        /**
        * This method scales the current point coordinates by the given factor(s).
        * @param {number} factor - multiplication factor
        * @param {number} opt_factorY - If omitted, the factor argument is used
        */
        scale(factor: number, opt_factorY?: number): H.math.Point;

        /**
        * This method rounds the x and y coordinates of the point.
        */
        round(): H.math.Point;

        /**
        * Rounds the x and y coordinates to the next smaller integer values.
        */
        floor(): H.math.Point;

        /**
        * Rounds the x and y coordinates to the next greater integer values.
        */
        ceil(): H.math.Point;

        /**
        * This method compares current point coordinates with the supplied point coordinates.
        * @param {H.math.IPoint} other - The point to compare to.
        */
        equals(other: H.math.IPoint): boolean;

        /**
        * Calculates the closest point on a given line
        * @param {H.math.IPoint} start - The start point of the line
        * @param {H.math.IPoint} end - The end point of the line
        */
        getNearest(start: H.math.IPoint, end: H.math.IPoint): H.math.IPoint;

        /**
        * This method calculates the distance to a point supplied by the caller.
        * @param {H.math.IPoint} other - 
        */
        distance(other: H.math.IPoint): number;

        /**
        * This method creates a Point instance from a given IPoint object.
        * @param {H.math.IPoint} iPoint - The IPoint object to use
        */
        static  fromIPoint(iPoint: H.math.IPoint): H.math.Point;

    }


    /**
    * Rect - Class defines a rectangle in 2-dimensional geometric space. It is used to represent the area in projected space.
    */
    export class Rect {

        /**
        * Constructor
        * @param {number} left - The rectangle's left edge x value
        * @param {number} top - The rectangle's top edge y value
        * @param {number} right - The rectangle's right edge x value
        * @param {number} bottom - The rectangle's bottom edge y value
        */
        constructor(left: number, top: number, right: number, bottom: number);

        /**
        * To set all values of the rectangle's edges
        * @param {number} left - The rectangle's left edge x value
        * @param {number} top - The rectangle's top edge y value
        * @param {number} right - The rectangle's right edge x value
        * @param {number} bottom - The rectangle's bottom edge y value
        */
        set(left: number, top: number, right: number, bottom: number);

        /**
        * To get the rectangle's top-left vertex
        */
        getTopLeft(): H.math.Point;

        /**
        * To get the rectangle's bottom-right vertex
        */
        getBottomRight(): H.math.Point;

        /**
        * Method checks if provided coordinates lie within rectangle.
        * @param {number} x - x-coordinate to check
        * @param {number} y - y-coordinate to check
        */
        containsXY(x: number, y: number): boolean;

        /**
        * To create a rectangle from a top-left and bottom-right point pair.
        * @param {H.math.IPoint} topLeft - the top-left vertex of the rectanle
        * @param {H.math.IPoint} bottomRight - the bottom-right vertex of the rectanle
        */
        static  fromPoints(topLeft: H.math.IPoint, bottomRight: H.math.IPoint): H.math.Rect;

        /**
        * To clone a rectangle
        */
        clone(): H.math.Rect;

    }


    /**
    * Size - Class for representing sizes consisting of a width and height.
    */
    export class Size implements H.math.ISize  {

        /**
        * @var {number} w-The size's width value
        */
        w: number;

        /**
        * @var {number} h-The size's height value
        */
        h: number;

        /**
        * Constructor
        * @param {number} width - Width.
        * @param {number} height - Height.
        */
        constructor(width: number, height: number);

    }


}


/**
* Namespace: H.places
**/
declare namespace H.places {
    /**
    * Around - The Around endpoint represents sets of places within a specific location context, usually the location of the user. This endpoint is intended for applications that employ features such as augmented reality, where places around the user's location are displayed on a device. It is intended to provide places that are likely to be visible to the user as well as important places that are further away. For more visit Places API documentation
    */
    export class Around {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Categories - Categories endpoint is used to obtain the place categories available for a given location. The Place Categories endpoint represents sets of locally relevant categories that are organized in a directed acyclic graph. The category graph may change in the future and may differ depending on the location of the request. For more visti Places API documentation
    */
    export class Categories {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Explore - The Explore endpoint retrieves a list of relevant places nearby a given position or area. It answers the question "What interesting places are in the viewport of the map?" The results presented to the user are confined to those located in the current map view or search area and are ordered by popularity. For more visit Places API documentation
    */
    export class Explore {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Here - The Here endpoint answers the questions "Where am I?" and "What's right here where I am standing?" The search results consist of a list of places with addresses that lie within the vicinity of the search location. The feature is typically used by applications that include "check-in" or "click on map to get more information" options. For more visit Places API documentation
    */
    export class Here {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Lookup - Lookup Endpoint provides ability to find a place by its foreign ID. For more visti Places API Documentation
    */
    export class Lookup {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Search - The Search endpoint processes text string queries based on the user's input to find specific places. It answers questions of "what" and "where" for an online search of POI or address. For more visit Places API documentation
    */
    export class Search {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


    /**
    * Suggest - The Search Suggestions endpoint represents lists of suggested search terms related to a given (partial) search term and location context. This endpoint is used to help users to provide suggested search terms to the user while typing. For more visti Places API Documentation
    */
    export class Suggest {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService);

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function);

    }


}


/**
* Namespace: H.places.model
**/
declare namespace H.places.model {
    /**
    * GetLink - GetLink - is abstraction that wraps passed object and creates method for executing GET requests against href value of the object.
    */
    export class GetLink {

        /**
        * Constructor
        * @param {Object} obj - that we are wrapping into GetLink instance. Should contain href property
        * @param {H.service.PlacesService} service - 
        */
        constructor(obj: Object, service: H.service.PlacesService);

        /**
        * Follows available href by executing ajax get request against it.
        * @param {Function} onResult - gets called when result of follow request gets completed
        * @param {Function} onError - gets called if something goes wrong when trying to follow link
        * @param {Object} queryParams - contains additional query params that should be passed when following link.
        */
        follow(onResult: Function, onError: Function, queryParams: Object);

    }


    /**
    * PostLink - PostLink - is abstraction that wraps passed object and creates method for executing POST request against href value of the object.
    */
    export class PostLink {

        /**
        * Constructor
        * @param {Object} obj - 
        */
        constructor(obj: Object);

        /**
        * Executes post ajax request against object's href property with data as a body
        * @param {Object} body - of the POST request
        * @param {Function} onResult - gets called when result of post request gets completed
        * @param {Function} onError - gets called if something goes wrong when trying to post
        * @param {Object} queryParams - contains additional query params that should be passed when posting
        */
        post(body: Object, onResult: Function, onError: Function, queryParams: Object);

    }


    /**
    * ResultSet - ResultSet - wraps the Discover Result Set and adds auxiliary functions. For more information about Discover Result Set visit our Places API documentation
    */
    export class ResultSet {

        /**
        * Constructor
        * @param {Object} resultSet - 
        * @param {H.service.PlacesService} service - 
        */
        constructor(resultSet: Object, service: H.service.PlacesService);

        /**
        * Follow next link is a Ajax GET request.
        * @param {Function} onResult - callback that gets triggered with the full response of the next request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        fetchNext(onResult: Function, onError: Function);

        /**
        * Follow previous link is a Ajax GET request.
        * @param {Function} onResult - callback that gets triggered with the full response of the next request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        fetchPrevious(onResult: Function, onError: Function);

    }


}


/**
* Namespace: H.service
**/
declare namespace H.service {
    /**
    * AbstractRestService - Abstract rest service class
    */
    export class AbstractRestService implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {Object} opt_options - 
        */
        constructor(opt_options?: Object);

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * EnterpriseRoutingService - This class encapsulates Enterprise Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance. H.service.Platform#getEnterpriseRoutingService.
    */
    export class EnterpriseRoutingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.EnterpriseRoutingService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.EnterpriseRoutingService.Options);

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateRouteParams - the service parameters to be sent with the routing request.
        * @param {Function} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} getRouteParams - the service parameters to be sent with the routing request.
        * @param {Function} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        getRoute(getRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} getLinkInfoParams - the service parameters to be sent with the routing request.
        * @param {Function} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        getLinkInfo(getLinkInfoParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateIsolineParams - the service parameters to be sent with the routing request.
        * @param {Function} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        calculateIsoline(calculateIsolineParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * GeocodingService - This class encapsulates the Geocoding REST API in a service stub with calls to its various resources implemented.
    */
    export class GeocodingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.GeocodingService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.GeocodingService.Options);

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} geoodingParams - the service parameters to be sent with the geocoding request.
        * @param {Function} onResult - this function will be called once the Geocoder REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        geocode(geoodingParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} reverseGeocodingParams - the service parameters to be sent with the reverse geocoding request
        * @param {Function} onResult - this function will be called once the Geocoder REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        reverseGeocode(reverseGeocodingParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} searchParams - the service parameters to be sent with the reverse geocoding request
        * @param {Function} onResult - this function will be called once the Geocoder REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        search(searchParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * IConfigurable - An interface represents an object, that can be configured credentials, settings etc. by H.service.Platform
    */
    export interface IConfigurable {

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * JsonpRequestHandle - 
    */
    export interface JsonpRequestHandle {

        /**
        * @var {number} id-the ID associated internally with this request
        */
        id: number;

        /**
        * @var {Function} cancel-this function cancels the request and invokes the errback function
        */
        cancel: Function;

    }


    /**
    * MapTileService - This class encapsulates a map tile end point of the HERE Map Tile API.
    */
    export class MapTileService extends H.util.EventTarget  implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {H.service.MapTileService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.MapTileService.Options);

        /**
        * This method returns the map tile type provided by this service.
        */
        getType(): string;

        /**
        * This method returns the map tile service's newest version hash.
        */
        getVersion(): string;

        /**
        * This method returns the map tile service's meta information. The method will return an object once the map tile service's data has been fetched.
        */
        getInfo(): H.service.MapTileService.Info | any;

        /**
        * This method creates a tile provider which uses the specified map tiles. This provider can be used as a data source for an ImageTileLayer.
        * @param {string} tileType - the tile type
        * @param {string} scheme - the tile scheme
        * @param {number} tileSize - the tile size
        * @param {string} format - the tile image format
        * @param {H.service.ServiceParameters} opt_additionalParameters - a hash of additional parameters to be
        * @param {H.service.TileProviderOptions} opt_options - additional set of options for the provider
        */
        createTileProvider(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_options?: H.service.TileProviderOptions): H.map.provider.ImageTileProvider;

        /**
        * This method creates a tile layer. This layer can be used as a layer on a map's data model.
        * @param {string} tileType - the tile type
        * @param {string} scheme - the tile scheme
        * @param {number} tileSize - the tile size
        * @param {string} format - the tile image format
        * @param {H.service.ServiceParameters} opt_additionalParameters - Additional parameters for the map tile service
        * @param {number} opt_opacity - The opacity of this layer
        * @param {boolean} opt_dark - Indicates whether the content of this layer is mainly dark, default is false See also H.Map.Options#autoColor
        * @param {H.service.TileProviderOptions} opt_options - additional set of options for the provider
        */
        createTileLayer(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_opacity?: number, opt_dark?: boolean, opt_options?: H.service.TileProviderOptions): H.map.layer.TileLayer;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * MapType - A map type is an object holding tile layers corresponding to a map type (e.g. 'normal', 'satellite' or 'terrain'). A map type contains at least a map property which defines the basic map layer for a given map type. In addition it can hold other map layers with the given style, e.g. base, xbase, traffic etc.
    */
    export interface MapType {

        /**
        * @var {H.map.layer.TileLayer} map-the basic map tiles with all features and labels
        */
        map: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} mapnight-the basic map tiles with all features and labels (night mode)
        */
        mapnight: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} xbase-map tiles without features and labels
        */
        xbase?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} xbasenight-map tiles without features and labels (night mode)
        */
        xbasenight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} base-map tiles without labels
        */
        base?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} basenight-map tiles without labels (night mode)
        */
        basenight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} traffic-map tiles with traffic flow highlighting
        */
        traffic?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} trafficnight-map tiles with traffic flow highlighting (night mode)
        */
        trafficnight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} transit-map tiles with public transit lines highlighted
        */
        transit?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} panorama-map tiles highlighting areas with HERE StreetLevel coverage
        */
        panorama?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} panoramanight-map tiles highlighting areas with HERE StreetLevel coverage (night mode)
        */
        panoramanight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} labels-transparent map tiles with labels only
        */
        labels?: H.map.layer.TileLayer;

    }


    /**
    * PlacesService - Places service implements a low level places RestApi access. Please refer to Restful API documentation for providing parameters and handling response objects.
    */
    export class PlacesService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.PlacesService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.PlacesService.Options);

        /**
        * Example
        * @param {string} entryPoint - can be one of available entry points H.service.PlacesService.EntryPoint i.e value of H.service.PlacesService.EntryPoint.SEARCH
        * @param {Object} entryPointParams - parameter map key value pairs will be transformed into the url key=value parametes. For entry point parameters description please refer to places restful api documentation documentation for available parameters for chose entry point
        * @param {Function} onResult - callback which is called when result is returned
        * @param {Function} onError - callback which is called when error occured (i.e request timeout)
        */
        request(entryPoint: string, entryPointParams: Object, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'search' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} searchParams - places api search entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        search(searchParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'suggestions' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} suggestParams - places api suggest entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        suggest(suggestParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'explore' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} exploreParams - places api explore entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        explore(exploreParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'around' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} aroundParams - places api around entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        around(aroundParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'here' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} hereParams - places api here entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        here(hereParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Function triggers places api 'categories' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} categoriesParams - places api here entry point parameters please refer to places api documentation
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        categories(categoriesParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Example
        * @param {string} hyperlink - 
        * @param {Function} onResult - 
        * @param {Function} onError - 
        * @param {Object} opt_additionalParameters - additional parameters to send with request
        */
        follow(hyperlink: string, onResult: Function, onError: Function, opt_additionalParameters?: Object): H.service.JsonpRequestHandle;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Platform - The Platform class represents central class from which all other service stubs are created. It also contains the shared settings to be passed to the individual service stubs, for example the root URL of the platform, application credentials, etc.
    */
    export class Platform {

        /**
        * Constructor
        * @param {H.service.Platform.Options} options - 
        */
        constructor(options: H.service.Platform.Options);

        /**
        * Method attempts to configure object that implements H.service.IConfigurable
        * @param {H.service.IConfigurable} configurable - 
        */
        configure(configurable: H.service.IConfigurable): H.service.IConfigurable;

        /**
        * This method enables or disables HTTPS communication with the platform
        * @param {boolean} useHTTPS - a boolean value indicating whether to communicate with the platform via HTTPS
        */
        setUseHTTPS(useHTTPS: boolean);

        /**
        * This method configures whether to use the "customer integration testing" instance of the platform.
        * @param {boolean} useCIT - a boolean value indicating whether the CIT platform instance is to be used
        */
        setUseCIT(useCIT: boolean);

        /**
        * This method modifies the base URL to be used when creating service stubs.
        * @param {H.service.Url} baseUrl - the new base URL to use
        */
        setBaseUrl(baseUrl: H.service.Url);

        /**
        * This method returns the currently used base URL.
        */
        getBaseUrl(): H.service.Url;

        /**
        * This method returns an instance of H.service.TrafficIncidentsService to query the Traffic API Traffic Incident Data
        */
        getTrafficIncidentsService(): H.service.TrafficIncidentsService;

        /**
        * This method returns an instance of H.service.MapTileService to query the Map Tile API.
        * @param {H.service.MapTileService.Options} opt_options - 
        */
        getMapTileService(opt_options?: H.service.MapTileService.Options): H.service.MapTileService;

        /**
        * This method returns an instance of H.service.venues.Service to query the Venue Maps API
        * @param {H.service.venues.Service.Options} opt_params - additional service parameters
        */
        getVenueService(opt_params?: H.service.venues.Service.Options): H.service.venues.Service;

        /**
        * This method returns an instance of H.service.metaInfo.Service to query the Map Tile API Metainfo Tiles
        * @param {H.service.metaInfo.Service.Options} opt_params - additional service parameters
        */
        getMetaInfoService(opt_params?: H.service.metaInfo.Service.Options): H.service.metaInfo.Service;

        /**
        * Example
        * @param {H.service.Platform.DefaultLayersOptions | number} opt_tileSize - When a number â optional tile size to be queried from the HERE Map Tile API, default is 256. If the parameter is an object, then it represents options and all remaining below parameters should be omitted.
        * @param {number} opt_ppi - optional 'ppi' parameter to use when querying tiles, default is not specified
        * @param {string} opt_lang - optional primary language parameter, default is not specified
        * @param {string} opt_secondaryLang - optional secondary language parameter, default is not specified
        * @param {string} opt_style - optional 'style' parameter to use when querying map tiles, default is not specified
        * @param {string | boolean} opt_pois - indicates if pois are displayed on the map. Pass true to indicate that all pois should be visible. Alternatively you can specify mask for the POI Categories as described at the Map Tile API documentation POI Categories chapter.
        */
        createDefaultLayers(opt_tileSize?: H.service.Platform.DefaultLayersOptions | number, opt_ppi?: number, opt_lang?: string, opt_secondaryLang?: string, opt_style?: string, opt_pois?: string | boolean): {normal: H.service.MapType, satellite: H.service.MapType, terrain: H.service.MapType};

        /**
        * This method returns an instance of H.service.RoutingService to query the Routing API.
        * @param {H.service.RoutingService.Options} opt_options - 
        */
        getRoutingService(opt_options?: H.service.RoutingService.Options): H.service.RoutingService;

        /**
        * This method returns an instance of H.service.GeocodingService to query the Geocoder API
        * @param {H.service.GeocodingService.Options} opt_options - an optional set of options for the new geocoding service to connect to
        */
        getGeocodingService(opt_options?: H.service.GeocodingService.Options): H.service.GeocodingService;

        /**
        * This method returns an instance of H.service.PlacesService to query the Places API.
        */
        getPlacesService(): H.service.PlacesService;

        /**
        * This method returns an instance of H.service.EnterpriseRoutingService to query the Enterprise Routing API.
        * @param {H.service.EnterpriseRoutingService.Options} opt_options - 
        */
        getEnterpriseRoutingService(opt_options?: H.service.EnterpriseRoutingService.Options): H.service.EnterpriseRoutingService;

    }


    /**
    * RoutingService - This class encapsulates the Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance. H.service.Platform#getRoutingService.
    */
    export class RoutingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.RoutingService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.RoutingService.Options);

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateRouteParams - the service parameters to be sent with the routing request.
        * @param {Function} onResult - this function will be called once the Routing REST API provides a response to the request.
        * @param {Function} onError - this function will be called if a communication error occurs during the JSON-P request
        */
        calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * ServiceParameters - This type encapsulates URL parameters to be sent to a HERE platform service.
    */
    export interface ServiceParameters {

    }


    /**
    * ServiceResult - This type encapsulates a response object provider by a HERE platform service.
    */
    export interface ServiceResult {

    }


    /**
    * TileProviderOptions - Options which are used to initialize the tile provider.
    */
    export interface TileProviderOptions {

        /**
        * @var {boolean} crossOrigin-The string to be set for the crossOrigin attribute for loaded images
        */
        crossOrigin?: boolean;

    }


    /**
    * TrafficIncidentsProvider - This class represents traffic incidents provider which requests traffic incidents data from platform traffic incidents service and converts it to map objects.
    */
    export class TrafficIncidentsProvider {

        /**
        * @var {number} min-Minimum zoom level at which provider can serve data, set at construction time
        */
        min: number;

        /**
        * @var {number} max-Maximum zoom level at which provider can server data, set at construction time
        */
        max: number;

        /**
        * @var {string} uid-Provider instance unique identifier, generated at construction time
        */
        uid: string;

        /**
        * @var {number} tileSize-The size of a tile as edge length in pixels. It must be 2^n where n is in range [0 ... 30], default is {@code 256
        */
        tileSize: number;

        /**
        * Constructor
        * @param {H.service.TrafficIncidentsService} service - traffic incidents service that serves incidents data
        * @param {number} opt_refreshTime - argument indicates timeframe when provider tiles should be updated (in ms) defaults to 3 minutes
        * @param {H.service.ServiceParameters} opt_additionalParameters - an additional set of URL parameters
        */
        constructor(service: H.service.TrafficIncidentsService, opt_refreshTime?: number, opt_additionalParameters?: H.service.ServiceParameters);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - 
        * @param {Object} opt_scope - 
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

        /**
        * Note: This function must be overridden by any class inheriting the Provider class. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Request data on a tile basis
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
        * @param {number} x - x tile coordinate (row)
        * @param {number} y - y tile coordinate (column)
        * @param {number} z - tile coordinate (zoom)
        */
        cancelTile(x: number, y: number, z: number);

        /**
        * Cancels tile from being requested using a tile-key
        * @param {string} tileKey - The key of the tile
        */
        cancelTileByKey(tileKey: string);

        /**
        * This method creates a tile key consisting of the provider's uid, and the tile's x, y and z coordinates, seperated by underscores e.g.: "4711_7_42_23"
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The z tile coordinate (zoom level)
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * This method returns cache which should be used to store tiles
        */
        getCache(): H.util.Cache;

        /**
        * This method request tile from remote service
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - function which is called after response arrives
        * @param {Function} onError - function which is called in case of communication error
        */
        requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function): H.util.ICancelable;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean);

        /**
        * To signal to this provider that a map object has been changed. The method marks tile, that contains that objectm as invalid and triggers dispatchUpdate()
        * @param {H.map.AbstractMarker} marker - The map object to be invalidated
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask);

        /**
        * Checks whether this provider is currently providing H.map.DomMarker map objects.
        */
        providesDomMarkers(): boolean;

    }


    /**
    * TrafficIncidentsService - TrafficIncindentsService provides functionality to the low level traffic incidents api Traffic API documentation where it is possible to retrieve traffic incident information on a tile basis
    */
    export class TrafficIncidentsService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.TrafficIncidentsService.Options} opt_options - 
        */
        constructor(opt_options?: H.service.TrafficIncidentsService.Options);

        /**
        * This method requests traffic incidents based on the service parameters provided.
        * @param {H.service.ServiceParameters} serviceParams - 
        * @param {Function} onResponse - 
        * @param {Function} onError - 
        */
        requestIncidents(serviceParams: H.service.ServiceParameters, onResponse: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method requests traffic incident information by tile coordinates
        * @param {number} x - tile column number
        * @param {number} y - tile row number
        * @param {number} z - zoom level
        * @param {Function} onResponse - callback to handle service resposne
        * @param {Function} onError - callback to habdle communication error
        * @param {H.service.ServiceParameters} opt_serviceParams - optional service parameters to be added to the request
        */
        requestIncidentsByTile(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_serviceParams?: H.service.ServiceParameters): H.service.JsonpRequestHandle;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Url - This class represents a URL giving access to the individual parts that make up a URL,such as the scheme, host/domain, path, etc. Use the static parse method to populate a new URL object from a URL string. Be aware that URLs with user and password like "ftp://user:password@foo.bar/" are not supported!
    */
    export class Url {

        /**
        * Constructor
        * @param {string} scheme - the URL scheme (e.g. "http" or "https" or "mailto")
        * @param {string} host - the host (or domain) part of the URL
        * @param {string} opt_path - the path following the host pointing to a resource
        * @param {Object} opt_params - the query string parameters of this URL
        * @param {number} opt_port - The port of the host on which the host listens. If a string is passed it must be convertible to an integer.
        * @param {string} opt_anchor - an optional anchor part of the URL (usually preceded by '#');
        */
        constructor(scheme: string, host: string, opt_path?: string, opt_params?: Object, opt_port?: number, opt_anchor?: string);

        /**
        * This function parses a URL string and returns a H.service.Url object. The URL string must contain at least a scheme and a host.
        * @param {string} url - The URL string to parse.
        * @param {string} opt_baseURL - The base URL to use to resolve relative URLs. If ommited the base URL of the document which loaded the API is taken.
        */
        static  parse(url: string, opt_baseURL?: string): H.service.Url;

        /**
        * Clones this URL object. Optionally, mutations can be passed to this function to modify properties of the cloned object. Note that URL parameters are not replaced but merged with the parameters of this instance.
        */
        clone(): H.service.Url;

        /**
        * This function sets the scheme of this URL object.
        * @param {string} scheme - the new scheme
        */
        setScheme(scheme: string): H.service.Url;

        /**
        * This function returns the scheme of this Url object.
        */
        getScheme(): string;

        /**
        * This function sets the host of this URL object.
        * @param {string} host - the new host
        */
        setHost(host: string): H.service.Url;

        /**
        * This function returns the host name of this Url object.
        */
        getHost(): string;

        /**
        * This function sets the path of this URL object.
        * @param {string | any} path - the new path or a boolean to clear the path
        */
        setPath(path: string | any): H.service.Url;

        /**
        * This function returns the path part of this Url object.
        */
        getPath(): string | any;

        /**
        * This function sets the specified parameters for this URL object. Keys in this object, which are associated with undefined values will be treated as query string parameters with no value.
        * @param {Object} params - a hash of query string parameters specifying the parameters to be set.or a boolean to clear the parameters.
        */
        setQuery(params: Object): H.service.Url;

        /**
        * This function returns a boolean value indicating whether there are any query string parameter associated with this URL.
        */
        hasQuery(): boolean;

        /**
        * This function returns the query object of this Url object.
        */
        getQuery(): Object;

        /**
        * This function sets the anchor of this URL object.
        * @param {string | boolean | any} anchor - the new anchor or undefined to clear the anchor
        */
        setAnchor(anchor: string | boolean | any): H.service.Url;

        /**
        * This function returns the anchor of this Url object.
        */
        getAnchor(): string | any;

        /**
        * Example
        * @param {Object} other - the parmeters to be merged into this URL's query string parameters
        */
        mergeQuery(other: Object): H.service.Url;

        /**
        * This function adds a sub-domain to the host of this URL object.
        * @param {string} subDomain - the sub domain (non-empty string) to be added
        */
        addSubDomain(subDomain: string): H.service.Url;

        /**
        * This function adds a sub-path to this URL's path
        * @param {string} subPath - the path to be added
        */
        addSubPath(subPath: string): H.service.Url;

        /**
        * This function formats this URL object to a full URL string.
        */
        toString(): string;

    }


}


/**
* Namespace: H.service.EnterpriseRoutingService
**/
declare namespace H.service.EnterpriseRoutingService {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the routing service relative to the platform's base URL (default is 'route')
        */
        subDomain?: string;

        /**
        * @var {string} path-The path of the map tile service, default is "routing/7.2"
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-The base URL of the service, defaults to the the platform's base URL if instance was created using H.service.Platform#getEnterpriseRoutingService method.
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.GeocodingService
**/
declare namespace H.service.GeocodingService {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-the sub-domain of the geo-coding service relative to the platform's base URL, default is 'geocoder'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path of the Geocoding service, default is '6.2'
        */
        path?: string;

    }


}


/**
* Namespace: H.service.MapTileService
**/
declare namespace H.service.MapTileService {
    /**
    * Info - 
    */
    export interface Info {

        /**
        * @var {Object} maps-
        */
        maps: Object;

        /**
        * @var {Object} schemes-
        */
        schemes: Object;

        /**
        * @var {Object} tiletypes-
        */
        tiletypes: Object;

        /**
        * @var {Object} formats-
        */
        formats: Object;

        /**
        * @var {Object} resolutions-
        */
        resolutions: Object;

        /**
        * @var {Object} languages-
        */
        languages: Object;

    }


    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} type-the type of the map tile service to communicate with, e.g. 'base' (default), 'aerial', etc. (refer to the Map Tile REST API documentation for available types)
        */
        type?: string;

        /**
        * @var {string} version-the map version hash to use for retrieving tiles, default is newest and will be automatically updated
        */
        version?: string;

        /**
        * @var {string} subDomain-the sub-domain of the map tile service relative to the platform's base URL, default is 'maps'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path of the map tile service, default is 'maptile/2.1'
        */
        path?: string;

    }


}


/**
* Namespace: H.service.PlacesService
**/
declare namespace H.service.PlacesService {
    /**
    * EntryPoint - List of available entry points
    */
    export enum EntryPoint {

        /**
        * SEARCH - 
        */
        SEARCH,

        /**
        * SUGGEST - 
        */
        SUGGEST,

        /**
        * EXPLORE - 
        */
        EXPLORE,

        /**
        * AROUND - 
        */
        AROUND,

        /**
        * HERE - 
        */
        HERE,

        /**
        * CATEGORIES - 
        */
        CATEGORIES,

    }


    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-the sub-domain of the places service relative to the platform's base URL, default is 'places'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path of the places service, default is 'places/v1'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-an optional base URL if it differs from the platform's default base URL
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.Platform
**/
declare namespace H.service.Platform {
    /**
    * DefaultLayersOptions - Options used to create default layers
    */
    export interface DefaultLayersOptions {

        /**
        * @var {number} tileSize-tile size to be queried from the HERE Map Tile API, default is 256
        */
        tileSize?: number;

        /**
        * @var {number} ppi-'ppi' parameter to use when querying tiles, default is not specified
        */
        ppi?: number;

        /**
        * @var {string} lg-optional primary language parameter, default is not specified
        */
        lg?: string;

        /**
        * @var {string} lg2-optional secondary language parameter, default is not specified
        */
        lg2?: string;

        /**
        * @var {string} style-optional 'style' parameter to use when querying map tiles, default is not specified
        */
        style?: string;

        /**
        * @var {boolean} pois-indicates if pois are displayed on the map
        */
        pois?: boolean;

        /**
        * @var {string | boolean} crossOrigin-indicates if CORS headers should be used for default layers, if false is specified, CORS headers are not set, defaults to 'anonymous'. Be aware that storing of content is not possible if crossOrigin is not set to true (see H.Map#storeContent).
        */
        crossOrigin: string | boolean;

    }


    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} app_id-The application ID to identify the client against the platform (mandatory to provide)
        */
        app_id: string;

        /**
        * @var {string} app_code-The application code to identify the client against the platform (mandatory to provide)
        */
        app_code: string;

        /**
        * @var {H.service.Url} baseUrl-The base URL of the platform, default is http://api.here.com
        */
        baseUrl?: H.service.Url;

        /**
        * @var {boolean} useCIT-Indicates whether the Customer Integration Testing should be used, default is false
        */
        useCIT?: boolean;

        /**
        * @var {boolean} useHTTPS-Indicates whether secure communication should be used, default is false
        */
        useHTTPS?: boolean;

    }


}


/**
* Namespace: H.service.RoutingService
**/
declare namespace H.service.RoutingService {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-the sub-domain of the routing service relative to the platform's base URL, default is 'route'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path of the map tile service, default is 'routing/7.2'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-an optional base URL if it differs from the platform's default base URL
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.TrafficIncidentsService
**/
declare namespace H.service.TrafficIncidentsService {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-the sub-domain of the traffic incidents service relative to the platform's base URL, default is 'traffic'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path of the traffic incidents service, default is 'traffic/6.1'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-an optional base URL if it differs from the platform's default base URL
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.metaInfo
**/
declare namespace H.service.metaInfo {
    /**
    * Service - This class encapsulates a Metainfo Tile end point of the HERE Map Tile API.
    */
    export class Service extends H.util.EventTarget  implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {H.service.metaInfo.Service.Options} opt_options - additional service parameters
        */
        constructor(opt_options?: H.service.metaInfo.Service.Options);

        /**
        * This method returns the meta info tile service's newest version hash.
        */
        getVersion(): string;

        /**
        * This method returns the meta info tile service's meta information. The method will return an object once the map tile service's data has been fetched.
        */
        getInfo(): H.service.metaInfo.Service.Info | any;

        /**
        * This method creates a tile provider which uses the meta info tile backend. This provider can be used as a data source for an TileLayer.
        * @param {number} tileSize - The tile size
        * @param {number} pixelRatio - The tile's pixel ratio, should be aligned with base map tile
        * @param {Array<string>} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
        * @param {H.service.ServiceParameters} opt_additionalParameters - Additional parameters for the meta info service
        * @param {string} opt_tileType - the tile type (default is 'maptile')
        * @param {string} opt_scheme - the scheme for which the meta info tiles a requested (default is 'normal.day')
        */
        createTileProvider(tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string): H.map.provider.TileProvider;

        /**
        * This method creates a tile layer. This layer can be used as a layer on a map's data model.
        * @param {number} tileSize - The tile size
        * @param {number} pixelRatio - The tile's pixel ratio, should be aligned with base map tile
        * @param {Array<string>} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
        * @param {H.service.ServiceParameters} opt_additionalParameters - Additional parameters for the meta info service
        * @param {string} opt_tileType - the tile type (default is 'maptile')
        * @param {string} opt_scheme - the scheme for which the meta info tiles a requested (default is 'normal.day')
        */
        createTileLayer(tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string): H.map.layer.TileLayer;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * TileProvider - This class utilizes Metainfo Tiles functionality provided by the Map Tile API to load meta information about map objects (buildings, labels, public transport etc.).
    */
    export class TileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * Constructor
        * @param {H.service.metaInfo.Service | H.service.MapTileService} service - the tile service which holds information from about the source of the tiles
        * @param {H.service.ServiceParameters} opt_params - an additional set of URL parameters
        * @param {H.service.metaInfo.TileProvider.Options} opt_options - additional parameters
        */
        constructor(service: H.service.metaInfo.Service | H.service.MapTileService, opt_params?: H.service.ServiceParameters, opt_options?: H.service.metaInfo.TileProvider.Options);

    }


}


/**
* Namespace: H.service.metaInfo.Service
**/
declare namespace H.service.metaInfo.Service {
    /**
    * Info - 
    */
    export interface Info {

        /**
        * @var {Object} maps-
        */
        maps: Object;

        /**
        * @var {Object} schemes-
        */
        schemes: Object;

        /**
        * @var {Object} tiletypes-
        */
        tiletypes: Object;

        /**
        * @var {Object} formats-
        */
        formats: Object;

        /**
        * @var {Object} resolutions-
        */
        resolutions: Object;

        /**
        * @var {Object} languages-
        */
        languages: Object;

    }


    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} type-the type of the map tile service to communicate with, e.g. 'base' (default), 'aerial', etc. (refer to the Map Tile REST API documentation for available types)
        */
        type?: string;

        /**
        * @var {string} version-the map version hash to use for retrieving tiles, default is newest and will be automatically updated
        */
        version?: string;

        /**
        * @var {string} subDomain-the sub-domain of the map tile service relative to the platform's base URL, default is 'maps'
        */
        subDomain?: string;

    }


}


/**
* Namespace: H.service.metaInfo.TileProvider
**/
declare namespace H.service.metaInfo.TileProvider {
    /**
    * Options - Configuration object which can be used to initialize the TileProvider.
    */
    export interface Options {

        /**
        * @var {string} tileType-The tile type for which to request meta info
        */
        tileType?: string;

        /**
        * @var {string} scheme-The map scheme for which to request meta info
        */
        scheme?: string;

        /**
        * @var {number} tileCacheSize-The number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
        */
        tileCacheSize?: number;

        /**
        * @var {number} tileSize-The size of the tiles rendered by this provider (must be power of 2, default is 256)
        */
        tileSize?: number;

        /**
        * @var {number} pixelRatio-The pixel ratio to use for over-sampling in cases of high-resolution displays
        */
        pixelRatio?: number;

        /**
        * @var {Array<string>} categoryFilter-A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
        */
        categoryFilter?: Array<string>;

    }


}


/**
* Namespace: H.service.venues
**/
declare namespace H.service.venues {
    /**
    * Building - The class represents the building in the venue hiearachy (see H.service.venues.Venue) and holds floors that belong to the building.
    */
    export class Building extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of this venue building
        * @param {string} uid - The unique identifier of this building
        * @param {number} minLevel - The minimum floor level of this building
        * @param {number} maxLevel - The maximum floor level of this building
        */
        constructor(provider: Object, uid: string, minLevel: number, maxLevel: number);

        /**
        * Method returns the parent object - venue (see H.service.venues.Venue) to which the building belongs to.
        */
        getVenue(): H.service.venues.Venue;

        /**
        * Method returns the minimum floor level of this building.
        */
        getMinLevel(): number;

        /**
        * Method returns the maximum floor level of this building
        */
        getMaxLevel(): number;

        /**
        * Method returns the floor (see H.service.venues.Floor) if one was already loaded. This method doesn't make attempt to fetch the floor data.
        * @param {number} level - floor level within minimum and maximum level boundaries for the building
        */
        getFloor(level: number): H.service.venues.Floor | any;

    }


    /**
    * Floor - The class represents the floor object in the venue hierarchy (see H.service.venues.Venue). The class holds information about floor geometry and spaces (see H.service.venues.Space) that belong to this floor.
    */
    export class Floor extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of this venue floor
        * @param {any} data - The meta data of this floor
        * @param {number} level - The level of this floor
        */
        constructor(provider: Object, data: any, level: number);

        /**
        * Method returns the level of the floor in the building.
        */
        getLevel(): number;

        /**
        * Method returns map geometry that represents floor boundaries.
        */
        getFloorSpace(): H.service.venues.Space | any;

        /**
        * Method returns the H.map.Group of all spaces that belong to the floor.
        */
        getSpaces(): H.map.Group;

        /**
        * Method returns parent object - building (see H.service.venues.Building) of the floor.
        */
        getBuilding(): H.service.venues.Building;

        /**
        * Method returns raw data associated with the floor. For more details on data format see http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-floor.html
        */
        getData(): any;

        /**
        * Method returns the space object with the given ID, that belongs to the floor.
        * @param {string} id - The ID of the space.
        */
        getSpace(id: string): H.service.venues.Space | any;

    }


    /**
    * Service - This class encapsulates methods to call Venue Maps API endpoints.
    */
    export class Service extends H.util.EventTarget  implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {H.service.venues.Service.Options} opt_options - additional service parameters
        */
        constructor(opt_options?: H.service.venues.Service.Options);

        /**
        * Example
        * @param {H.service.ServiceParameters} serviceParams - the service parameters to be sent with the discovery request
        * @param {Function} onResult - this function will be called once the Venue Maps API provides a response to the request
        * @param {Function} onError - this function will be called if a communication error occurs during request and error type is passed as an argument
        */
        discover(serviceParams: H.service.ServiceParameters, onResult: Function, onError: Function);

        /**
        * Example
        * @param {H.service.venues.TileProvider.Options} opt_options - Tile provider options
        */
        createTileLayer(opt_options?: H.service.venues.TileProvider.Options): H.map.layer.TileLayer;

        /**
        * Method returns current state of the service.
        */
        getState(): H.service.venues.Service.State;

        /**
        * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
        * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
        * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
        * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in the opt_baseUrl to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Space - Represents a spatial object for this space. Each space object contains data associated with that space and can be retrieved by using H.service.venues.Space#getData method.
    */
    export class Space {

        /**
        * Constructor
        * @param {Object} provider - The provider of this object.
        * @param {string} uid - The unique identifier of this space
        * @param {any} data - The meta data of this space
        * @param {boolean} opt_isFloorSpace - Indicates whether this space represents a floor itself, defaults to false
        */
        constructor(provider: Object, uid: string, data: any, opt_isFloorSpace?: boolean);

        /**
        * The method indicates whether the spatial object represents the whole floor space or a space within a floor boundaries, that belongs to the floor.
        */
        isFloorSpace(): boolean;

        /**
        * Example
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} labelStyle - Custom label style
        */
        initLabelStyle(labelStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options);

        /**
        * Method returns parent object - floor (see H.service.venues.Floor) of the space.
        */
        getFloor(): H.service.venues.Floor;

        /**
        * Method returns raw data associated with the space. For more details on data format see http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-space.html
        */
        getData(): Object;

    }


    /**
    * TileProvider - This class represents a Venue Maps tile provider which requests venues tiles from a platform venue tile service.
    */
    export class TileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * Constructor
        * @param {H.service.venues.Service} service - 
        * @param {H.service.venues.TileProvider.Options} opt_options - 
        */
        constructor(service: H.service.venues.Service, opt_options?: H.service.venues.TileProvider.Options);

        /**
        * Method specifies which floor level of the venues must be fetched by provider. Floor level is global to all venues and defaults to 0.
        * @param {number} level - 
        */
        setCurrentLevel(level: number);

        /**
        * Method returns the floor level that provider uses for tile fetching.
        */
        getCurrentLevel(): number;

    }


    /**
    * Venue - The class represents the venue, it is a root for the venue object heirarchy. The venue inherits from H.map.Group and holds building objects (see H.service.venues.Building). Building objects hold floor objects (see H.service.venues.Floor) and inherit from H.map.Group as well. Leaf objects are spaces (see H.service.venues.Space) that are spatial map objects and reside inside floor containers.
    */
    export class Venue extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of this venue
        * @param {string} uid - The unique identifier of this venue
        */
        constructor(provider: Object, uid: string);

        /**
        * Method returns the building object, that belongs to the venue, with the given ID . The method doesn't attempt to fetch building data.
        * @param {string} id - the ID of the building
        */
        getBuilding(id: string): H.service.venues.Building | any;

        /**
        * Method returns map of all loaded buildings associated with the venue.
        */
        getBuildings(): Object;

    }


}


/**
* Namespace: H.service.venues.Service
**/
declare namespace H.service.venues.Service {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} subDomain-the sub-domain of the Venue Maps service relative to the platform's base URL, default is 'venue.maps'
        */
        subDomain?: string;

        /**
        * @var {string} path-the path to append after host name when making requests to the Venue Maps API, default is empty
        */
        path?: string;

    }


    /**
    * State - The state types of the H.service.venues.Service. Possible states are:
    */
    export enum State {

        /**
        * ERROR - 
        */
        ERROR,

        /**
        * INIT - 
        */
        INIT,

        /**
        * READY - 
        */
        READY,

    }


}


/**
* Namespace: H.service.venues.TileProvider
**/
declare namespace H.service.venues.TileProvider {
    /**
    * Options - Configuration object which can be used to initialize the TileProvider.
    */
    export interface Options {

        /**
        * @var {number} tileCacheSize-The number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
        */
        tileCacheSize?: number;

        /**
        * @var {number} pixelRatio-The pixel ratio to use for over-sampling in cases of high-resolution displays
        */
        pixelRatio?: number;

        /**
        * @var {Function} onSpaceCreated-A callback function that is called on every created space (see H.service.venues.Space) object. The function can be used for space object styling.
        */
        onSpaceCreated?: Function;

    }


}


/**
* Namespace: H.ui
**/
declare namespace H.ui {
    /**
    * Control - This class represents the base class for UI controls on the map.
    */
    export class Control extends H.ui.base.Container  {

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {any} child - the child element to be added
        */
        addChild(child: any): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * DistanceMeasurement - This class represents a distance measurement control which helps calculating distances between geographical locations indicated by the user clicks.
    */
    export class DistanceMeasurement extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.DistanceMeasurement.Options} opt_options - optional parameters to be passed to this control
        */
        constructor(opt_options?: H.ui.DistanceMeasurement.Options);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * InfoBubble - This class represents an information bubble bound to a geo-position on the map.
    */
    export class InfoBubble extends H.ui.base.Element  {

        /**
        * Constructor
        * @param {H.geo.IPoint} position - the geo-position to which this info bubble corresponds
        * @param {H.ui.InfoBubble.Options} opt_options - optional parameters to be passed to the info bubble
        */
        constructor(position: H.geo.IPoint, opt_options?: H.ui.InfoBubble.Options);

        /**
        * Note: Disposing of an info bubble does not automatically remove it from the UI's info bubble collection. Please call H.ui.UI#removeBubble before disposing of an info bubble instance.
        */
        dispose();

        /**
        * This method sets the geo-position of this info bubble.
        * @param {H.geo.IPoint | H.geo.Point} position - the new geo-position of this bubble
        */
        setPosition(position: H.geo.IPoint | H.geo.Point);

        /**
        * This method returns this info bubbles current state.
        */
        getState(): H.ui.InfoBubble.State;

        /**
        * This method sets the info bubble's state.
        * @param {H.ui.InfoBubble.State} state - the new state
        */
        setState(state: H.ui.InfoBubble.State);

        /**
        * This method closes the info bubble (setting its state to CLOSED)
        */
        close();

        /**
        * This method opens the info bubble (setting its state to OPEN)
        */
        open();

        /**
        * Note: Before adding an info bubble to a UI object the content element is null.
        */
        getContentElement(): HTMLElement;

        /**
        * This methods sets the content of the info bubble. This can either be a string (applied as innerHTML) to the content element of this info bubble or a HTML node which is appended to the content element.
        * @param {string | Node} content - the content for this bubble
        */
        setContent(content: string | Node);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * LayoutAlignment - This enumeration holds the possible layout alignments for the UI elements.
    */
    export enum LayoutAlignment {

        /**
        * TOP_LEFT - 
        */
        TOP_LEFT,

        /**
        * TOP_CENTER - 
        */
        TOP_CENTER,

        /**
        * TOP_RIGHT - 
        */
        TOP_RIGHT,

        /**
        * LEFT_TOP - 
        */
        LEFT_TOP,

        /**
        * LEFT_MIDDLE - 
        */
        LEFT_MIDDLE,

        /**
        * LEFT_BOTTOM - 
        */
        LEFT_BOTTOM,

        /**
        * RIGHT_TOP - 
        */
        RIGHT_TOP,

        /**
        * RIGHT_MIDDLE - 
        */
        RIGHT_MIDDLE,

        /**
        * RIGHT_BOTTOM - 
        */
        RIGHT_BOTTOM,

        /**
        * BOTTOM_LEFT - 
        */
        BOTTOM_LEFT,

        /**
        * BOTTOM_CENTER - 
        */
        BOTTOM_CENTER,

        /**
        * BOTTOM_RIGHT - 
        */
        BOTTOM_RIGHT,

    }


    /**
    * MapSettingsControl - This class represents a menu control allowing to control which map type the map shows, etc.
    */
    export class MapSettingsControl extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.MapSettingsControl.Options} opt_options - optional parameters to be passed to this control
        */
        constructor(opt_options?: H.ui.MapSettingsControl.Options);

        /**
        * Setting this layer to a falsy value will hide the button.
        * @param {H.map.layer.Layer} incidentsLayer - the incidents layer
        */
        setIncidentsLayer(incidentsLayer: H.map.layer.Layer);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Overview - This class represents a small overview of the main map.
    */
    export class Overview extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.map.layer.Layer} baseLayer - the layer to be for display of overview map
        * @param {H.ui.Overview.Options} opt_options - optional parameters to be passed to this control
        */
        constructor(baseLayer: H.map.layer.Layer, opt_options?: H.ui.Overview.Options);

        /**
        * Method sets the base layer of the overview map.
        * @param {H.map.layer.TileLayer} baseLayer - 
        */
        setBaseLayer(baseLayer: H.map.layer.TileLayer): H.ui.Overview;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Pano - This class represents the UI controls for panorama
    */
    export class Pano extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.Pano.Options} opt_options - optional parameters to be passed to the map.
        */
        constructor(opt_options?: H.ui.Pano.Options);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {H.ui.base.Element} child - the child element to be added
        */
        addChild(child: H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * ScaleBar - This class represents a UI element showing the current zoom scale.
    */
    export class ScaleBar extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.ScaleBar.Options} opt_options - optional parameters to be passed to this scale bar.
        */
        constructor(opt_options?: H.ui.ScaleBar.Options);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * UI - This class encapsulates map UI functionality.
    */
    export class UI {

        /**
        * Constructor
        * @param {H.Map} map - 
        * @param {H.ui.UI.Options} opt_options - 
        */
        constructor(map: H.Map, opt_options?: H.ui.UI.Options);

        /**
        * This method returns this ui's root element.
        */
        getElement(): Element;

        /**
        * Returns the map instance to which this UI was added.
        */
        getMap(): H.Map;

        /**
        * This method returns this UI object's current unit system.
        */
        getUnitSystem(): H.ui.UnitSystem;

        /**
        * This method sets this UI object's unit system for displaying distances.
        * @param {H.ui.UnitSystem} unitSystem - the unit system to use
        */
        setUnitSystem(unitSystem: H.ui.UnitSystem);

        /**
        * Toggles this UI's unit system between H.ui.UnitSystem.METRIC and H.ui.UnitSystem.IMPERIAL.
        */
        toggleUnitSystem();

        /**
        * This method adds an info bubble to the UI.
        * @param {H.ui.InfoBubble} bubble - the info bubble to be added
        */
        addBubble(bubble: H.ui.InfoBubble);

        /**
        * This method removes a previously added info bubble from the UI.
        * @param {H.ui.InfoBubble} bubble - the info bubble to be removed
        */
        removeBubble(bubble: H.ui.InfoBubble);

        /**
        * This method returns a list of info bubble objects which are currently attached to this UI.
        */
        getBubbles(): Array<H.ui.InfoBubble>;

        /**
        * This method appends a control to the UI.
        * @param {string} name - the name under which to register this control
        * @param {H.ui.Control} control - the control to add to this UI
        */
        addControl(name: string, control: H.ui.Control);

        /**
        * Removes a previously registered control from the UI object.
        * @param {string} name - the name under which this control was previously registered
        */
        removeControl(name: string): H.ui.Control;

        /**
        * This method returns a UI control which was previously registered with the provided name.
        * @param {string} name - the name under which the control was registered.
        */
        getControl(name: string): H.ui.Control;

        /**
        * This function creates the default UI including the zoom control, map settings control and scalebar and panorama discovery control. The default controls will be assigned the following values:
        * @param {H.Map} map - The map instance to which to append the UI
        * @param {Object} mapTypes - The map types to use
        * @param {H.ui.i18n.Localization | string} opt_locale - the language to use (or a full localization object).
        */
        static  createDefault(map: H.Map, mapTypes: Object, opt_locale: H.ui.i18n.Localization | string): H.ui.UI;

    }


    /**
    * UnitSystem - This enumeration holds the possible unit systems for the UI to display distances.
    */
    export enum UnitSystem {

        /**
        * IMPERIAL - This value represents the imperial unit system using miles and feet (value: 'imperial').
        */
        IMPERIAL,

        /**
        * METRIC - This value represents the metric unit system using meters and kilometers, etc (value: 'metric').
        */
        METRIC,

    }


    /**
    * ZoomControl - This class represents the UI controls for zooming in an out of the map.
    */
    export class ZoomControl extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.ZoomControl.Options} opt_options - optional parameters to be passed to the map.
        */
        constructor(opt_options?: H.ui.ZoomControl.Options);

        /**
        * This method returns the zoom speed (in levels per millisecond) which is applied when the button is pressed constantly.
        */
        getZoomSpeed(): number;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * ZoomRectangle - This class represents a zoom rectangle control element that allows zooming to the selected area on the screen.
    */
    export class ZoomRectangle extends H.ui.Control  {

        /**
        * Constructor
        * @param {H.ui.ZoomRectangle.Options} opt_options - optional parameters to be passed to this control
        */
        constructor(opt_options?: H.ui.ZoomRectangle.Options);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object's unit system changes.
        * @param {H.ui.UnitSystem} unitSystem - the unit system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem);

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType);

        /**
        * Note: Before adding a control to a UI object this method returns null.
        */
        getMap(): H.Map;

        /**
        * This method returns the localization object which corresponds to the UI's current locale.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method returns this control's layout alignment.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows (see the illustration above).
        * @param {H.ui.LayoutAlignment} alignment - The new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


}


/**
* Namespace: H.ui.DistanceMeasurement
**/
declare namespace H.ui.DistanceMeasurement {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {H.map.Icon} startIcon-the icon to use for the first measurement point
        */
        startIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} stopoverIcon-the icon to use for the intermediate measurement points
        */
        stopoverIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} endIcon-the icon to use for the last measurement point
        */
        endIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} splitIcon-the icon to use for indicating position under pointer over the line where new point will be created once user clicks
        */
        splitIcon?: H.map.Icon;

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} lineStyle-the style to use for connecting lines of the measurement points
        */
        lineStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {Function} distanceFormatter-Optional function used for formatting a distance. By default distance measurement tool will do the formatting according to the specified measurement unit (see H.ui.UI.Options#unitSystem)
        */
        distanceFormatter?: Function;

    }


}


/**
* Namespace: H.ui.InfoBubble
**/
declare namespace H.ui.InfoBubble {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {Function} onStateChange-a callback to be invoked when the info bubble's state changes
        */
        onStateChange?: Function;

        /**
        * @var {string | Node} content-content to be added to the info bubble
        */
        content: string | Node;

    }


    /**
    * State - This enumeration holds the state an info bubble can have.
    */
    export enum State {

        /**
        * OPEN - This value represents the state where an info bubble is open and visible (value: 'open').
        */
        OPEN,

        /**
        * CLOSED - This value represents the state where an info bubble is closed and invisible (value: 'closed')
        */
        CLOSED,

    }


}


/**
* Namespace: H.ui.MapSettingsControl
**/
declare namespace H.ui.MapSettingsControl {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {Array<H.ui.MapSettingsControl.MapTypeEntry>} entries-the map type entries to be shown in this map settings control
        */
        entries?: Array<H.ui.MapSettingsControl.MapTypeEntry>;

        /**
        * @var {H.map.layer.Layer} incidents-the traffic incidents layer to be activated by the map settings control
        */
        incidents: H.map.layer.Layer;

    }


    /**
    * MapTypeEntry - The map type entry is an object containing a display name and a map type object to which it refers.
    */
    export interface MapTypeEntry {

        /**
        * @var {string} name-label which describes the map type
        */
        name: string;

        /**
        * @var {H.service.MapType} mapType-reference to map type
        */
        mapType: H.service.MapType;

    }


}


/**
* Namespace: H.ui.Overview
**/
declare namespace H.ui.Overview {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {number} zoomDelta-option defines delta between main map's zoom level and overview map's zoom level (defaults to 3)
        */
        zoomDelta?: number;

        /**
        * @var {number} scaleX-option defines the ratio between main map's view port width and overview map's width (defaults to 5 meaning overview map's width is five times smaller)
        */
        scaleX?: number;

        /**
        * @var {number} scaleY-option defines the ratio between main map's view port height and overview map's height (defaults to 5 meaning overview map's height is five times smaller)
        */
        scaleY?: number;

    }


}


/**
* Namespace: H.ui.Pano
**/
declare namespace H.ui.Pano {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {Object} mapTypes-The map types to use
        */
        mapTypes: Object;

    }


}


/**
* Namespace: H.ui.ScaleBar
**/
declare namespace H.ui.ScaleBar {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
        */
        alignment?: H.ui.LayoutAlignment;

    }


}


/**
* Namespace: H.ui.UI
**/
declare namespace H.ui.UI {
    /**
    * Options - Optional parameters to be passed to the UI constructor.
    */
    export interface Options {

        /**
        * @var {H.ui.UnitSystem} unitSystem-An optional unit system to be used by the UI, default is H.ui.UnitSystem.METRIC
        */
        unitSystem?: H.ui.UnitSystem;

        /**
        * @var {H.ui.ZoomControl.Options | boolean} zoom-
        */
        zoom?: H.ui.ZoomControl.Options | boolean;

        /**
        * @var {H.ui.ZoomRectangle.Options | boolean} zoomrectangle-
        */
        zoomrectangle?: H.ui.ZoomRectangle.Options | boolean;

        /**
        * @var {H.ui.MapSettingsControl.Options | boolean} mapsettings-
        */
        mapsettings?: H.ui.MapSettingsControl.Options | boolean;

        /**
        * @var {H.ui.ScaleBar.Options | boolean} scalebar-
        */
        scalebar?: H.ui.ScaleBar.Options | boolean;

        /**
        * @var {H.ui.Pano.Options | boolean} panorama-
        */
        panorama?: H.ui.Pano.Options | boolean;

        /**
        * @var {H.ui.DistanceMeasurement.Options | boolean} distancemeasurement-
        */
        distancemeasurement?: H.ui.DistanceMeasurement.Options | boolean;

        /**
        * @var {H.ui.i18n.Localization | string} locale-defines language in which UI can be rendered. It can be predefined H.ui.i18n.Localization object with custom translation map, or a string one of following 'en-US', 'de-DE', 'es-ES', 'fi-FI', 'fr-FR', 'it-IT', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'tr-TR', 'zh-CN'. If not defined ui will use 'en-US' by default
        */
        locale?: H.ui.i18n.Localization | string;

    }


}


/**
* Namespace: H.ui.ZoomControl
**/
declare namespace H.ui.ZoomControl {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {number} zoomSpeed-the speed if zooming in and out in levels per millisecond, defaults to 0.05
        */
        zoomSpeed?: number;

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, defaults to H.ui.LayoutAlignment.RIGHT_MIDDLE
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {boolean} slider-flag whether to show the slider (true) or not, defaults to false
        */
        slider?: boolean;

        /**
        * @var {boolean} sliderSnaps-flag whether slider should snap to the integer values or not, defaults to false. This option has effect only if slider is enabled.
        */
        sliderSnaps?: boolean;

    }


}


/**
* Namespace: H.ui.ZoomRectangle
**/
declare namespace H.ui.ZoomRectangle {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {Function} adjustZoom-optional function that defines how zoom level should be changed, by default zoom level is picked to fit the bounding rectangle into the view port.
        */
        adjustZoom: Function;

    }


}


/**
* Namespace: H.ui.base
**/
declare namespace H.ui.base {
    /**
    * Button - This class represents a button.
    */
    export class Button extends H.ui.base.Element  {

        /**
        * Constructor
        * @param {H.ui.base.Button.Options} opt_options - optional parameters to be passed to the button instance
        */
        constructor(opt_options?: H.ui.base.Button.Options);

        /**
        * This method returns the current state of the button.
        */
        getState(): H.ui.base.Button.State;

        /**
        * This method sets the state of this button.
        * @param {H.ui.base.Button.State} state - the state to which this button is to be set
        * @param {boolean} opt_suppressEvent - an optional flag indicating that the onStateChange callback is not to be invoked
        */
        setState(state: H.ui.base.Button.State, opt_suppressEvent?: boolean): H.ui.base.Button;

        /**
        * This method returns the label string of this button.
        */
        getLabel(): string;

        /**
        * This method sets the label string of this button.
        * @param {string} label - the label to set on this button
        * @param {boolean} opt_force - a boolean flag indicating that the new label should be set and propagated even if it has the same value as the current one.
        */
        setLabel(label: string, opt_force?: boolean): H.ui.base.Button;

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Container - This class represents an abstract base class for container UI elements such as Lists and Panels.
    */
    export class Container extends H.ui.base.Element  {

        /**
        * Constructor
        * @param {string} opt_elementType - the type of HTML element this UI element renders as, default is 'div'
        * @param {string} opt_className - an optional class name to be used on this element
        * @param {Array<H.ui.base.Element>} opt_children - optional child elements to be added to this container
        */
        constructor(opt_elementType?: string, opt_className?: string, opt_children?: Array<H.ui.base.Element>);

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Element - This class represents the base class of UI elements such as Buttons, ListEntries, etc.
    */
    export class Element extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string} opt_elementType - the type of HTML element this UI element renders as, default is 'div'
        * @param {string} opt_className - an optional class name to be used on this element
        */
        constructor(opt_elementType?: string, opt_className?: string);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * OverlayPanel - This class represents a panel that points to a control.
    */
    export class OverlayPanel extends H.ui.base.Container  {

        /**
        * This method sets the state of this panel.
        * @param {H.ui.base.OverlayPanel.State} state - the state of this panel
        * @param {boolean} opt_force - a boolean value indicating that the value should be propagated even if it is the same as the current value
        */
        setState(state: H.ui.base.OverlayPanel.State, opt_force?: boolean): H.ui.base.OverlayPanel;

        /**
        * This method returns the current state of the panel.
        */
        getState(): H.ui.base.OverlayPanel.State;

        /**
        * This method adjusts the alignment of the overlay panel to point to the provided control.
        * @param {H.ui.Control} control - the control to which to point
        */
        pointToControl(control: H.ui.Control);

        /**
        * Adds a child element to be rendered within the container element.
        * @param {H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * PushButton - This class represents a button, which will keep its state when pressed. Pressing once will change this button's state to down. Pressing it again will change the button's state to up.
    */
    export class PushButton extends H.ui.base.Button  {

        /**
        * Constructor
        * @param {H.ui.base.Button.Options} opt_options - optional parameters to be passed to this button instance.
        */
        constructor(opt_options?: H.ui.base.Button.Options);

        /**
        * This method toggles this button's state between the two possible button states (see H.ui.base.Button.State).
        */
        toggleState(): H.ui.base.PushButton;

        /**
        * This method returns the current state of the button.
        */
        getState(): H.ui.base.Button.State;

        /**
        * This method sets the state of this button.
        * @param {H.ui.base.Button.State} state - the state to which this button is to be set
        * @param {boolean} opt_suppressEvent - an optional flag indicating that the onStateChange callback is not to be invoked
        */
        setState(state: H.ui.base.Button.State, opt_suppressEvent?: boolean): H.ui.base.Button;

        /**
        * This method returns the label string of this button.
        */
        getLabel(): string;

        /**
        * This method sets the label string of this button.
        * @param {string} label - the label to set on this button
        * @param {boolean} opt_force - a boolean flag indicating that the new label should be set and propagated even if it has the same value as the current one.
        */
        setLabel(label: string, opt_force?: boolean): H.ui.base.Button;

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * RadioGroup - This class represents a group of push buttons of which only one can be active at a time.
    */
    export class RadioGroup extends H.ui.base.Container  {

        /**
        * Constructor
        * @param {H.ui.base.RadioGroup.Options} opt_options - optional parameters to be passed to the group
        */
        constructor(opt_options?: H.ui.base.RadioGroup.Options);

        /**
        * This method set the title of this group.
        * @param {string} title - the new title of this group
        * @param {boolean} opt_force - an optional flag indicating that the new value is to be updated and propagated even if it has the same value as the current title
        */
        setTitle(title: string, opt_force?: boolean): H.ui.base.RadioGroup;

        /**
        * This method returns the current title string of this group.
        */
        getTitle(): string;

        /**
        * This method adds an button element to this group.
        * @param {H.ui.base.PushButton} button - the button to add
        */
        addButton(button: H.ui.base.PushButton): H.ui.base.RadioGroup;

        /**
        * This method removes an button element from this group.
        * @param {H.ui.base.PushButton} button - the button to remove
        */
        removeButton(button: H.ui.base.PushButton): H.ui.base.RadioGroup;

        /**
        * This method returns the buttons currently registered with this group.
        */
        getButtons(): Array<H.ui.base.PushButton>;

        /**
        * This method sets the active button of this radio group.
        * @param {H.ui.base.PushButton} button - the button to be made the active one
        * @param {boolean} opt_suppressEvent - an optional boolean flag indicating that no statechange event is to be fired
        */
        setActiveButton(button: H.ui.base.PushButton, opt_suppressEvent?: boolean);

        /**
        * Adds a child element to be rendered within the container element.
        * @param {typeof H.ui.base.Element} child - the child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * Returns the child collection of this container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * Removes a child element from this container's child collection.
        * @param {H.ui.base.Element} child - the child element to be removed
        */
        removeChild(child: H.ui.base.Element);

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - this UI element's HTML representation
        * @param {Document} doc - the HTML document into which the element is currently being rendered
        */
        renderInternal(element: Element, doc: Document);

        /**
        * This method returns this UI element's disabled state as a boolean value.
        */
        isDisabled(): boolean;

        /**
        * This method set's the disabled state of this UI element.
        * @param {boolean} disabled - true to disabled the element, false to enabled it
        * @param {boolean} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method returns a previously stored arbitrary data from this element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with this UI element.
        * @param {any} data - the data to be stored
        */
        setData(data: any);

        /**
        * Note: Before the UI element was rendered the method returns null.
        */
        getElement(): HTMLElement;

        /**
        * Sets the visibility of this element.
        * @param {boolean} visibility - 
        */
        setVisibility(visibility: boolean);

        /**
        * Returns the visibility of this element.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to this UI element (if it is not already present).
        * @param {string} className - the CSS class name to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from this UI element (if it is present).
        * @param {string} className - the CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


}


/**
* Namespace: H.ui.base.Button
**/
declare namespace H.ui.base.Button {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {boolean} disabled-A flag to indicate whether this button is disabled, default is false
        */
        disabled?: boolean;

        /**
        * @var {string} label-The markup (used as innerHTML) to be rendered into this button
        */
        label?: string;

        /**
        * @var {Function} onStateChange-A event listener for the onstatechange event to be immediately added
        */
        onStateChange?: Function;

        /**
        * @var {any} data-An arbitrary data object to be stored with this button
        */
        data?: any;

    }


    /**
    * State - This enumeration represents the possible state a button can have, namely 'UP' and 'DOWN'
    */
    export enum State {

        /**
        * UP - The button's state when it is not pressed. ('up')
        */
        UP,

        /**
        * DOWN - The button's state when it is pressed. ('down')
        */
        DOWN,

    }


}


/**
* Namespace: H.ui.base.OverlayPanel
**/
declare namespace H.ui.base.OverlayPanel {
    /**
    * State - 
    */
    export enum State {

        /**
        * OPEN - Defines a state where the OverlayPanel is open and visible
        */
        OPEN,

        /**
        * CLOSED - Defines a state where the OverlayPanel is closed and invisible
        */
        CLOSED,

    }


}


/**
* Namespace: H.ui.base.RadioGroup
**/
declare namespace H.ui.base.RadioGroup {
    /**
    * Options - 
    */
    export interface Options {

        /**
        * @var {string} title-an optional title string for this group
        */
        title?: string;

        /**
        * @var {Array<H.ui.base.Button.Options>} buttons-an optional set of button options to be added to this group
        */
        buttons?: Array<H.ui.base.Button.Options>;

    }


}


/**
* Namespace: H.ui.i18n
**/
declare namespace H.ui.i18n {
    /**
    * Localization - This class is used for internationalization of UI components.
    */
    export class Localization {

        /**
        * Constructor
        * @param {string} locale - locale code i.e en-GB
        * @param {Object} opt_translationMap - optional translation map for this locale if not provided Locale will be initialized with default translations if available
        */
        constructor(locale: string, opt_translationMap?: Object);

        /**
        * This method returns current locale code i.e 'en-US'
        */
        getLocale(): string;

        /**
        * This method returns translation keys for current locale. Keys from this set can be used to get translations via translate method.
        */
        getKeys(): Array<string>;

        /**
        * This method returns a boolean value indicating whether this localization object has a translation for the specified translation key.
        * @param {string} key - a transaltion key
        */
        hasKey(key: string): boolean;

        /**
        * This method returns translation for provided key. It throws exception if translation is not available
        * @param {string} key - a translation key
        */
        translate(key: string): string;

    }


}


/**
* Namespace: H.util
**/
declare namespace H.util {
    /**
    * Cache - The cache represents a in-memory LRU-cache with a fixed size. It stores any data that is added until the cache's content exceeds a maximum size. Once the size of all content elements exceeds the maximum size the cache will drop the least recently retrieved elements until the size of the cache is within the bounds of its maximum size. Data elements are always associated with an identifier that allow to retrieve them at a later stage and their content size.
    */
    export class Cache implements H.util.ICache  {

        /**
        * Constructor
        * @param {number} maxSize - the maximum size of the cache
        * @param {Function} opt_onDrop - A callback to be invoked when a data element is dropped from the cache
        * @param {Function} opt_filter - A function to filter data elements that are not to be cached
        */
        constructor(maxSize: number, opt_onDrop?: Function, opt_filter?: Function);

        /**
        * This method sets this cache's maximum size to a new size. If the cache's contents exceed the new size, least recently used data elements will be dropped.
        * @param {number} maxSize - the new maximum size of this cache.
        */
        setMaxSize(maxSize: number): H.util.Cache;

        /**
        * This method returns the maximum size of this cache.
        */
        getMaxSize(): number;

        /**
        * This method returns the current size of this cache.
        */
        getCurrentSize(): number;

        /**
        * This method adds an element to the cache.
        * @param {any} id - The identifier of this data element, the value is converted to a string.
        * @param {any} data - the actual data to be stored
        * @param {number} size - the size of the data element
        */
        add(id: any, data: any, size: number): boolean;

        /**
        * This method retrieves an element from the cache.
        * @param {string} id - the ID of the data element to be retrieved.
        * @param {boolean} opt_noUpdate - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
        */
        get(id: string, opt_noUpdate?: boolean): any;

        /**
        * This method explicitly drops an element from the cache.
        * @param {any} id - the id of the item to drop
        */
        drop(id: any);

        /**
        * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed on those entries for which the predicated returns true.
        * @param {Function} callback - the callback to be invoked for each entry
        * @param {Object} opt_ctx - an optional context object to be used as this within the callback
        * @param {Function} opt_matcher - an optional match predicate to customize on which entries the callback will be called
        */
        forEach(callback: Function, opt_ctx?: Object, opt_matcher?: Function);

        /**
        * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate return true.
        * @param {Function} opt_matcher - an optional function that receives an entries id, data and size and may return true or false to either remove it or leave the entry in the cache respectively
        */
        removeAll(opt_matcher?: Function);

        /**
        * This method registers a callback that should be called each time an entry is dropped from the cache.
        * @param {Function} callback - the callback to be invoked for each entry
        */
        registerOnDrop(callback: Function);

    }


    /**
    * ChangeEvent - This event indicates a change. It contains the old and the new value.
    */
    export class ChangeEvent extends H.util.Event  {

        /**
        * @var {any} target-Object which triggered the event
        */
        target: any;

        /**
        * @var {any} currentTarget-Object which has listener attached
        */
        currentTarget: any;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {string} type - The type of the event
        * @param {any} newValue - The new value of the property
        * @param {any} oldValue - The previous value of the property
        */
        constructor(type: string, newValue: any, oldValue: any);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


    /**
    * ContextItem - This class represents a contextual information/action.
    */
    export class ContextItem extends H.util.EventTarget  {

        /**
        * @var {H.util.ContextItem} static SEPARATOR-Separator for the context items
        */
        static SEPARATOR: H.util.ContextItem;

        /**
        * Constructor
        * @param {H.util.ContextItem.Options} opt_options - The values to initialize this context item
        */
        constructor(opt_options?: H.util.ContextItem.Options);

        /**
        * This method returns label of the context item
        */
        getLabel(): string;

        /**
        * This method changes context item label to the specified one
        * @param {string} label - New label for the context item
        */
        setLabel(label: string): H.util.ContextItem;

        /**
        * This method returns disabled state of the context item.
        */
        isDisabled(): boolean;

        /**
        * This method enables/disables the context item
        * @param {boolean} disabled - true to disable and false to enabled it
        */
        setDisabled(disabled: boolean): H.util.ContextItem;

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Disposable - Object which can be safely disposed.
    */
    export class Disposable {

        /**
        * Method adds a callback which will be triggered when the object is disposed
        * @param {Function} callback - 
        * @param {Object} opt_scope - 
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Event - Base Event class which is used for all events dispatched by any EventTarget within the api.
    */
    export class Event {

        /**
        * @var {any} target-Object which triggered the event
        */
        target: any;

        /**
        * @var {any} currentTarget-Object which has listener attached
        */
        currentTarget: any;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {string} type - Event Type.
        * @param {Object} opt_target - Reference to the object that is the target of this event. It has to implement the EventTarget interface.
        */
        constructor(type: string, opt_target?: Object);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


    /**
    * EventTarget - EventTarget enabled listening and dispatching events on all instances and derived classes.
    */
    export class EventTarget {

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * ICache - An interface definition for the generic cache. Any data elements can be stored in the cache. They are always associated with an identifier to retrieve them at a later stage and their content size.
    */
    export interface ICache {

        /**
        * This method adds an element to the cache.
        * @param {any} id - The identifier of this data element, the value is converted to a string.
        * @param {any} data - the actual data to be stored
        * @param {number} size - the size of the data element
        */
        add(id: any, data: any, size: number): boolean;

        /**
        * This method retrieves an element from the cache.
        * @param {string} id - the ID of the data element to be retrieved.
        * @param {boolean} opt_noUpdate - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
        */
        get(id: string, opt_noUpdate?: boolean): any;

        /**
        * This method explicitly drops an element from the cache.
        * @param {any} id - the id of the item to drop
        */
        drop(id: any);

        /**
        * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed on those entries for which the predicated returns true.
        * @param {Function} callback - the callback to be invoked for each entry
        * @param {Object} opt_ctx - an optional context object to be used as this within the callback
        * @param {Function} opt_matcher - an optional match predicate to customize on which entries the callback will be called
        */
        forEach(callback: Function, opt_ctx?: Object, opt_matcher?: Function);

        /**
        * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate return true.
        * @param {Function} opt_matcher - an optional function that receives an entries id, data and size and may return true or false to either remove it or leave the entry in the cache respectively
        */
        removeAll(opt_matcher?: Function);

        /**
        * This method registers a callback that should be called each time an entry is dropped from the cache.
        * @param {Function} callback - the callback to be invoked for each entry
        */
        registerOnDrop(callback: Function);

    }


    /**
    * ICancelable - An interface to cancelable requests and actions.
    */
    export interface ICancelable {

        /**
        * This method is used to cancel current action
        */
        cancel();

    }


    /**
    * ICapturable - An interface for capturable elements
    */
    export interface ICapturable {

        /**
        * This method is used to capture the element view
        * @param {HTMLCanvasElement} canvas - HTML Canvas element to draw the view of the capturable element
        * @param {number} pixelRatio - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
        * @param {Function} callback - Callback function to call once result of the capturing is ready
        * @param {Function} opt_errback - Callback function to call if error occurred during capturing
        */
        capture(canvas: HTMLCanvasElement, pixelRatio: number, callback: Function, opt_errback?: Function);

    }


    /**
    * OList - This class represents an list of ordered entries which dispatches events when the list is modified.
    */
    export class OList extends H.util.EventTarget  {

        /**
        * This method inserts an entry to the list. Optionally it can place new entry at provided index.
        * @param {any} entry - The entry to insert
        * @param {number} opt_idx - The index where the new entry should be inserted; if omitted or greater then the current size of the list, the entry is added at the end of the list; a negative index is treated as being relative from the end of the list
        */
        add(entry: any, opt_idx?: number);

        /**
        * This method removes an entry by a given index from the list.
        * @param {number} idx - The index of the entry which should be removed; a negative index is treated as being relative from the end of the list
        */
        removeAt(idx: number): any;

        /**
        * This method removes the the first entry which is identical with the given entry.
        * @param {any} entry - The entry to remove
        */
        remove(entry: any): boolean;

        /**
        * This method replaces an entry at the given index with the given entry.
        * @param {number} idx - The index of the entry which should be replaced; a negative index is treated as being relative from the end of the list
        * @param {any} entry - The entry which replaces the existing one
        */
        set(idx: number, entry: any): any;

        /**
        * This method retrieves the index of the first object in this list that is identical with the object supplied by the caller.
        * @param {any} entry - The entry for which to return the index.
        */
        indexOf(entry: any): number;

        /**
        * To get the entry at the specified index.
        * @param {number} idx - The index of the entry to get a negative index is treated as being relative from the end of the list
        */
        get(idx: number): any;

        /**
        * This method returns the length of the list.
        */
        getLength(): number;

        /**
        * This method returns all list's entries as an array.
        */
        asArray(): Array<any>;

        /**
        * This method removes all entries from the list.
        */
        flush();

        /**
        * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it. Otherwise memory leak is possible.
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object);

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string);

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose();

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope to call the callback in.
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object);

    }


    /**
    * Request - A generic class to represent a handle for any kind of asynchronous processed requests
    */
    export class Request {

        /**
        * Constructor
        * @param {Function} opt_onprogress - A callback to invoke every time when the request's progress state changes
        * @param {number} opt_total - The total number of processing steps to complete this request, default is 1
        */
        constructor(opt_onprogress?: Function, opt_total?: number);

        /**
        * Returns the state of this request
        */
        getState(): H.util.Request.State;

        /**
        * Returns the number of processing steps to complete this request
        */
        getTotal(): number;

        /**
        * Returns the number of steps which are already processed by this request
        */
        getProcessed(): number;

        /**
        * Returns the number of processingsteps which have been failed
        */
        getFailed(): number;

    }


}


/**
* Namespace: H.util.ContextItem
**/
declare namespace H.util.ContextItem {
    /**
    * Options - This type defines options which can be used to initialize the context item.
    */
    export interface Options {

        /**
        * @var {string} label-the label of the context item
        */
        label?: string;

        /**
        * @var {boolean} disabled-flag indicatting whether context item is disabled or no, by default false
        */
        disabled?: boolean;

        /**
        * @var {Function} callback-Optional callback function to call once context item is selected
        */
        callback?: Function;

    }


}


/**
* Namespace: H.util.OList
**/
declare namespace H.util.OList {
    /**
    * Event - The event class for events that are dispatched by OList
    */
    export class Event extends H.util.Event  {

        /**
        * @var {any} target-Object which triggered the event
        */
        target: any;

        /**
        * @var {any} currentTarget-Object which has listener attached
        */
        currentTarget: any;

        /**
        * @var {string} type-Name of the dispatched event
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-Indicates if preventDefault was called on the current event
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {H.util.OList} list - The OList instance which is emitting the event
        * @param {Object} type - The type of the event
        * @param {number} idx - The affected index within this list
        * @param {any} added - The value of the entry which was added or set
        * @param {any} removed - The value of the entry which was removed or replaced
        * @param {any} moved - The value of the entry which was moved
        */
        constructor(list: H.util.OList, type: Object, idx: number, added: any, removed: any, moved: any);

        /**
        * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
        */
        preventDefault();

        /**
        * Stops propagation for current event.
        */
        stopPropagation();

    }


}


/**
* Namespace: H.util.Request
**/
declare namespace H.util.Request {
    /**
    * State - The supported states of an request
    */
    export enum State {

        /**
        * PENDING - 
        */
        PENDING,

        /**
        * PROCESSING - 
        */
        PROCESSING,

        /**
        * COMPLETE - 
        */
        COMPLETE,

        /**
        * CANCELLED - 
        */
        CANCELLED,

        /**
        * ERROR - 
        */
        ERROR,

    }


}


/**
* Namespace: H.util.kinetics
**/
declare namespace H.util.kinetics {
    /**
    * IKinetics - This interface defines kinetic move parameters used by map for kinetic drag.
    */
    export interface IKinetics {

        /**
        * @var {number} power-Power multiplier. Multiplier is used to increase the speed of the kinetic move. By default map uses 1.
        */
        power: number;

        /**
        * @var {number} duration-Defines duration of the kinetic move.
        */
        duration: number;

        /**
        * Easing function modifies animation progress. In example it can modify the animation in a way it starts rapidly and then slows down at the end.
        * @param {number} p - current progress
        */
        ease(p: number): number;

    }


}
