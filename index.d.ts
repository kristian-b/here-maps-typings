// Type definitions for HERE maps 3.0.x
// Project: http://here.com/
// Definitions by: kristian-b <https://github.com/kristian-b>

/**
* Namespace: H
**/
declare namespace H {
    /**
    * Map - The Map class defines a map instance. By creating this object, you initialize a visible map attached to a DOM element. The Map class is the entry point to all operations involving layers, map objects and geo-screen transformations. Use the argument options to initialize the map with a specific map view.
    */
    export class Map extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {Element} element - HTML element into which the map will be rendered
        * @param {H.map.layer.Layer} baseLayer - The layer to be used as the base layer.
        * @param {H.Map.Options} opt_options - Additional map options (for example a map view)
        */
        constructor(element: Element, baseLayer: H.map.layer.Layer, opt_options?: H.Map.Options): void;

        /**
        * This method retrieves the map root HTML element.
        */
        getElement(): Element;

        /**
        * This method sets the center of the map.
        * @param {H.geo.IPoint} center - An object containing the coordinates of the new map center
        * @param {boolean} opt_animate - A value indicating if an animated transition should be applied, default is false
        */
        setCenter(center: H.geo.IPoint, opt_animate?: boolean): H.Map;

        /**
        * This method returns the current center of the map.
        */
        getCenter(): H.geo.Point;

        /**
        * This method sets the zoom level of the map. Every zoom level represents a different scale. The map at zoom level 2 is twice as large as the map at zoom level 1.
        * @param {number} zoom - A value indicating the new map zoom level
        * @param {boolean} opt_animate - A value indicating if an animated transition should be applied, default is false
        */
        setZoom(zoom: number, opt_animate?: boolean): H.Map;

        /**
        * This method retrieves the current map zoom level.
        */
        getZoom(): number;

        /**
        * This method changes the map zoom level while keeping the map location under the specified screen coordinates (x,y) fixed in the viewport.
        * @param {number} zoom - A value indicating the new map zoom level
        * @param {number} x - A value representing the x coordinate in the map viewport
        * @param {number} y - A value representing the y coordinate in the map viewport
        */
        zoomAt(zoom: number, x: number, y: number): void;

        /**
        * This method sets a bounding rectangle to be displayed on the map. Maps display a bounding rectangle in such a way that it fits entirely in the current viewport.
        * @param {H.geo.Rect} boundingRect - A bounding rectangle to be shown on the map
        * @param {boolean} opt_animate - A value indicating if animated transition should be applied, default is false
        */
        setViewBounds(boundingRect: H.geo.Rect, opt_animate?: boolean): H.Map;

        /**
        * This method retrieves the bounding rectangle of the current map view. The rectangle corresponds to the entire visible area of the map.
        */
        getViewBounds(): H.geo.Rect;

        /**
        * This method calculates the best CameraModel to show the bounding rectangle provided by the caller.
        * @param {H.geo.Rect} rect - The geographical bounding rectangle to use
        */
        getCameraDataForBounds(rect: H.geo.Rect): H.map.ViewModel.CameraData;

        /**
        * This method retrieves the current map viewport. The viewport can be used to modify padding and margin, which reflect the position of the viewport center and the amount of extra data loaded (for margin)
        */
        getViewPort(): H.map.ViewPort;

        /**
        * This method retrieves current view model. View model can be used to modify the current view or camera. H.map.ViewModel
        */
        getViewModel(): H.map.ViewModel;

        /**
        * This method retrieves the map's current layer collection.
        */
        getLayers(): H.map.DataModel;

        /**
        * This method retrieves the imprint object for this map.
        */
        getImprint(): H.map.Imprint;

        /**
        * Example
        * @param {Function} callback - Callback function to call once result of capture has completed
        * @param {Array<H.util.ICapturable>} opt_capturables - Collection of "capturable" element(s) to draw onto the resulting canvas
        * @param {number} opt_x1 - The x coordinate of the left edge of the capturing rectangle, defaults to 0
        * @param {number} opt_y1 - The y coordinate of the top edge of the capturing rectangle, defaults to 0
        * @param {number} opt_x2 - The x coordinate of the right edge of the capturing rectangle, defaults to viewport width
        * @param {number} opt_y2 - The y coordinate of the bottom edge of the capturing rectangle, defaults to viewport height
        */
        capture(callback: Function, opt_capturables?: Array<H.util.ICapturable>, opt_x1?: number, opt_y1?: number, opt_x2?: number, opt_y2?: number): void;

        /**
        * This method sets the rendering engine type for the map. The rendering engine is responsible for displaying, for example, tiles and data on the map.
        * @param {H.Map.EngineType} type - 
        */
        setEngineType(type: H.Map.EngineType): H.Map;

        /**
        * This method persistently stores the content of a map layer for a given area and range of zoom levels. It can be used to enable map rendering when no internet connection is available and also to reduce the download traffic for frequently visited map areas.
        * @param {Function} opt_onprogress - A callback invoked each time the progress state of the returned store request changes.
        * @param {H.geo.Rect} opt_bounds - The area to store, default is the current view bounds
        * @param {number} opt_min - The minimum zoom level to store, default is the current zoom level
        * @param {number} opt_max - The maximum zoom level to store, default is the current zoom level
        * @param {H.map.layer.BaseTileLayer} opt_layer - The layer to store, default is the current base layer
        */
        storeContent(opt_onprogress?: Function, opt_bounds?: H.geo.Rect, opt_min?: number, opt_max?: number, opt_layer?: H.map.layer.BaseTileLayer): H.util.Request;

        /**
        * This method clears the entire stored content.
        * @param {Function} opt_onprogress - A callback which is invoked each time the progress state of the returned clear request changes
        */
        clearContent(opt_onprogress?: Function): H.util.Request;

        /**
        * This method adds a layer to the map.
        * @param {H.map.layer.Layer} layer - The map layer to be added
        * @param {number} opt_idx - index at which the new layer should be inserted
        */
        addLayer(layer: H.map.layer.Layer, opt_idx?: number): H.Map;

        /**
        * This method removes a layer from the map.
        * @param {H.map.layer.Layer} layer - The map layer to be removed
        */
        removeLayer(layer: H.map.layer.Layer): H.Map;

        /**
        * This method sets the provided layer as base map. The layer is inserted as the bottom-most layer in the map.
        * @param {H.map.layer.Layer} layer - The layer to use as base map
        */
        setBaseLayer(layer: H.map.layer.Layer): H.Map;

        /**
        * This method gets the current base map layer.
        */
        getBaseLayer(): H.map.layer.Layer;

        /**
        * This method retrieves the screen coordinates corresponding to the geographical coordinates supplied by the caller.
        * @param {H.geo.IPoint} geoPoint - point on the map
        */
        geoToScreen(geoPoint: H.geo.IPoint): H.math.Point;

        /**
        * This method retrieves the geographical coordinates corresponding to the screen coordinates supplied by the caller.
        * @param {number} x - Map viewport x-axis pixel coordinate
        * @param {number} y - Map viewport y-axis pixel coordinate
        */
        screenToGeo(x: number, y: number): H.geo.Point;

        /**
        * This method retrieves the camera data according to the given screen coordinates. The method converts screen pixel coordinates to correct camera data object.
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        screenToCameraData(x: number, y: number): H.map.ViewModel.CameraData;

        /**
        * This method adds a map object to the map. The map object can be a marker or a spatial object such as a polygon or polyline.
        * @param {Object} mapObject - The map object to add
        */
        addObject(mapObject: Object): Object;

        /**
        * This method removes previously added map object from the map.
        * @param {Object} mapObject - The map object to remove
        */
        removeObject(mapObject: Object): Object;

        /**
        * Note: Adding or removing objects on the obtained list doesn't affect the map. Use the map's addObject and removeObjects methods instead.
        */
        getObjects(): Object;

        /**
        * Note: Objects which were added to the map previously are not be added again.
        * @param {Object} mapObjects - 
        */
        addObjects(mapObjects: Object): H.Map;

        /**
        * This method removes an array of objects or an object group from the map.
        * @param {Object} mapObjects - 
        */
        removeObjects(mapObjects: Object): H.Map;

        /**
        * This method retrieves the top-most z-ordered map object found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top-left corner as origin (0, 0).
        * @param {number} x - map viewport x-axis pixel coordinate
        * @param {number} y - map viewport y-axis pixel coordinate
        */
        getObjectAt(x: number, y: number): Object;

        /**
        * This method retrieves a list of map objects in descending z-order found under the specific screen coordinates. The coordinates are viewport pixel coordinates starting from top left corner as origin (0, 0).
        * @param {number} x - map Viewport x-axis pixel coordinate
        * @param {number} y - map Viewport y-axis pixel coordinate
        */
        getObjectsAt(x: number, y: number): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


}


/**
* Namespace: H.Map
**/
declare namespace H.Map {
    /**
    * BackgroundRange - This variable defines the number of lower and higher zoom levels, where cached content of the base map is rendered while content of the current zoom level is still loading. For example, if range is set to {lower: 3, higher: 2} and current level is 10, then the rendering engine tries to display cached tiles from the lower zoom levels 7, 8, 9 and the higher levels 11 and 12.
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
    * EngineType - Types of engines.
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
    * Options - This type defines options that can be used to initialize the map.
    */
    export interface Options {

        /**
        * @var {H.geo.IPoint} center-The initial center of the map, default is {lat:0, lng: 0}
        */
        center?: H.geo.IPoint;

        /**
        * @var {number} zoom-The initial zoom level of the map, default is 0 or the minimal zoom level of the base map
        */
        zoom?: number;

        /**
        * @var {H.geo.Rect} bounds-The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom
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
        * @var {H.Map.BackgroundRange} renderBaseBackground-An object describing how many cached zoom levels should be used as a base map background while base map tiles are loading. Example: {lower: 3, higher: 2}.
        */
        renderBaseBackground?: H.Map.BackgroundRange;

        /**
        * @var {boolean} autoColor-A value indicating whether the UI colors should be automatically adjusted to the base layer (true, default). At present, only the copyright style is adjusted. See H.map.layer.Layer.Options#dark
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
        * @var {boolean} fixedCenter-A value indicating whether the center of the map should remain unchanged if the size or padding of the viewport have been changed (true, default), or not (false)
        */
        fixedCenter?: boolean;

        /**
        * @var {boolean} noWrap-Indicates whether to wrap the world on longitude axes. When set to false, multiple worlds are rendered. When set to true, only one world will be rendered. Default is false.
        */
        noWrap?: boolean;

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
        * @var {H.geo.Latitude} lat-This property holds the latitude of the data point.
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-This property holds the longitude of the data point.
        */
        lng: H.geo.Longitude;

        /**
        * @var {number} wt-This property holds the (clustering) weight of the data point.
        */
        wt: number;

        /**
        * @var {any} data-This property holds the data associated with the given data point.
        */
        data: any;

        /**
        * Constructor
        * @param {H.geo.Latitude} lat - The latitude coordinate of the position of the data point
        * @param {H.geo.Longitude} lng - The longitude coordinate of the position of the data point
        * @param {number} opt_weight - The weight of the data point as a positive number, the default is 1
        * @param {any} opt_data - Optional data, which will be associated with the given DataPoint
        */
        constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_weight?: number, opt_data?: any): void;

    }


    /**
    * ICluster - This interface encapsulates a cluster of data points, which fulfill the clustering specification (the data points are within the epsilon and there are enough points to form a cluster).
    */
    export interface ICluster {

        /**
        * This method retrieves the maximum zoom level at which the given cluster does not break up into into sub-clusters and/or noise points.
        */
        getMaxZoom(): number;

        /**
        * This method retrieves the bounding rectangle of the given cluster.
        */
        getBounds(): H.geo.Rect;

        /**
        * In an analogy to the example from the class description, the method traverses through all nodes of the tree beside the root.
        * @param {Function} callback - The callback to invoke. It receives the currently traversed entry as an argument, which is cluster or noise point
        */
        forEachEntry(callback: Function): void;

        /**
        * In an analogy to the example from the class description, the method traverses only through the leaf nodes of the tree.
        * @param {Function} callback - The callback to invoke. It receives the currently traversed noise point as argument.
        */
        forEachDataPoint(callback: Function): void;

        /**
        * This method retrieves the geographical position of the cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * This method retrieves the weight of the cluster result.
        */
        getWeight(): number;

        /**
        * This method retrieves a value indicating whether the cluster result is a cluster or a noise point.
        */
        isCluster(): boolean;

        /**
        * This method retrieves the minimum zoom level at which the given item is not part of another cluster.
        */
        getMinZoom(): number;

    }


    /**
    * INoisePoint - This interface represents a data point which does not belong to a cluster.
    */
    export interface INoisePoint {

        /**
        * This method retrieves the data associated with the given noise point.
        */
        getData(): any;

        /**
        * This method retrieves the geographical position of the cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * This method retrieves the weight of the cluster result.
        */
        getWeight(): number;

        /**
        * This method retrieves a value indicating whether the cluster result is a cluster or a noise point.
        */
        isCluster(): boolean;

        /**
        * This method retrieves the minimum zoom level at which the given item is not part of another cluster.
        */
        getMinZoom(): number;

    }


    /**
    * IResult - This interface represents an item in the results of a clustering operation.
    */
    export interface IResult {

        /**
        * This method retrieves the geographical position of the cluster result.
        */
        getPosition(): H.geo.Point;

        /**
        * This method retrieves the weight of the cluster result.
        */
        getWeight(): number;

        /**
        * This method retrieves a value indicating whether the cluster result is a cluster or a noise point.
        */
        isCluster(): boolean;

        /**
        * This method retrieves the minimum zoom level at which the given item is not part of another cluster.
        */
        getMinZoom(): number;

    }


    /**
    * ITheme - This interface specifies the methods a clustering theme must implement.
    */
    export interface ITheme {

        /**
        * This method retrieves a map object representing a cluster.
        * @param {H.clustering.ICluster} cluster - An object implementing the interface ICluster
        */
        getClusterPresentation(cluster: H.clustering.ICluster): Object;

        /**
        * This method retrieves a map object representing a noise point.
        * @param {H.clustering.INoisePoint} noisePoint - An object implementing the interface INoisePoint
        */
        getNoisePresentation(noisePoint: H.clustering.INoisePoint): Object;

    }


    /**
    * Provider - The clustering provider serves clusters and noise point representation for the map based on the provided data set. Levels for clustering as well as custom cluster representation can be set via Options.
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
        * @param {Array<H.clustering.DataPoint>} dataPoints - An array of objects representing data points
        * @param {H.clustering.Provider.Options} opt_options - An object containing configuration options
        */
        constructor(dataPoints: Array<H.clustering.DataPoint>, opt_options?: H.clustering.Provider.Options): void;

        /**
        * This method allows to listen for specific event triggered by the object
        * @param {string} type - name of event
        * @param {Function} handler - event handler function
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method will removed previously added listener from the event target
        * @param {string} type - name of event
        * @param {Function} handler - previously added event handler
        * @param {boolean} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method will dispatch event on the event target object
        * @param {H.util.Event | string} evt - event object or event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds callback which is triggered when the object is being disposed
        * @param {Function} callback - 
        * @param {Object} opt_scope - 
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

        /**
        * This method sets a new data on the provider class.
        * @param {Array<H.clustering.DataPoint>} dataPoints - A set of data points
        */
        setDataPoints(dataPoints: Array<H.clustering.DataPoint>): void;

        /**
        * This method adds a data point to the provider. Note that this method triggers reclustering of the the data set associated with the provider.
        * @param {H.clustering.DataPoint} dataPoint - An object representing the data point to add
        */
        addDataPoint(dataPoint: H.clustering.DataPoint): void;

        /**
        * This method adds a list of data points to the provider. Note that this method triggers reclustering of the data set associated with the provider.
        * @param {Array<H.clustering.DataPoint>} dataPoints - A set of data point objects to add
        */
        addDataPoints(dataPoints: Array<H.clustering.DataPoint>): void;

        /**
        * This method removes a data point from the provider's data set. Note that this method triggers reclustering of the data set associated with the provider.
        * @param {H.clustering.DataPoint} dataPoint - An object representing the data point to remove
        */
        removeDataPoint(dataPoint: H.clustering.DataPoint): void;

        /**
        * This method retrieves the current theme used for cluster visualizations.
        */
        getTheme(): H.clustering.ITheme;

        /**
        * This method sets new theme on the provider. Note that this method changes the visual representation of the displayed clusters and noise points.
        * @param {H.clustering.ITheme} theme - An object representing the theme to set
        */
        setTheme(theme: H.clustering.ITheme): void;

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
        invalidateObject(mapObject: Object, changes: H.math.BitMask): void;

    }


}


/**
* Namespace: H.clustering.Provider
**/
declare namespace H.clustering.Provider {
    /**
    * ClusteringOptions - This type encapsulates configuration (initialization) options which are used in cluster calculations.
    */
    export interface ClusteringOptions {

        /**
        * @var {number} eps-The epsilon parameter for cluster calculations. For the FASTGRID strategy, it must not exceed 256 and must take values that are a power of 2. For the GRID and DYNAMICGRID strategies, it can take values from 10 to 127. The Default is 32.
        */
        eps?: number;

        /**
        * @var {number} minWeight-The minimum point weight sum to form a cluster, the default is 2
        */
        minWeight?: number;

        /**
        * @var {H.geo.IProjection} projection-The projection to use for clustering, the default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {H.clustering.Provider.Strategy} strategy-The identifier of the clustering strategy, defaults to H.clustering.Provider.Strategy.FASTGRID
        */
        strategy?: H.clustering.Provider.Strategy;

    }


    /**
    * Options - This type encapsulates configuration (initialization) options the clustering Provider.
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted, an auto-generated unique session ID is used. If a consistent ID across sessions is needed (for example for storing provider data), this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimum supported zoom level, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum supported zoom level, the default is 22
        */
        max?: number;

        /**
        * @var {number} pixelRatio-The pixel ratio to use for over-sampling in cases of high-resolution displays
        */
        pixelRatio?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implementation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

        /**
        * @var {H.clustering.Provider.ClusteringOptions} clusteringOptions-Configuration options for clustering algorithm
        */
        clusteringOptions?: H.clustering.Provider.ClusteringOptions;

        /**
        * @var {H.clustering.ITheme} theme-An object that determines the visual representation for clusters and noise points
        */
        theme?: H.clustering.ITheme;

    }


    /**
    * Strategy - This enumeration represents identifiers for possible clustering strategies. FASTGRID clustering is an efficient way to cluster large sets of data points. GRID clustering is slower, but has greater precision due to a bigger range of epsilon values. This strategy is suitable for clustering smaller data sets (up to 1000 data points) on desktop devices. DYNAMICGRID clustering uses the same algorithm of clustering as the GRID, but clusters on the viewport basis. It is best suited for data sets that are subject to frequent updates.
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
    * AbstractReader - This abstract reader class defines an interface for data readers and general functionality related to fetching data and to handling rendering events.
    */
    export class AbstractReader extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string} opt_url - The optional URL of the data file
        */
        constructor(opt_url?: string): void;

        /**
        * This method retrieves an object layer (H.map.layer.ObjectLayer) that contains parsed data and can be added directly to the map. The method gets a new instance of ObjectLayer with every invocation. If the data has not been parsed, the method returns an ObjectLayer that contains partial information, and the reader adds any new parsed objects to the provider associated with the layer later on.
        */
        getLayer(): Object;

        /**
        * This method retrieves a collection of objects representing parsed data converted to data objects. Note that the method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * This method retrieves the URL of the current file, which is either a file being fetched/parsed or a file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * This method sets the URL for the Reader. It resets the current state of the Reader to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if the state of the Reader is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * This method retrieves the processing state of the Reader. For possible states see H.data.AbstractReader.State.
        */
        getState(): H.data.AbstractReader.State;

        /**
        * This method launches parsing of the data file at the current URL (see H.data.AbstractReader#setUrl or H.data.AbstractReader). The method uses XHR as a transport, therefore the same origin policy applies, or the server should respond with the appropriate CORS headers.
        */
        parse(): void;

    }


}


/**
* Namespace: H.data.AbstractReader
**/
declare namespace H.data.AbstractReader {
    /**
    * Event - This class encapsulates state change events dispatched by AbstractReader.
    */
    export class Event extends H.util.Event  {

        /**
        * Constructor
        * @param {Object} target - The target that is passed to event listeners
        * @param {string} type - An identifier of the event type
        * @param {H.data.AbstractReader.State} state - An identifier of the state of the target firing an event
        * @param {string} message - The message associated with an event
        */
        constructor(target: Object, type: string, state: H.data.AbstractReader.State, message: string): void;

    }


    /**
    * State - This enumeration defines identifiers for Reader state types. The possible states are:
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
    * Reader - This class represents a GeoJSON reader responsible for fetching and interpreting GeoJSON data. It creates an instance of H.map.Object that can be displayed on the map (for more details on GeoJSON see http://geojson.org/).
    */
    export class Reader extends H.data.AbstractReader  {

        /**
        * Constructor
        * @param {string} opt_url - The optional URL of the data file
        * @param {H.data.geojson.Reader.Options} opt_options - An object providing additional reader configuration parameters
        */
        constructor(opt_url?: string, opt_options?: H.data.geojson.Reader.Options): void;

        /**
        * This method launches the parsing process on the provided data.
        * @param {Object} data - A string or object containing the data to parse
        */
        parseData(data: Object): void;

        /**
        * This method retrieves an object layer (H.map.layer.ObjectLayer) that contains parsed data and can be added directly to the map. The method gets a new instance of ObjectLayer with every invocation. If the data has not been parsed, the method returns an ObjectLayer that contains partial information, and the reader adds any new parsed objects to the provider associated with the layer later on.
        */
        getLayer(): Object;

        /**
        * This method retrieves a collection of objects representing parsed data converted to data objects. Note that the method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * This method retrieves the URL of the current file, which is either a file being fetched/parsed or a file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * This method sets the URL for the Reader. It resets the current state of the Reader to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if the state of the Reader is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * This method retrieves the processing state of the Reader. For possible states see H.data.AbstractReader.State.
        */
        getState(): H.data.AbstractReader.State;

        /**
        * This method launches parsing of the data file at the current URL (see H.data.AbstractReader#setUrl or H.data.AbstractReader). The method uses XHR as a transport, therefore the same origin policy applies, or the server should respond with the appropriate CORS headers.
        */
        parse(): void;

    }


}


/**
* Namespace: H.data.geojson.Reader
**/
declare namespace H.data.geojson.Reader {
    /**
    * Options - This type encapsulates configuration (initialization) properties for a H.data.geojson.Reader.
    */
    export interface Options {

        /**
        * @var {Function} style-A function to be invoked during the parsing process, after object creation, and is used to set the style of the object
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
        * @param {Object} stops - An object defining the color stops
        * @param {boolean} opt_interpolate - A value indicating whether interpolation is to be used to display smooth color transitions in the heat map (true) or whether the heat map is to be posterized (false), the default is false.
        */
        constructor(stops: Object, opt_interpolate?: boolean): void;

    }


    /**
    * IDataPoint - This interface represents a single data point that can be represented visually in a heat map. It consists of the geographic coordinates defining the location of the point and an optional value to be associated with this location.
    */
    export interface IDataPoint {

        /**
        * @var {number} value-This property holds the "heat" value associated with the given data point. The default is 1.
        */
        value: number;

    }


    /**
    * Provider - This class provides tiles to visualize value-based or density-based heat maps. The user can choose between density and value based heat map.
    */
    export class Provider extends H.map.provider.RemoteTileProvider  {

        /**
        * Constructor
        * @param {H.data.heatmap.Provider.Options} opt_options - An object containing configuration options
        */
        constructor(opt_options?: H.data.heatmap.Provider.Options): void;

        /**
        * As new data can invalidate the already generated tiles, those tiles should be removed form the tile cache. Use the argument opt_hardReload to change the mode determining how those tiles are removed. Two modes are supported:
        * @param {Array<H.data.heatmap.IDataPoint>} dataPoints - An array of data points to add
        * @param {boolean} opt_hardReload - A value indicating whether to invalidate in hard mode (true) or in soft mode (false), the default is soft mode.
        */
        addData(dataPoints: Array<H.data.heatmap.IDataPoint>, opt_hardReload?: boolean): void;

        /**
        * This method removes all data from the given heat map provider object. New data can be added using the method H.data.heatmap.Provider#addData.
        */
        clear(): void;

    }


}


/**
* Namespace: H.data.heatmap.Provider
**/
declare namespace H.data.heatmap.Provider {
    /**
    * Options - This type encapsulates configuration (initialization) options for the heat map Provider.
    */
    export interface Options {

        /**
        * @var {string} type-A value indicating the type of the heat map, either "value" or "density". The default is "density".
        */
        type: string;

        /**
        * @var {H.data.heatmap.Colors} colors-A value indicating the colors of the heat map. The default is H.data.heatmap.Colors.DEFAULT.
        */
        colors: H.data.heatmap.Colors;

        /**
        * @var {number} min-A value indicating the minimum supported zoom level. The default is 0.
        */
        min?: number;

        /**
        * @var {number} max-A value indicating the maximum supported zoom level. The default is 22.
        */
        max?: number;

        /**
        * @var {number} tileSize-A value indicating the size of a tile expressed as the length of the tile edge in pixels. It must be 2^n, where n is in the range [0... 30]. The default is 256.
        */
        tileSize?: number;

        /**
        * @var {boolean} assumeValues-A Boolean value indicating whether to paint assumed values in regions where no data is available. This is especially useful for value maps generated from small data sets to allow tiles with no available data to be filled with the next available average value in the data set. The default is false.
        */
        assumeValues?: boolean;

        /**
        * @var {number} coarseness-A numeric value defining the resolution reduction when producing tiles. If the coarseness is set to 0, tiles are produced in the original resolution. A coarseness of 1 allows the renderer to render tiles at half the size and then scale the output. A coarseness of 2 allows the renderer to create tiles at a size of a quarter of the original tile size. Increasing the number dramatically increases performance but also reduces visual quality, especially when using "posterization" (non-interpolated colors). Values are restricted to a integer in the range [0 ... 3]. The default is 1.
        */
        coarseness?: number;

        /**
        * @var {number} sampleDepth-A numeric value defining the number of sampling iterations the heat map renderer is to perform on the data set. Each successive iteration samples the data more finely than the previous iteration. Higher values create more detailed maps but also impose a performance cost. Values are confined to a integer in the range [1 ... 8]. The default is 4.
        */
        sampleDepth?: number;

        /**
        * @var {number} dataMax-A numeric value defining the pixel color gamma correction for the "density" heat maps. Values are confined to integers in the range [min ... max+sampleDepth]. The default is max.
        */
        dataMax?: number;

    }


}


/**
* Namespace: H.data.kml
**/
declare namespace H.data.kml {
    /**
    * Reader - This class is responsible for fetching and interpreting KML data. It creates an instance of H.map.Object that can be displayed on the map, from KML features and geometries as described by OGC.
    */
    export class Reader extends H.data.AbstractReader  {

        /**
        * Constructor
        * @param {string} url - A URL from which to get KML data
        */
        constructor(url: string): void;

        /**
        * This method retrieves an object layer (H.map.layer.ObjectLayer) that contains parsed data and can be added directly to the map. The method gets a new instance of ObjectLayer with every invocation. If the data has not been parsed, the method returns an ObjectLayer that contains partial information, and the reader adds any new parsed objects to the provider associated with the layer later on.
        */
        getLayer(): Object;

        /**
        * This method retrieves a collection of objects representing parsed data converted to data objects. Note that the method returns only currently parsed objects if parsing is ongoing.
        */
        getParsedObjects(): Object;

        /**
        * This method retrieves the URL of the current file, which is either a file being fetched/parsed or a file that has been already parsed.
        */
        getUrl(): string | any;

        /**
        * This method sets the URL for the Reader. It resets the current state of the Reader to its initial values (clears data about last parsed objects, etc.), and throws InvalidState exception if the state of the Reader is not READY or ERROR.
        * @param {string} url - The new URL
        */
        setUrl(url: string): H.data.AbstractReader;

        /**
        * This method retrieves the processing state of the Reader. For possible states see H.data.AbstractReader.State.
        */
        getState(): H.data.AbstractReader.State;

        /**
        * This method launches parsing of the data file at the current URL (see H.data.AbstractReader#setUrl or H.data.AbstractReader). The method uses XHR as a transport, therefore the same origin policy applies, or the server should respond with the appropriate CORS headers.
        */
        parse(): void;

    }


}


/**
* Namespace: H.geo
**/
declare namespace H.geo {
    /**
    * Altitude - This property holds a geographic coordinate that specifies the elevation of a point on the Earth's surface in meters. A value of undefined is treated as 0.
    */
    export interface Altitude {

    }


    /**
    * AltitudeContext - This object defines the supported identifiers for the contextual origin of altitude values.
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
    * IPoint - An interface to represent a geographic point. Every point in geographic space is represented by three coordinates latitude, longitude and optional altitude.
    */
    export interface IPoint {

        /**
        * @var {H.geo.Latitude} lat-This property represents the latitude of the point.
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-This property represents the longitude of the point.
        */
        lng: H.geo.Longitude;

        /**
        * @var {H.geo.Altitude} alt-This property represents the altitude of the point.
        */
        alt?: H.geo.Altitude;

        /**
        * @var {H.geo.AltitudeContext} ctx-This property represents the altitude context.
        */
        ctx?: H.geo.AltitudeContext;

    }


    /**
    * IProjection - This interface represents a map projection. It defines functions that transform geographic coordinates to EPSG3857 coordinate reference system, which uses x, y values in range 0..1
    */
    export interface IProjection {

        /**
        * This method transforms geographical lat/lng coordinates to a projected point in the range [0...1].
        * @param {number} lat - latitude A value indicating the latitude
        * @param {number} lng - longitude A value indicating the longitude
        * @param {H.math.Point} opt_out - An optional point to receive the result
        */
        latLngToPoint(lat: number, lng: number, opt_out?: H.math.Point): H.math.Point;

        /**
        * This method transforms projected x/y coordinates in the range [0...1] to a geographical point.
        * @param {number} x - A value indicating the x coordinate
        * @param {number} y - A value indicating the y coordinate
        * @param {H.geo.Point} opt_out - An optional point object to receive the result
        * @param {boolean} opt_noWrap - Indicates whether to treat the world as wrapped along the longitude axis. When set to false, x-coordinates are normalized to the range [0..1]. When set to true, x-coordinates are clamped to the range [0..1]. Default is false.
        */
        xyToGeo(x: number, y: number, opt_out?: H.geo.Point, opt_noWrap?: boolean): H.geo.Point;

        /**
        * This method transforms a projected point in the range [0...1] to a geographical point.
        * @param {H.math.IPoint} point - An object representing the point to convert
        * @param {H.geo.Point} opt_out - An optional geographical point object to receive the results
        * @param {boolean} opt_noWrap - Indicates whether to treat the world as wrapped along the longitude axis. When set to false, x-coordinates are normalized to the range [0..1]. When set to true, x-coordinates are clamped to the range [0..1]. Default is false.
        */
        pointToGeo(point: H.math.IPoint, opt_out?: H.geo.Point, opt_noWrap?: boolean): H.geo.Point;

        /**
        * This method transforms a geographical point to a projected point in the range [0...1].
        * @param {H.geo.IPoint} geoPoint - An object containing geographical coordinates
        * @param {H.math.Point} opt_out - An optional point to receive the result
        */
        geoToPoint(geoPoint: H.geo.IPoint, opt_out?: H.math.Point): H.math.Point;

    }


    /**
    * Latitude - This property holds a geographic coordinate that specifies the north-south position of a point on the Earth's surface in the range from -90 to + 90 degrees, inclusive.
    */
    export interface Latitude {

    }


    /**
    * Longitude - This property holds a geographic coordinate that specifies the east-west position of a point on the Earth's surface in the range from -180 to 180 degrees, inclusive.
    */
    export interface Longitude {

    }


    /**
    * PixelProjection - PixelProjection transforms pixel world coordinates at a certain scale (zoom level) to geographical coordinates and vice versa. By default, it uses the Mercator projection to transform geographic points into the 2d plane map points, which are adjusted to the current scale.
    */
    export class PixelProjection {

        /**
        * @var {H.geo.IProjection} projection-This property indicates the geographical projection that underlies the given PixelProjection.
        */
        projection: H.geo.IProjection;

        /**
        * @var {number} x-This property holds the x-offset in the projection relative to the top-left corner of the screen.
        */
        x: number;

        /**
        * @var {number} y-This property holds the y-offset in the projection relative to the top-left corner of the screen.
        */
        y: number;

        /**
        * @var {number} w-This property holds a value indicating the width of the world in pixels.
        */
        w: number;

        /**
        * @var {number} h-This property holds a value indicating the height of the world in pixels.
        */
        h: number;

        /**
        * Constructor
        * @param {H.geo.IProjection} opt_projection - An object representing the projection to use, the default is spherical Mercator H.geo.mercator
        * @param {number} opt_sizeAtLevelZero - A value indicating the size of a tile representation of the world in pixels at zoom level 0, the default is 256
        */
        constructor(opt_projection?: H.geo.IProjection, opt_sizeAtLevelZero?: number): void;

        /**
        * This method updates the scale exponent for the pixel projection.
        * @param {number} zoom - A value indicating the zoom level
        */
        rescale(zoom: number): void;

        /**
        * This method retrieves the current zoom scale factor previously set by a call to H.geo.PixelProjection#rescale.
        */
        getZoomScale(): number;

        /**
        * This method translates a point defines in terms of its geographic coordinates to pixel coordinates at the specified zoom level.
        * @param {H.geo.IPoint} geoPoint - An object containing the geographic coordinates
        * @param {H.math.IPoint} opt_out - An optional point to store the result
        */
        geoToPixel(geoPoint: H.geo.IPoint, opt_out?: H.math.IPoint): H.math.IPoint;

        /**
        * This method translates a point defined in terms of its pixel coordinates to a location defined in geographic coordinates.
        * @param {H.math.IPoint} point - An object defining a location on the screen in terms of pixel coordinates
        * @param {H.geo.IPoint} opt_out - An optional point to store the result
        * @param {boolean} opt_noWrap - Indicates whether to treat the world as wrapped along the longitude axis. When set to false, x-coordinates are normalized to the range [0..1]. When set to true, x-coordinates are clamped to the range [0..1]. Default is false.
        */
        pixelToGeo(point: H.math.IPoint, opt_out?: H.geo.IPoint, opt_noWrap?: boolean): H.geo.IPoint;

        /**
        * This method translates the x and y coordinates of a pixel to a geographic point.
        * @param {number} x - A value indicating the pixel x-coordinate
        * @param {number} y - A value indicating the pixel y-coordinate
        * @param {H.geo.Point} opt_out - An optional point to store the result
        * @param {boolean} opt_noWrap - Indicates whether to treat the world as wrapped along the longitude axis. When set to false, x-coordinates are normalized to the range [0..1]. When set to true, x-coordinates are clamped to the range [0..1]. Default is false.
        */
        xyToGeo(x: number, y: number, opt_out?: H.geo.Point, opt_noWrap?: boolean): H.geo.Point;

        /**
        * This method translates geographical coordinates (latitude, longitude) supplied by the caller into a point defined in terms of pixel coordinates. This method accepts longitudes outside of the normal longitude range.
        * @param {number} latitude - The latitude to translate
        * @param {number} longitude - The longitude to translate
        * @param {H.math.IPoint} opt_out - An optional point to store the result
        */
        latLngToPixel(latitude: number, longitude: number, opt_out?: H.math.IPoint): H.math.Point;

        /**
        * This method method translates a map point to world pixel coordinates relative to current projection offset.
        * @param {H.math.IPoint} point - An object representing the map point to convert
        */
        pointToPixel(point: H.math.IPoint): H.math.Point;

    }


    /**
    * Point - A Point represents a geographical point.
    */
    export class Point extends H.geo.AbstractGeometry  implements H.geo.IPoint  {

        /**
        * @var {H.geo.Latitude} lat-This property represents the latitude of the point.
        */
        lat: H.geo.Latitude;

        /**
        * @var {H.geo.Longitude} lng-This property represents the longitude of the point.
        */
        lng: H.geo.Longitude;

        /**
        * @var {H.geo.Altitude} alt-This property represents the altitude of the point.
        */
        alt: H.geo.Altitude;

        /**
        * @var {H.geo.AltitudeContext} ctx-This property represents the altitude context.
        */
        ctx: H.geo.AltitudeContext;

        /**
        * Constructor
        * @param {H.geo.Latitude} lat - A value indicating latitude
        * @param {H.geo.Longitude} lng - A value indicating longitude
        * @param {H.geo.Altitude} opt_alt - A value indicating altitude
        * @param {H.geo.AltitudeContext} opt_ctx - The altitude context
        */
        constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_alt?: H.geo.Altitude, opt_ctx?: H.geo.AltitudeContext): void;

        /**
        * Returns the distance between the point and the point supplied by the caller. The method uses the Haversine formula. The altitude is not considered.
        * @param {H.geo.IPoint} other - An object representing the point to which to calculate the distance
        */
        distance(other: H.geo.IPoint): number;

        /**
        * Returns the destination point, based on the given distance and bearing relative to the current point. The algorithm is based on the Haversine formula. The altitude is ignored, instead the WGS84 Mean Radius is taken.
        * @param {number} bearing - The bearing to the destination in degrees
        * @param {number} distance - The distance to the destination in meters
        * @param {boolean} opt_overGreatCircle - true means that the computation is to use the "Great Circle", otherwise it uses "Rhumb Line".
        */
        walk(bearing: number, distance: number, opt_overGreatCircle?: boolean): H.geo.Point;

        /**
        * Validates the given instance of Point. It checks if lat, lng, alt and ctx have valid types. Additionally, the method checks if the value of the lat property is in the range [-90 ... +90], the modulo of the value of lng in the range [-180 ... +180], and it validates the values of alt and ctx properties.
        * @param {H.geo.IPoint} point - An object representing the point to validate
        * @param {Function} opt_caller - The caller to use to throw InvalidArgumentError, if omitted no error is thrown
        * @param {number} opt_argNr - The argument number to use for InvalidArgumentError
        */
        static  validate(point: H.geo.IPoint, opt_caller?: Function, opt_argNr?: number): boolean;

        /**
        * This method creates a Point instance from an IPoint object.
        * @param {H.geo.IPoint} iPoint - The IPoint object to use
        */
        static  fromIPoint(iPoint: H.geo.IPoint): H.geo.Point;

        /**
        * Returns the bounding rectangle of the geometry.
        */
        getBounds(): H.geo.Rect;

        /**
        * Checks whether the geometry is equal to the geometry supplied by the caller. Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
        * @param {any} other - The geometry to check against
        */
        equals(other: any): boolean;

        /**
        * To obtain a Well-Known-Text (WKT) representation of the geometry.
        */
        toString(): string;

    }


    /**
    * Rect - A Rect represents a rectangular geographic area defined by the geographic coordinates of its top-left and bottom-right corners.
    */
    export class Rect extends H.geo.AbstractGeometry  {

        /**
        * Constructor
        * @param {H.geo.Latitude} top - A value indicating the northern-most latitude
        * @param {H.geo.Longitude} left - A value indicating the left-most longitude
        * @param {H.geo.Latitude} bottom - A value indicating the southern-most latitude
        * @param {H.geo.Longitude} right - A value indicating the right-most latitude
        */
        constructor(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude): void;

        /**
        * This method clones the given rectangle.
        */
        clone(): H.geo.Rect;

        /**
        * This method retrieves the top-left corner of the given rectangular area.
        */
        getTopLeft(): H.geo.Point;

        /**
        * This method retrieves the bottom-right corner of the given rectangular area.
        */
        getBottomRight(): H.geo.Point;

        /**
        * This method retrieves the north-most latitude of the given rectangular area.
        */
        getTop(): H.geo.Latitude;

        /**
        * This method retrieves the southern-most latitude of the given rectangular area.
        */
        getBottom(): H.geo.Latitude;

        /**
        * This method retrieves the left-most longitude of the given rectangular area.
        */
        getLeft(): H.geo.Longitude;

        /**
        * This method retrieves the right-most longitude of the given rectangular area.
        */
        getRight(): H.geo.Longitude;

        /**
        * This method retrieves the center point of the given rectangular area.
        */
        getCenter(): H.geo.Point;

        /**
        * This method retrieves the width of the given rectangular area in decimal degrees.
        */
        getWidth(): number;

        /**
        * This method retrieves the height of the given rectangular area in decimal degrees.
        */
        getHeight(): number;

        /**
        * This method retrieves a Boolean value indicating whether the given rectangular area spans the date border.
        */
        isCDB(): boolean;

        /**
        * The method checks if the area enclosed by the given bounding box is 0.
        */
        isEmpty(): boolean;

        /**
        * This method checks if the latitude and longitude supplied by the caller lie within the area of the given rectangular area.
        * @param {H.geo.Latitude} lat - A value representing the latitude
        * @param {H.geo.Longitude} lng - A value representing the longitude
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check the validity of the arguments (true)
        */
        containsLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean): boolean;

        /**
        * This method checks if the point supplied by the caller lies within the area of the given rectangular area.
        * @param {H.geo.IPoint} geoPoint - An object representing the point to check
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        containsPoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean): boolean;

        /**
        * This method checks if the rectangular area supplied by the caller is completely contained within the given rectangular area.
        * @param {H.geo.Rect} geoRect - An object representing the rectangular area to check
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        containsRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

        /**
        * This method retrieves the smallest bounding box that covers the given rectangular area and the latitude and longitude supplied by the caller.
        * @param {H.geo.Latitude} lat - A value representing the latitude to check
        * @param {H.geo.Longitude} lng - A value representing the longitude to check
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        * @param {H.geo.Rect} opt_out - An optional rectangle object to store the result
        */
        mergeLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method retrieves the smallest bounding box that covers the given rectangular area and the point supplied by the caller.
        * @param {H.geo.IPoint} geoPoint - An object representing the point to include
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        * @param {H.geo.Rect} opt_out - An optional rectangle object to store the result
        */
        mergePoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method retrieves the smallest bounding box that covers the given rectangle area and the rectangle supplied by the caller.
        * @param {H.geo.Rect} geoRect - An object representing the rectangle to include
        * @param {boolean} opt_skipValidation - A Boolean flag indicating whether to check validity of the arguments (true)
        * @param {H.geo.Rect} opt_out - an optional rectangle object to store the result
        */
        mergeRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method retrieves the smallest bounding box that covers the given rectangle area and the rectangle supplied by the caller as a set of coordinates.
        * @param {H.geo.Latitude} top - A value indicating the top latitude of the rectangle to include
        * @param {H.geo.Longitude} left - A value indicating the left longitude of the rectangle to include
        * @param {H.geo.Latitude} bottom - A value indicating the bottom latitude of the rectangle to include
        * @param {H.geo.Longitude} right - A value indicating the right longitude of the rectangle to include
        * @param {boolean} opt_skipValidation - A Boolean flag indicating whether to check validity of the arguments (true)
        * @param {H.geo.Rect} opt_out - An optional rectangle object to store the result
        */
        mergeTopLeftBottomRight(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method checks if the intersection of two bounding boxes is non-empty.
        * @param {H.geo.Rect} geoRect - An object representing a rectangle object to test for intersection with the given rectangle
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        intersects(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

        /**
        * This method merges two rectangle objects defines by their coordinates. The result of the merge is a bounding rectangle which covers all the provided rectangle bounds.
        * @param {H.geo.Latitude} topA - A value representing the northern-most latitude
        * @param {H.geo.Longitude} leftA - A value representing the left-most longitude of operand A
        * @param {H.geo.Latitude} bottomA - A value representing the southern-most latitude of operand A
        * @param {H.geo.Longitude} rightA - A value representing the right-most latitude of operand A
        * @param {H.geo.Latitude} topB - A value representing the northern-most latitude of operand B
        * @param {H.geo.Longitude} leftB - A value representing the left-most longitude of operand B
        * @param {H.geo.Latitude} bottomB - A value representing the southern-most latitude of operand B
        * @param {H.geo.Longitude} rightB - A value representing the right-most latitude of operand B
        * @param {H.geo.Rect} opt_out - An optional rectangle object to store the results
        */
        static  merge(topA: H.geo.Latitude, leftA: H.geo.Longitude, bottomA: H.geo.Latitude, rightA: H.geo.Longitude, topB: H.geo.Latitude, leftB: H.geo.Longitude, bottomB: H.geo.Latitude, rightB: H.geo.Longitude, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * This method creates a rectangular area from a top-left and bottom-right points provided by the caller.
        * @param {H.geo.IPoint} topLeft - An object representing the top-left corner of the area
        * @param {H.geo.IPoint} bottomRight - An object representing the bottom-right corner of the area
        * @param {boolean} opt_skipValidation - A Boolean flag indicating whether to check validity of the arguments (true)
        */
        static  fromPoints(topLeft: H.geo.IPoint, bottomRight: H.geo.IPoint, opt_skipValidation?: boolean): H.geo.Rect;

        /**
        * This method creates the minimum rectangular area covering all of the points in the array provided by the caller.
        * @param {Array<H.geo.IPoint>} pointArray - An array of points to cover
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        static  coverPoints(pointArray: Array<H.geo.IPoint>, opt_skipValidation?: boolean): H.geo.Rect;

        /**
        * This method creates the minimum rectangular area covering all of the coordinates in the array provided by the caller.
        * @param {Array<number>} latLngAltArray - An array of coordinates to cover
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        static  coverLatLngAlts(latLngAltArray: Array<number>, opt_skipValidation?: boolean): H.geo.Rect | any;

        /**
        * This method creates the smallest rectangular area covering all of the rectangular areas in the array provided by the caller.
        * @param {Array<H.geo.Rect>} rectArray - An array of rectangle objects to cover
        * @param {boolean} opt_skipValidation - A Boolean indicating whether to check validity of the arguments (true)
        */
        static  coverRects(rectArray: Array<H.geo.Rect>, opt_skipValidation?: boolean): H.geo.Rect | any;

        /**
        * This method clones the given bounding rectangle and resizes the clone if necessary until the location supplied by the caller is at its center.
        * @param {H.geo.IPoint} center - A point object which is to be the center of the resized rectangular area
        * @param {H.geo.Rect} opt_out - An optional rectangle object to store the result
        */
        resizeToCenter(center: H.geo.IPoint, opt_out?: H.geo.Rect): H.geo.Rect;

        /**
        * Returns the bounding rectangle of the geometry.
        */
        getBounds(): H.geo.Rect;

        /**
        * Checks whether the geometry is equal to the geometry supplied by the caller. Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
        * @param {any} other - The geometry to check against
        */
        equals(other: any): boolean;

        /**
        * To obtain a Well-Known-Text (WKT) representation of the geometry.
        */
        toString(): string;

    }


    /**
    * Strip - Extends: H.geo.AbstractGeometry
    */
    export class Strip extends H.geo.AbstractGeometry  {

        /**
        * Constructor
        * @param {Array<number>} opt_latLngAlts - An optional array of latitude, longitude and altitude triples to initialize the Strip with.
        * @param {H.geo.AltitudeContext} opt_ctx - An optional altitude context for all altitudes contained in this Strip.
        */
        constructor(opt_latLngAlts?: Array<number>, opt_ctx?: H.geo.AltitudeContext): void;

        /**
        * This method pushes a lat, lng, alt to the end of this Strip.
        * @param {H.geo.Latitude} lat - 
        * @param {H.geo.Longitude} lng - 
        * @param {H.geo.Altitude} alt - 
        */
        pushLatLngAlt(lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude): void;

        /**
        * This method splices the Strip at the provided index, removing the specified number of items at that index and inserting the lat, lng, alt array.
        * @param {number} index - The index at which to splice
        * @param {number} opt_nRemove - The number of lat, lng, alt values to remove
        * @param {Array<number>} opt_latLngAlts - The lat, lng, alt values to add
        */
        spliceLatLngAlts(index: number, opt_nRemove?: number, opt_latLngAlts?: Array<number>): Array<number>;

        /**
        * This method inserts one set of lat, lng, alt values into the Strip at the specified index.
        * @param {number} index - the index at which to add the element
        * @param {H.geo.Latitude} lat - the latitude to insert
        * @param {H.geo.Longitude} lng - the longitude to insert
        * @param {H.geo.Altitude} alt - the altitude to insert
        */
        insertLatLngAlt(index: number, lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude): void;

        /**
        * This method removes one set of lat, lng, alt values from the Strip at the specified index.
        * @param {number} index - 
        */
        removeLatLngAlt(index: number): void;

        /**
        * This method pushes the lat, lng, alt values of a H.geo.Point to the end of this Strip.
        * @param {H.geo.IPoint} geoPoint - 
        */
        pushPoint(geoPoint: H.geo.IPoint): void;

        /**
        * This method inserts the lat, lng, alt values of a H.geo.Point into the list at the specified index.
        * @param {number} pointIndex - 
        * @param {H.geo.IPoint} geoPoint - 
        */
        insertPoint(pointIndex: number, geoPoint: H.geo.IPoint): void;

        /**
        * This method removes one set of lat, lng, alt values from this Strip at the virtual point index specified.
        * @param {number} pointIndex - the virtual point index
        */
        removePoint(pointIndex: number): void;

        /**
        * This method extracts a H.geo.Point from this Strip at the virtual point index. If the extracted point has an alt value, the Strip's altitude context will be supplied to the point.
        * @param {number} pointIndex - the virtual point index in the Strip
        * @param {H.geo.Point} opt_out - an optional point object to store the lat, lng, alt values
        */
        extractPoint(pointIndex: number, opt_out?: H.geo.Point): H.geo.Point;

        /**
        * Example
        * @param {Function} eachFn - The function to invoke for every point. It gets the point's latitude, longitude, altitude and index as arguments.
        * @param {number} opt_start - The point's start index (inclusive) to iterate from, defaults to 0.
        * @param {number} opt_end - The point's end index (exclusive) to iterate to, defaults to Infinity.
        */
        eachLatLngAlt(eachFn: Function, opt_start?: number, opt_end?: number): void;

        /**
        * This method checks whether two longitudes form a leg which crosses the date border.
        * @param {H.geo.Longitude} lng1 - the start longitude of the leg
        * @param {H.geo.Longitude} lng2 - the end longitude of the leg
        */
        static  isDBC(lng1: H.geo.Longitude, lng2: H.geo.Longitude): boolean;

        /**
        * This method returns the number of times that legs in this Strip cross the date border.
        * @param {boolean} opt_closed - indicates whether the Strip is closed (i.e. whether the Strip's last and first coordinates form the closing leg of a polygon)
        */
        getDBCs(opt_closed?: boolean): number;

        /**
        * This method return the number of points stored in this Strip.
        */
        getPointCount(): number;

        /**
        * Returns the vertices of the line segments as an array of alternating latitude, longitude and altitude coordinates. The returned array must be treated as read-only to not violate the integrity of the strip.
        */
        getLatLngAltArray(): Array<number>;

        /**
        * Note: The Strip is treated as an open path. If the bounding rectangle for a closed shape is required, the closing leg must be merged in an extra step.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method initializes a new Strip with an array of lat, lng values. Arrays are expected to have an even length with the format [lat, lng, lat, lng, ...].
        * @param {Array<number>} latLngs - the array of lat, lng value.
        */
        static  fromLatLngArray(latLngs: Array<number>): H.geo.Strip;

        /**
        * Checks whether the geometry is equal to the geometry supplied by the caller. Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
        * @param {any} other - The geometry to check against
        */
        equals(other: any): boolean;

        /**
        * To obtain a Well-Known-Text (WKT) representation of the geometry.
        */
        toString(): string;

    }


}


/**
* Namespace: H.lang
**/
declare namespace H.lang {
    /**
    * IllegalOperationError - This class encapsulates an error to throw on an illegal operation.
    */
    export class IllegalOperationError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {any} opt_message - The text of the error message to output
        */
        constructor(opt_caller?: Function, opt_message?: any): void;

    }


    /**
    * InvalidArgumentError - This class encapsulates an error to throw if an argument is invalid.
    */
    export class InvalidArgumentError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {number} opt_argNr - The index of the invalid argument (zero based)
        * @param {any} opt_message - The text of the error message to output
        */
        constructor(opt_caller?: Function, opt_argNr?: number, opt_message?: any): void;

    }


    /**
    * OutOfRangeError - This class encapsulates information about an error to throw if the value supplied by the caller is out of range.
    */
    export class OutOfRangeError {

        /**
        * Constructor
        * @param {Function} opt_caller - The calling function
        * @param {number} opt_val - The value to check against the range specified by opt_range
        * @param {Array<number>} opt_range - Values defining the validity range (as [min, max])
        */
        constructor(opt_caller?: Function, opt_val?: number, opt_range?: Array<number>): void;

    }


}


/**
* Namespace: H.map
**/
declare namespace H.map {
    /**
    * AbstractMarker - The abstract base class for markers. A Marker is a visual representation of locations on a map in the form of an icon. Markers are rendered in screen space, that is although a marker is fixed to its geographic location, its icon is always rendered independently of the map's zoom level.
    */
    export class AbstractMarker extends H.map.Object  {

        /**
        * Constructor
        * @param {H.geo.IPoint | H.geo.MultiPoint} geometry - The geographic location(s) of the marker
        * @param {H.map.AbstractMarker.Options} opt_options - The options to initialize the marker
        */
        constructor(geometry: H.geo.IPoint | H.geo.MultiPoint, opt_options?: H.map.AbstractMarker.Options): void;

        /**
        * Returns the geographic position. The returned point must be treated as read-only to not violate the integrity of the marker.
        */
        getPosition(): H.geo.Point;

        /**
        * Sets the geographic position. The passed point must be treated as read-only to not violate the integrity of the marker.
        * @param {H.geo.IPoint} position - An object containing the geographic coordinates of the location marked by the marker
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * To obtain the marker's location(s). If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the marker.
        */
        getGeometry(): H.geo.Point | H.geo.MultiPoint;

        /**
        * To Set the marker's geographic location(s). If you modify the given geometry afterwards, you must call setGeometry(geometry) again to not violate the integrity of the marker.
        * @param {H.geo.IPoint | H.geo.MultiPoint} geometry - 
        */
        setGeometry(geometry: H.geo.IPoint | H.geo.MultiPoint): H.map.AbstractMarker;

        /**
        * This method retrieves the current icon associated with the given marker.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * This method sets the marker icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * ArrowStyle - This class represents style attributes for arrows to be rendered along a polyline. An instance of ArrowStyle is always treated as immutable to avoid inconsistencies and must not modified.
    */
    export class ArrowStyle {

        /**
        * Constructor
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_options - An object containing initialization options
        */
        constructor(opt_options?: H.map.ArrowStyle | H.map.ArrowStyle.Options): void;

        /**
        * This method checks value-equality between the given object and an instance of ArrowStyle provided by the caller.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} other - The arrow style object with which to compare the given object
        */
        equals(other: H.map.ArrowStyle | H.map.ArrowStyle.Options): boolean;

    }


    /**
    * ChangeEvent - This event signalizes map-related changes.
    */
    export class ChangeEvent extends H.util.ChangeEvent  {

        /**
        * @var {number} FOV-This modifier indicate a change to the "fov" property.
        */
        FOV: number;

        /**
        * @var {number} PITCH-This modifier indicates a change to the "pitch" property.
        */
        PITCH: number;

        /**
        * @var {number} POSITION-This modifier indicates a change to the "position" property.
        */
        POSITION: number;

        /**
        * @var {number} ROLL-This modifier indicates a change to the "roll" property.
        */
        ROLL: number;

        /**
        * @var {number} SIZE-This modifier indicates a change to the "roll" property.
        */
        SIZE: number;

        /**
        * @var {number} YAW-This modifier indicates a change to the "yaw" property.
        */
        YAW: number;

        /**
        * @var {number} ZOOM-This modifier indicates a change to the "zoom" property.
        */
        ZOOM: number;

        /**
        * @var {any} target-This property holds the object which triggered the event.
        */
        target: any;

        /**
        * @var {any} currentTarget-This property holds an object that receives notification of the event (via an attached listener).
        */
        currentTarget: any;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds indicates if preventDefault was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * @var {number} CAPTURING_PHASE-This property identifies the current event phase as the capturing phase.
        */
        CAPTURING_PHASE: number;

        /**
        * @var {number} AT_TARGET-This property indicates that the event is being evaluated at the target.
        */
        AT_TARGET: number;

        /**
        * @var {number} BUBBLING_PHASE-This property identifies the current event phase as the bubbling phase.
        */
        BUBBLING_PHASE: number;

        /**
        * @var {number} eventPhase-This property indicates which phase of the event flow is being evaluated.
        */
        eventPhase: number;

        /**
        * Constructor
        * @param {string} type - The type of the event
        * @param {Object} newValue - The view values after the change
        * @param {Object} oldValue - The view values before the change
        * @param {H.math.BitMask} modifiers - A bitmask indicating which values were changed. See properties FOV, PITCH, POSITION, ROLL, SIZE, YAW and ZOOM for the meaning of the bits.
        */
        constructor(type: string, newValue: Object, oldValue: Object, modifiers: H.math.BitMask): void;

        /**
        * This method sets a flag that can be used to prevent the default behavior when the even is fired.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the event.
        */
        stopPropagation(): void;

    }


    /**
    * Circle - A Circle is a visual representation of a circular shaped surface on a map.
    */
    export class Circle extends H.map.Polygon  {

        /**
        * Constructor
        * @param {H.geo.IPoint} center - The geographical coordinates of the center of the circle
        * @param {number} radius - The radius of the circle in meters
        * @param {H.map.Circle.Options} opt_options - An object that specifies the initialization options of the circle (among these, precision has a significant impact on the shape of the circle - please see H.map.Circle.Options
        */
        constructor(center: H.geo.IPoint, radius: number, opt_options?: H.map.Circle.Options): void;

        /**
        * This method sets the geographical center of the circle. If the specified center is an instance of H.geo.Point, you must not modify it without calling setCenter() immediately afterwards.
        * @param {H.geo.IPoint} center - An object defining the geographical coordinates of the center of the circle
        */
        setCenter(center: H.geo.IPoint): void;

        /**
        * This method retrieves the center of the circle. You must not modify the returned object without calling without calling setCenter() immediately afterwards.
        */
        getCenter(): H.geo.IPoint;

        /**
        * This method sets the length of the radius of the circle in meters. The value is restricted to the range of [0 ... 20015089.27787877] (half of WGS84 mean circumference).
        * @param {number} radius - 
        */
        setRadius(radius: number): void;

        /**
        * This method retrieves the length of the radius of the circle in meters.
        */
        getRadius(): number;

        /**
        * This method sets the precision of the circle (see H.map.Circle.Options#precision).
        * @param {number} precision - A value indicating precision
        */
        setPrecision(precision: number): void;

        /**
        * This method retrieves the precision of the given circle.
        */
        getPrecision(): number;

        /**
        * To obtain the polygon's geometry. If you modify the obtained geometry, you must call setGeometry afterwards to not violate the integrity of the polygon.
        */
        getGeometry(): H.geo.Polygon | H.geo.MultiPolygon;

        /**
        * To set the polygon's geometry. If the given geometry is modified afterwards, it must be set via setGeometry again to not violate the integrity of the polygon.
        * @param {H.geo.Polygon | H.geo.MultiPolygon} geometry - 
        */
        setGeometry(geometry: H.geo.Polygon | H.geo.MultiPolygon): H.map.Polygon;

        /**
        * To specify whether this polygon covers the North or the South Pole. This information is only needed for very special Polygons whose geometry is defined as a line string around the world on longitude axis (for example along the coast of the Antarctic). In such cases, an additional information is needed to know if the southern part (Antarctic) or the northern part (anything except Antarctic) should be covered. Be aware, that this deprecated method has no effect if the current geometry is a MultiPolygon.
        * @param {boolean} flag - A value of true means it covers the North Pole, false means the South Pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * To obtain whether this polygon covers the North or the South Pole. See H.map.Polygon#setNorthPoleCovering for more details.
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips the given polygon to a rectangular area. The method takes polygons crossing the International Date Line into account to duplicate the shape in the returned list of intersecting line-strings.
        * @param {H.geo.Rect} geoRect - The rectangular area to which to clip the polygon
        * @param {H.geo.PixelProjection} projection - A projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * Returns the geometry.
        */
        getStrip(): H.geo.Strip;

        /**
        * Sets the geometry.
        * @param {H.geo.Strip} strip - The strip which represents geometry.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * DataModel - This class represents the data model of the map. It holds a list of layers that are rendered by map's RenderEngine. The class listens to update events from layers and dispatches them to the RenderEngine.
    */
    export class DataModel extends H.util.OList  {

        /**
        * Constructor
        * @param {Array<any>} opt_layers - An array of layers to be added to the data model
        */
        constructor(opt_layers?: Array<any>): void;

        /**
        * This method adds a layer to the data model, ensuring that layers are displayed on the map following the order in which they were added.
        * @param {H.map.layer.Layer} layer - The Layer to add
        * @param {number} opt_idx - index The index at which the new element should be inserted
        */
        add(layer: H.map.layer.Layer, opt_idx?: number): void;

        /**
        * This method sets (replaces) a layer at the index specified by the caller.
        * @param {number} idx - The index at which to set the layer
        * @param {H.map.layer.Layer} layer - A layer object to set
        */
        set(idx: number, layer: H.map.layer.Layer): H.map.layer.Layer;

        /**
        * This method removes layer with the given index. This will effectively remove the layer from the map.
        * @param {number} idx - index of the layer to be removed
        */
        removeAt(idx: number): H.map.layer.Layer;

        /**
        * This method removes a layer, which means that the layer is removed from the map.
        * @param {H.map.layer.Layer} layer - The layer to be removed
        */
        remove(layer: H.map.layer.Layer): boolean;

        /**
        * This method removes all layers from the data model.
        */
        flush(): void;

        /**
        * This method retrieves the index of the first object in this list that is identical to the object supplied by the caller.
        * @param {any} entry - The entry for which to return the index
        */
        indexOf(entry: any): number;

        /**
        * This method retrieves the entry at the specified index.
        * @param {number} idx - The index of the entry to get, a negative index is treated as relative from the end of the list
        */
        get(idx: number): any;

        /**
        * This method retrieves the length of the list.
        */
        getLength(): number;

        /**
        * This method retrieves all the entries held in the list as an array.
        */
        asArray(): Array<any>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * DomIcon - This class provides a visual representation of a H.map.DomMarker.
    */
    export class DomIcon {

        /**
        * Constructor
        * @param {Element | string} element - The element or markup to use for this icon
        * @param {H.map.DomIcon.Options} opt_options - An object containing configuration properties
        */
        constructor(element: Element | string, opt_options?: H.map.DomIcon.Options): void;

    }


    /**
    * DomMarker - A DomMarker is a visual representation of a location on a map in the form of a fully styleable and scripteable DOM element.
    */
    export class DomMarker extends H.map.AbstractMarker  {

        /**
        * Constructor
        * @param {H.geo.IPoint | H.geo.MultiPoint} position - The geographic location(s) of the marker
        * @param {H.map.DomMarker.Options} opt_options - The options to initialize the marker
        */
        constructor(position: H.geo.IPoint | H.geo.MultiPoint, opt_options?: H.map.DomMarker.Options): void;

        /**
        * Returns the geographic position. The returned point must be treated as read-only to not violate the integrity of the marker.
        */
        getPosition(): H.geo.Point;

        /**
        * Sets the geographic position. The passed point must be treated as read-only to not violate the integrity of the marker.
        * @param {H.geo.IPoint} position - An object containing the geographic coordinates of the location marked by the marker
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * To obtain the marker's location(s). If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the marker.
        */
        getGeometry(): H.geo.Point | H.geo.MultiPoint;

        /**
        * To Set the marker's geographic location(s). If you modify the given geometry afterwards, you must call setGeometry(geometry) again to not violate the integrity of the marker.
        * @param {H.geo.IPoint | H.geo.MultiPoint} geometry - 
        */
        setGeometry(geometry: H.geo.IPoint | H.geo.MultiPoint): H.map.AbstractMarker;

        /**
        * This method retrieves the current icon associated with the given marker.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * This method sets the marker icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * GeoShape - A GeoShape is the abstract base class for visual representation of two-dimensional geographical objects whose shape is defined by a H.geo.AbstractGeometry.
    */
    export class GeoShape extends H.map.Spatial  {

        /**
        * Constructor
        * @param {boolean} isClosed - Indicates whether the geographical shape is closed (a polygon)
        * @param {H.map.Spatial.Options} options - The initialization options (attributes) to apply
        */
        constructor(isClosed: boolean, options: H.map.Spatial.Options): void;

        /**
        * Returns the geometry.
        */
        getStrip(): H.geo.Strip;

        /**
        * Sets the geometry.
        * @param {H.geo.Strip} strip - The strip which represents geometry.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Group - A group is a container for other map objects. Its visibility, zIndex and object-order affect the contained map objects.
    */
    export class Group extends H.map.Object  {

        /**
        * Constructor
        * @param {H.map.Group.Options} opt_options - An optional object containing initialization values
        */
        constructor(opt_options?: H.map.Group.Options): void;

        /**
        * 
        * @param {Function} callback - 
        * @param {boolean} opt_recursive - A Boolean value indicating whether sub-groups should be traversed recursively
        * @param {any} opt_context - The context to use as "this" within the callback
        */
        forEach(callback: Function, opt_recursive?: boolean, opt_context?: any): void;

        /**
        * This method retrieves a list of all objects of this group. On groups with many children this method can cause a higher memory and CPU consumption. Alternatively you case use H.map.Group#forEach
        * @param {boolean} opt_recursive - Indicates whether objects in sub-groups are also collected .
        */
        getObjects(opt_recursive?: boolean): Object;

        /**
        * This method retrieves the bounding rectangle for the group. The rectangle is the smallest rectangle that covers all objects. If the group does not contain any objects, the method returns null.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method adds an object to the group.
        * @param {Object} object - 
        */
        addObject(object: Object): Object;

        /**
        * This method appends a list of objects to the given group.
        * @param {Object} objects - 
        */
        addObjects(objects: Object): void;

        /**
        * This method removes an object from the group.
        * @param {Object} object - The object to remove
        */
        removeObject(object: Object): Object;

        /**
        * This method removes objects from the group.
        * @param {Object} objects - A list of objects to remove
        */
        removeObjects(objects: Object): void;

        /**
        * This method removes all objects from the group.
        */
        removeAll(): void;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * HitArea - This class represents an area that objects, such as a marker, occupy in the screen space. Such objects can be probed and returned by H.Map@getObjectsAt method.
    */
    export class HitArea {

        /**
        * Constructor
        * @param {H.map.HitArea.ShapeType} shapeType - The shape type of the HitArea
        * @param {Array<number>} opt_values - The type-dependent values to define the shape of the hit area. The format for the different types are:
        */
        constructor(shapeType: H.map.HitArea.ShapeType, opt_values?: Array<number>): void;

    }


    /**
    * IControl - This interface defines methods used for direct view or camera manipulation.
    */
    export interface IControl {

        /**
        * This method starts control action for a camera. It makes it possible to control camera animation and movement according to the values provided through the the method H.map.IControl#control.
        * @param {H.util.kinetics.IKinetics} opt_kinetics - Kinetics settings
        * @param {number} opt_atX - The x screen coordinate at which control starts
        * @param {number} opt_atY - The y screen coordinate at which control starts
        */
        startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number): void;

        /**
        * This method triggers single control action on engine. This will trigger an animation which will start modification of the view's or camera's properties according to values begin set. Modification will occur at every frame. The speed values are measure by 'levels per frame' were 1 level cooresponds to a distance to next zoom level.
        * @param {number} moveX - moves the view/cam in right/left direction
        * @param {number} moveY - moves the view/cam in bottom/top direction
        * @param {number} moveZ - moves the view/cam in depth direction (changes zoom level)
        * @param {number} angleX - A value indicating the angle of rotation around the x-axis as degrees per second
        * @param {number} angleY - A value indicating the angle of rotation around the y-axis as degrees per second
        * @param {number} angleZ - A value indicating the angle of rotation around the z-axis as degrees per second
        * @param {number} zoom - changes current zoom level (for view works as moveZ)
        * @param {number} opt_timestamp - 
        */
        control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, zoom: number, opt_timestamp?: number): void;

        /**
        * Example
        * @param {boolean} opt_preventKinetics - A value indicating whether to prevent kinetics animation true or not false
        * @param {Function} opt_adjustView - user defined function which can adjust the final view this function takes last requestedData from the view model and should return a modified H.map.ViewModel.CameraData which will be set as the final view
        */
        endControl(opt_preventKinetics?: boolean, opt_adjustView?: Function): void;

    }


    /**
    * ICopyright - This interface defines the elements of a copyright note.
    */
    export interface ICopyright {

        /**
        * @var {string} label-This property represents a copyright label, a short textual representation of the copyright note, for example "DigitalGlobe 2009".
        */
        label: string;

        /**
        * @var {string} alt-This property represents the detailed textual representation of a copyright note, for example "copyright 2009 DigitalGlobe, Inc."
        */
        alt: string;

    }


    /**
    * IInteraction - This interface represents an interaction with the view port. Interaction reflects view changes, depending on the interaction coordinates and the modifiers which specify the type of interaction.
    */
    export interface IInteraction {

        /**
        * This method starts an interaction with the view port. It should be called every time when a new interaction is started, for example on mouse grab or touch start.
        * @param {H.math.BitMask} modifiers - Specifies what operations should performed during every interaction
        * @param {H.util.kinetics.IKinetics} opt_kinetics - Specifies the kinetic move at the end of interaction
        */
        startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void;

        /**
        * This method resolves direct screen (view port) interaction. It modifies the current view using the arguments provided by the caller.
        * @param {number} x - viewport x coordinate
        * @param {number} y - viewport y coordinate
        * @param {number} opt_bx - x coordinate for second pointer/touch if present
        * @param {number} opt_by - y coordinate for second pointer/touch if present
        * @param {number} opt_timestamp - The known timestamp to use
        */
        interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number): void;

        /**
        * This method ends the interaction and applies a kinetic movement, if it was defined by using the method startInteraction().
        * @param {boolean} opt_preventKinetics - A Boolean value indicating whether to prevent kinetic behaviour at the end of an interaction (true) or allow it (false)
        */
        endInteraction(opt_preventKinetics?: boolean): void;

    }


    /**
    * Icon - A visual representation of the H.map.Marker.
    */
    export class Icon extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - An image URL, an SVG (string), an bitmap image or a canvas.
        * @param {H.map.Icon.Options} opt_options - an object containing icon initialization attributes such as width and height, etc.
        */
        constructor(bitmap: string | HTMLImageElement | HTMLCanvasElement, opt_options?: H.map.Icon.Options): void;

        /**
        * Retrieves the bitmap loading state of the given icon object.
        */
        getState(): H.map.Icon.State;

        /**
        * Retrieves the bitmap of the give icon or null if the bitmap is not yet ready (see H.map.Icon#getState)
        */
        getBitmap(): HTMLImageElement | HTMLCanvasElement;

        /**
        * Retrieves the size of the given icon or null if a size was not specified in the constructor options and the state of the icon is not H.map.Icon.prototype.State.READY
        */
        getSize(): H.math.Size;

        /**
        * Retrieves the anchor point of the given icon or null if an anchor was not specified in the constructor options and the state of this icon is not H.map.Icon.prototype.State.READY.
        */
        getAnchor(): H.math.Point;

        /**
        * Retrieves the hit area of the icon.
        */
        getHitArea(): H.map.HitArea;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Imprint - This class encapsulates the brand, copyright and terms of use information displayed on the map.
    */
    export class Imprint extends H.util.Disposable  implements H.util.ICapturable  {

        /**
        * Constructor
        * @param {H.Map} map - The map object with which the imprint information is associated
        * @param {H.map.Imprint.Options} opt_options - The configuration options for the imprint information
        */
        constructor(map: H.Map, opt_options?: H.map.Imprint.Options): void;

        /**
        * This method sets the imprint options. If the argument opt_options is not defined, then all values are reset to defaults.
        * @param {H.map.Imprint.Options} opt_options - The options to style the imprint
        */
        setOptions(opt_options?: H.map.Imprint.Options): void;

        /**
        * This method retrieves the copyright string for the current view of the map.
        */
        getCopyrights(): string;

        /**
        * This method gets the CSS style declaration of the imprint DOM element.
        */
        getStyle(): CSSStyleDeclaration;

        /**
        * Method adds "Terms of use" L11N string to the available collection.
        * @param {string} tag - IETF language tag
        * @param {string} value - localisation string
        */
        addL11NString(tag: string, value: string): void;

        /**
        * This method adds a callback which to be triggered when an object is disposed.
        * @param {Function} callback - A callback function to add
        * @param {Object} opt_scope - An object representing the scope
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

        /**
        * This method is used to capture the element view.
        * @param {HTMLCanvasElement} canvas - The HTML Canvas element to draw the view of the capturable element
        * @param {number} pixelRatio - The pixel ratio to use for over-sampling for high-resolution displays, the default is 1
        * @param {Function} callback - A callback function to call once the result of capture is ready
        * @param {Function} opt_errback - A callback function to call if error occurred during capture
        */
        capture(canvas: HTMLCanvasElement, pixelRatio: number, callback: Function, opt_errback?: Function): void;

    }


    /**
    * Marker - A Marker is a visual representation of a location on a map in the form of a static bitmap icon.
    */
    export class Marker extends H.map.AbstractMarker  {

        /**
        * Constructor
        * @param {H.geo.IPoint | H.geo.MultiPoint} position - The geographic location(s) of the marker
        * @param {H.map.Marker.Options} opt_options - The options to initialize the marker
        */
        constructor(position: H.geo.IPoint | H.geo.MultiPoint, opt_options?: H.map.Marker.Options): void;

        /**
        * Returns the geographic position. The returned point must be treated as read-only to not violate the integrity of the marker.
        */
        getPosition(): H.geo.Point;

        /**
        * Sets the geographic position. The passed point must be treated as read-only to not violate the integrity of the marker.
        * @param {H.geo.IPoint} position - An object containing the geographic coordinates of the location marked by the marker
        */
        setPosition(position: H.geo.IPoint): H.map.AbstractMarker;

        /**
        * To obtain the marker's location(s). If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the marker.
        */
        getGeometry(): H.geo.Point | H.geo.MultiPoint;

        /**
        * To Set the marker's geographic location(s). If you modify the given geometry afterwards, you must call setGeometry(geometry) again to not violate the integrity of the marker.
        * @param {H.geo.IPoint | H.geo.MultiPoint} geometry - 
        */
        setGeometry(geometry: H.geo.IPoint | H.geo.MultiPoint): H.map.AbstractMarker;

        /**
        * This method retrieves the current icon associated with the given marker.
        */
        getIcon(): H.map.Icon | H.map.DomIcon;

        /**
        * This method sets the marker icon.
        * @param {H.map.Icon | H.map.DomIcon} icon - The new marker icon
        */
        setIcon(icon: H.map.Icon | H.map.DomIcon): H.map.AbstractMarker;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Object - An Object is the abstract base class for visual representational objects on a map, such as polylines, polygons, markers, groups, overlays, etc.
    */
    export class Object extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {Object} opt_options - An object containing the initialization values for the given object
        */
        constructor(opt_options?: Object): void;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the z-order of two objects. It can be useful when sorting a list of objects using the sort() method on Array
        * @param {Object} first - The first object to compare
        * @param {Object} second - The second object to compare
        */
        static  compareZOrder(first: Object, second: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Overlay - A Overlay is a visual representation of a rectangular area on a map in the form of a bitmap. Overlays are rendered in projected geographical space.
    */
    export class Overlay extends H.map.Object  {

        /**
        * Constructor
        * @param {H.geo.Rect} bounds - A rectangular area of the overlay defined in terms of the geographical coordinates of its top-left and bottom-right corners.
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - An image URL, an SVG image (markup), a bitmap image or a canvas.
        * @param {H.map.Overlay.Options} opt_options - Initialization values for the overlay (optional)
        */
        constructor(bounds: H.geo.Rect, bitmap: string | HTMLImageElement | HTMLCanvasElement, opt_options?: H.map.Overlay.Options): void;

        /**
        * This method retrieves the current bound of the overlay.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method sets the bounds of the overlay.
        * @param {H.geo.Rect} bounds - An object containing the coordinates of the top-left and bottom-right corners of the overlay.
        */
        setBounds(bounds: H.geo.Rect): H.map.Overlay;

        /**
        * This method retrieves the current bitmap of the overlay.
        */
        getBitmap(): HTMLImageElement | HTMLCanvasElement;

        /**
        * This method sets the bitmap for the given overlay.
        * @param {string | HTMLImageElement | HTMLCanvasElement} bitmap - An image URL, an SVG image (markup), a bitmap image, or a canvas.
        * @param {boolean} opt_crossOrigin - Specifies whether to use anonymous Cross-Origin Resource Sharing (CORS) when fetching an image to prevent the resulting canvas from tainting, the default is false. The option is ignored by IE9-10.
        */
        setBitmap(bitmap: string | HTMLImageElement | HTMLCanvasElement, opt_crossOrigin?: boolean): H.map.Overlay;

        /**
        * This method retrieves the opacity of the overlay.
        */
        getOpacity(): number;

        /**
        * This method sets the opacity of the overlay.
        * @param {number} opacity - A value representing opacity; must be in the range from 0 (transparent) to 1 (opaque).
        */
        setOpacity(opacity: number): H.map.Overlay;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Polygon - A Polygon is a visual representation of a surface on a map.
    */
    export class Polygon extends H.map.GeoShape  {

        /**
        * Constructor
        * @param {H.geo.LineString | H.geo.Polygon | H.geo.MultiPolygon | H.geo.Strip} geometry - The geometry that defines the surface of the polygon. H.geo.LineString is interpreted as an exterior ring of H.geo.Polygon object.
        * @param {H.map.Spatial.Options} opt_options - An optional object containing initialization parameters
        */
        constructor(geometry: H.geo.LineString | H.geo.Polygon | H.geo.MultiPolygon | H.geo.Strip, opt_options?: H.map.Spatial.Options): void;

        /**
        * To obtain the polygon's geometry. If you modify the obtained geometry, you must call setGeometry afterwards to not violate the integrity of the polygon.
        */
        getGeometry(): H.geo.Polygon | H.geo.MultiPolygon;

        /**
        * To set the polygon's geometry. If the given geometry is modified afterwards, it must be set via setGeometry again to not violate the integrity of the polygon.
        * @param {H.geo.Polygon | H.geo.MultiPolygon} geometry - 
        */
        setGeometry(geometry: H.geo.Polygon | H.geo.MultiPolygon): H.map.Polygon;

        /**
        * To specify whether this polygon covers the North or the South Pole. This information is only needed for very special Polygons whose geometry is defined as a line string around the world on longitude axis (for example along the coast of the Antarctic). In such cases, an additional information is needed to know if the southern part (Antarctic) or the northern part (anything except Antarctic) should be covered. Be aware, that this deprecated method has no effect if the current geometry is a MultiPolygon.
        * @param {boolean} flag - A value of true means it covers the North Pole, false means the South Pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * To obtain whether this polygon covers the North or the South Pole. See H.map.Polygon#setNorthPoleCovering for more details.
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips the given polygon to a rectangular area. The method takes polygons crossing the International Date Line into account to duplicate the shape in the returned list of intersecting line-strings.
        * @param {H.geo.Rect} geoRect - The rectangular area to which to clip the polygon
        * @param {H.geo.PixelProjection} projection - A projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * Returns the geometry.
        */
        getStrip(): H.geo.Strip;

        /**
        * Sets the geometry.
        * @param {H.geo.Strip} strip - The strip which represents geometry.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Polyline - A Polyline is a visual representation of connected line segments on a map.
    */
    export class Polyline extends H.map.GeoShape  {

        /**
        * Constructor
        * @param {H.geo.Strip | H.geo.LineString | H.geo.MultiLineString} geometry - The geometry that defines the line segments of the polyline
        * @param {H.map.Polyline.Options} opt_options - An optional object that contains the configuration options for a polyline
        */
        constructor(geometry: H.geo.Strip | H.geo.LineString | H.geo.MultiLineString, opt_options?: H.map.Polyline.Options): void;

        /**
        * To set the polyline's geometry. If the given geometry is modified afterwards, it must be set again via setGeometry(geometry) to not violate the integrity of the polyline.
        * @param {H.geo.LineString | H.geo.MultiLineString} geometry - the geometry to set.
        */
        setGeometry(geometry: H.geo.LineString | H.geo.MultiLineString): H.map.Polyline;

        /**
        * To obtain the polyline's geometry. If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the polyline.
        */
        getGeometry(): H.geo.LineString | H.geo.MultiLineString;

        /**
        * Clips the geometry of the Polyline to a rectangular area
        * @param {H.geo.Rect} geoRect - The rectangle to clip against.
        */
        clip(geoRect: H.geo.Rect): Array<Array<number>>;

        /**
        * Returns the geometry.
        */
        getStrip(): H.geo.Strip;

        /**
        * Sets the geometry.
        * @param {H.geo.Strip} strip - The strip which represents geometry.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Rect - A Rect is a visual representation of a rectangular shaped surface on a map.
    */
    export class Rect extends H.map.Polygon  {

        /**
        * Constructor
        * @param {H.geo.Rect} bounds - The geographical bounding box for the rectangle
        * @param {H.map.Spatial.Options} opt_options - An object containing configuration options.
        */
        constructor(bounds: H.geo.Rect, opt_options?: H.map.Spatial.Options): void;

        /**
        * This method sets the bounds of the given rectangle.
        * @param {H.geo.Rect} bounds - A rectangle defining the bounds for the rectangle
        */
        setBounds(bounds: H.geo.Rect): void;

        /**
        * To obtain the polygon's geometry. If you modify the obtained geometry, you must call setGeometry afterwards to not violate the integrity of the polygon.
        */
        getGeometry(): H.geo.Polygon | H.geo.MultiPolygon;

        /**
        * To set the polygon's geometry. If the given geometry is modified afterwards, it must be set via setGeometry again to not violate the integrity of the polygon.
        * @param {H.geo.Polygon | H.geo.MultiPolygon} geometry - 
        */
        setGeometry(geometry: H.geo.Polygon | H.geo.MultiPolygon): H.map.Polygon;

        /**
        * To specify whether this polygon covers the North or the South Pole. This information is only needed for very special Polygons whose geometry is defined as a line string around the world on longitude axis (for example along the coast of the Antarctic). In such cases, an additional information is needed to know if the southern part (Antarctic) or the northern part (anything except Antarctic) should be covered. Be aware, that this deprecated method has no effect if the current geometry is a MultiPolygon.
        * @param {boolean} flag - A value of true means it covers the North Pole, false means the South Pole
        */
        setNorthPoleCovering(flag: boolean): H.map.Polygon;

        /**
        * To obtain whether this polygon covers the North or the South Pole. See H.map.Polygon#setNorthPoleCovering for more details.
        */
        getNorthPoleCovering(): boolean;

        /**
        * This method clips the given polygon to a rectangular area. The method takes polygons crossing the International Date Line into account to duplicate the shape in the returned list of intersecting line-strings.
        * @param {H.geo.Rect} geoRect - The rectangular area to which to clip the polygon
        * @param {H.geo.PixelProjection} projection - A projection to use for bounding box padding
        */
        clip(geoRect: H.geo.Rect, projection: H.geo.PixelProjection): Array<Array<number>>;

        /**
        * Returns the geometry.
        */
        getStrip(): H.geo.Strip;

        /**
        * Sets the geometry.
        * @param {H.geo.Strip} strip - The strip which represents geometry.
        */
        setStrip(strip: H.geo.Strip): H.map.GeoShape;

        /**
        * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
        */
        getBounds(): H.geo.Rect;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Spatial - A Spatial is the abstract base class for visual representation of two-dimensional geographical objects.
    */
    export class Spatial extends H.map.Object  {

        /**
        * Constructor
        * @param {boolean} isClosed - Indicates whether this spatial object represents a closed shape (true) or not (false)
        * @param {H.map.Spatial.Options} opt_options - The configuration options to apply
        */
        constructor(isClosed: boolean, opt_options?: H.map.Spatial.Options): void;

        /**
        * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getStyle(): H.map.SpatialStyle;

        /**
        * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle, it is treated as immutable and must not be modified afterwards to prevent inconsistencies! .
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
        */
        setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

        /**
        * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined. The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
        */
        getArrows(): H.map.ArrowStyle | any;

        /**
        * This method sets the arrow style of the given spatial object.
        * @param {H.map.ArrowStyle | H.map.ArrowStyle.Options} opt_arrows - The arrow style to be applied
        */
        setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

        /**
        * This method indicates whether this spatial object represents a closed shape.
        */
        isClosed(): boolean;

        /**
        * This method retrieves the ID of the given object.
        */
        getId(): any;

        /**
        * This method sets the visibility of the given object.
        * @param {boolean} opt_visibility - Indicates whether the map object should be visible.
        */
        setVisibility(opt_visibility?: boolean): Object;

        /**
        * This method retrieves a value indicating the visibility of the given object.
        * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
        */
        getVisibility(opt_effective?: boolean): boolean;

        /**
        * This method retrieves the z-index of the given object.
        */
        getZIndex(): number | any;

        /**
        * This method sets the z-index of the given object.
        * @param {number | any} zIndex - A value indicating the new z-index
        */
        setZIndex(zIndex: number | any): Object;

        /**
        * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
        * @param {Object} other - The map object with which to compare the given object.
        */
        compareZOrder(other: Object): number;

        /**
        * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
        */
        getParentGroup(): H.map.Group;

        /**
        * The root object to which the given object is attached or the object itself if it is not attached to another.
        */
        getRootGroup(): Object;

        /**
        * This method checks whether the received object is an inclusive descendant of the given object.
        * @param {any} object - The object to check.
        */
        contains(object: any): boolean;

        /**
        * This method obtains the current provider of the given object.
        */
        getProvider(): Object;

        /**
        * This method retrieves the invalidation states for the given object.
        */
        getInvalidations(): H.map.provider.Invalidations;

        /**
        * This method invalidates the given map object.
        * @param {H.math.BitMask} flags - The flags indicating the types of changes to the given object
        */
        invalidate(flags: H.math.BitMask): boolean;

        /**
        * This method retrieves previously stored arbitrary data from the given object.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given map object.
        * @param {any} data - The data to be stored
        */
        setData(data: any): Object;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * SpatialStyle - This class represents a style with which spatial objects such as polylines and polygons are drawn. A SpatialStyle instance is always treated as immutable to avoid inconsistencies and must not modified.
    */
    export class SpatialStyle {

        /**
        * @var {string} strokeColor-The color of the stroke in CSS syntax, the default is 'rgba(0, 85, 170, 0.6)'.
        */
        strokeColor: string;

        /**
        * @var {string} fillColor-The filling color in CSS syntax, the default is 'rgba(0, 85, 170, 0.4)'.
        */
        fillColor: string;

        /**
        * @var {number} lineWidth-The width of the line in pixels, the default is 2.
        */
        lineWidth: number;

        /**
        * @var {H.map.SpatialStyle.LineCap} lineCap-The style of the end caps for a line, the default is 'round'.
        */
        lineCap: H.map.SpatialStyle.LineCap;

        /**
        * @var {H.map.SpatialStyle.LineJoin} lineJoin-The type of the corner created when two lines meet, the default is 'miter'.
        */
        lineJoin: H.map.SpatialStyle.LineJoin;

        /**
        * @var {number} miterLimit-The miter length as the distance between the inner corner and the outer corner where two lines meet. The default is 10.
        */
        miterLimit: number;

        /**
        * @var {Array<number>} lineDash-The line dash pattern as an even-numbered list of distances produce a line of alternating dashes and spaces. The default is [ ].
        */
        lineDash: Array<number>;

        /**
        * @var {number} lineDashOffset-The phase offset for the line dash pattern The default is 0.
        */
        lineDashOffset: number;

        /**
        * @var {number} static MAX_LINE_WIDTH-This constant represents the maximum line width which can be used for rendering.
        */
        static MAX_LINE_WIDTH: number;

        /**
        * @var {H.map.SpatialStyle} static DEFAULT_STYLE-Example
        */
        static DEFAULT_STYLE: H.map.SpatialStyle;

        /**
        * Constructor
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} opt_options - An object specifying style attributes
        */
        constructor(opt_options?: H.map.SpatialStyle | H.map.SpatialStyle.Options): void;

        /**
        * This method checks if the given style object is the same as the style object supplied by the caller. Two style objects are equal if the values of their properties are equal.
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} other - The style object against which to compare the given style object
        */
        equals(other: H.map.SpatialStyle | H.map.SpatialStyle.Options): boolean;

        /**
        * This method obtains a copy of the given spatial style object and sets its attributes.
        * @param {H.map.SpatialStyle.Options} opt_attributes - The style attributes to set on the copy of the given style instance
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
        * @param {boolean} opt_animate - Indicates whether the zoom change is animated, defaults to false
        */
        setZoom(zoom: number, opt_animate?: boolean): void;

        /**
        * This method retrieves the zoom level that is currently rendered.
        */
        getZoom(): number;

        /**
        * This method returns the currently requested data.
        */
        getRequestedCameraData(): H.map.ViewModel.CameraData;

        /**
        * This method signals the start of a control operation.
        * @param {H.util.kinetics.IKinetics} opt_kinetics - Kinetics settings
        * @param {number} opt_atX - x screen coordinate at which control has started
        * @param {number} opt_atY - y screen coordinate at which control has started
        */
        startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number): void;

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
        control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, opt_zoom?: number): void;

        /**
        * This method signals the end of a control operation.
        * @param {boolean} opt_preventKinetics - A flag to indicate whether a kinetic effect is performed
        * @param {Function} opt_adjustView - An callback to adjust the final ViewModel by modifying the passed camera data.
        */
        endControl(opt_preventKinetics?: boolean, opt_adjustView?: Function): void;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * ViewPort - A viewport object holds information about the HTML element in which the map is rendered. It contains information regarding the size of view port size and triggers events when the size changes.
    */
    export class ViewPort extends H.util.EventTarget  implements H.map.IInteraction  {

        /**
        * @var {Element} element-This property holds the HTML element that defines the viewport.
        */
        element: Element;

        /**
        * @var {number} width-This property holds a value indicating the width of the viewport.
        */
        width: number;

        /**
        * @var {number} height-This property holds a value indicating the height of the viewport.
        */
        height: number;

        /**
        * @var {number} margin-This property holds a value indicating the current margin of the viewport.
        */
        margin: number;

        /**
        * @var {H.map.ViewPort.Padding} padding-This property holds a value indicating the current padding of the viewport.
        */
        padding: H.map.ViewPort.Padding;

        /**
        * @var {H.math.Point} center-This property holds a value indicating the current center point of the viewport.
        */
        center: H.math.Point;

        /**
        * Constructor
        * @param {Element} element - The HTML element where the map is to be rendered
        * @param {H.map.ViewPort.Options} opt_options - Optional configuration parameters
        */
        constructor(element: Element, opt_options?: H.map.ViewPort.Options): void;

        /**
        * This method sets the margin on the viewport.
        * @param {number} margin - A value indicating the margin used to fetch map data
        */
        setMargin(margin: number): void;

        /**
        * This method sets a value indicating the padding of the viewport. Padding results in a shifted map center which is the visual center of the padded area.
        * @param {number} top - A value indicating padding at the top of the viewport
        * @param {number} right - A value indicating padding on the right of the viewport
        * @param {number} bottom - A value indicating padding at the bottom of the viewport
        * @param {number} left - A value indicating padding on the left of the viewport
        */
        setPadding(top: number, right: number, bottom: number, left: number): void;

        /**
        * This method updates the size of the viewport to match the container size. It must be called whenever the HTML element changes size in order to update the map's viewport values.
        */
        resize(): void;

        /**
        * This method starts the interaction with the view port. It should be called every time a new interaction is started, for example on mouse grab or touch start.
        * @param {H.math.BitMask} modifiers - Specifies what operations should performed during every interaction. See H.map.render.RenderEngine.InteractionModifiers
        * @param {H.util.kinetics.IKinetics} opt_kinetics - Specifies a kinetic move at the end of interaction
        */
        startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void;

        /**
        * This method resolves direct screen (view port) interaction. This function modifies the current view according to values passed in by the caller.
        * @param {number} x - viewport x coordinate
        * @param {number} y - viewport y coordinate
        * @param {number} opt_bx - x coordinate for the second pointer/touch if present
        * @param {number} opt_by - y coordinate for the second pointer/touch if present
        * @param {number} opt_timestamp - A known timestamp to use
        */
        interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number): void;

        /**
        * This method ends an interaction and applies a kinetic movement if it was specified in a call to startInteraction()
        * @param {boolean} opt_preventKinetics - A value indicating a kinetic movement at the end of the interaction is to be prevented (true or not false)
        */
        endInteraction(opt_preventKinetics?: boolean): void;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


}


/**
* Namespace: H.map.AbstractMarker
**/
declare namespace H.map.AbstractMarker {
    /**
    * Options - Options used to initialize an AbstractMarker.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-A value indicating whether the map object is visible, the default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value for the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of the given map object. This property is only needed if a customized implementation of ObjectProvider wants to instantiate the given map object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.Icon | H.map.DomIcon} icon-The icon to use for the visual representation; if omitted, a default icon is used.
        */
        icon?: H.map.Icon | H.map.DomIcon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData().
        */
        data: any;

    }


}


/**
* Namespace: H.map.ArrowStyle
**/
declare namespace H.map.ArrowStyle {
    /**
    * Options - An object containing arrow style initialization options.
    */
    export interface Options {

        /**
        * @var {string} fillColor-The CSS color value used to fill the arrow shapes. If omitted or if it evaluates to false, the default color "rgba(255, 255, 255, 0.75)" is used.
        */
        fillColor?: string;

        /**
        * @var {number} width-The width of the arrow shape. The value is taken as a factor of the width of the line, where the arrow description is applied. If omitted or the value is <= 0, it defaults to 1.2.
        */
        width?: number;

        /**
        * @var {number} length-The length of the arrow shapes. The value is taken as a factor of the width of the line at the end of which the arrow is drawn. If omitted or the value is <= 0, it defaults to 1.6.
        */
        length?: number;

        /**
        * @var {number} frequency-The frequency of arrow shapes. The value is taken as factor of the length of the arrow. A value of 1 results in gapless arrows. If omitted or the value is false, it defaults to 5.
        */
        frequency?: number;

    }


}


/**
* Namespace: H.map.Circle
**/
declare namespace H.map.Circle {
    /**
    * Options - This object encapsulates the initialization options for a circle.
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle} style-The style to be used when tracing the polyline (circle)
        */
        style?: H.map.SpatialStyle;

        /**
        * @var {boolean} visibility-An optional Boolean value indicating whether this map object is visible, default is true
        */
        visibility?: boolean;

        /**
        * @var {number} precision-The precision of the circle as a number of segments to be used when rendering the circle. The value is restricted to the range between [4 ... 360], where 60 is the default. Note that the lower the value the more angular and the less circle-like the shape appears and, conversely, the higher the value the smoother and more rounded the result. Thus, starting at the extreme low end of the possible values, 4 produces a square, 6 a hexagon, while 30 results in a circle-like shape, although it appears increasingly angular as the zoom level increases (as you zoom in), and finally 360 produces a smooth circle.
        */
        precision?: number;

        /**
        * @var {number} zIndex-The z-index value of the circle object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level at which the circle is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the circle is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of the circle object. This property is needed only if a custom implementation of ObjectProvider wants to instantiate the circle object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this circle. This data can be retrieved by calling getData()
        */
        data: any;

    }


}


/**
* Namespace: H.map.DomIcon
**/
declare namespace H.map.DomIcon {
    /**
    * Options - This object encapsulates options used to initialize a DomIcon.
    */
    export interface Options {

        /**
        * @var {Function} onAttach-A callback to be invoked before a clone of the icon's element is appended and displayed on the map. This callback can be used to set up the clone.
        */
        onAttach?: Function;

        /**
        * @var {Function} onDetach-A callback to be invoked after a clone of the icon's element is removed from the map. This callback can be used to clean up the clone.
        */
        onDetach?: Function;

    }


}


/**
* Namespace: H.map.DomMarker
**/
declare namespace H.map.DomMarker {
    /**
    * Options - This object defines the initialization options for a DomMarker.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible at all, the default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is needed only if a custom implementation of ObjectProvider wants to instantiate the give object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.DomIcon} icon-The icon to use for the visual representation, if omitted a default icon is used.
        */
        icon?: H.map.DomIcon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData()
        */
        data: any;

    }


}


/**
* Namespace: H.map.Group
**/
declare namespace H.map.Group {
    /**
    * Options - Options used to initialize a group object.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible, the default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of the given group object. This property is only needed if a custom implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with the group object. This data can be retrieved by calling getData().
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
    * ShapeType - This enumeration represents the possible shape types that a HitArea can have.
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
    * Options - Options used to initialize an Icon object.
    */
    export interface Options {

        /**
        * @var {H.math.ISize} size-The size in pixels of the icon, the default is the natural size of the bitmap
        */
        size?: H.math.ISize;

        /**
        * @var {H.math.IPoint} anchor-The anchorage point in pixels, the default is bottom-center
        */
        anchor?: H.math.IPoint;

        /**
        * @var {H.map.HitArea} hitArea-The area to use for hit detection, the default is the whole rectangular area
        */
        hitArea?: H.map.HitArea;

        /**
        * @var {H.map.HitArea} asCanvas-Indicates whether a non-canvas bitmap is converted into a canvas, the default is true. The conversion improves the rendering performance, but it could also cause a higher memory consumption.
        */
        asCanvas?: H.map.HitArea;

        /**
        * @var {boolean} crossOrigin-Specifies whether to use anonymous Cross-Origin Resource Sharing (CORS) when fetching an image to prevent the resulting canvas from tainting, the default is false. The option is ignored by IE9-10.
        */
        crossOrigin: boolean;

    }


}


/**
* Namespace: H.map.Imprint
**/
declare namespace H.map.Imprint {
    /**
    * Options - This object encapsulates the initialization options that style imprint information.
    */
    export interface Options {

        /**
        * @var {boolean} invert-Indicates whether the logo is inverted. If omitted, the current value remains, the default is false.
        */
        invert?: boolean;

        /**
        * @var {string} font-The font of the text. If omitted, the current value remains, the default is "11px Arial,sans-serif".
        */
        font?: string;

        /**
        * @var {string} href-The URL of the "Terms of use" link. If omitted, the current value remains, the default is "http://here.com/terms".
        */
        href?: string;

        /**
        * @var {string} locale-IETF language tag for the "Terms of use" translation. Available default languages are: "de-DE", "en-US", "en-GB", "es-ES", "fi-FI", "fr-FR", "it-IT", "nl-NL", "pl-PL", "pt-BR", "pt-PT", "ru-RU", "tr-TR", "zh-CN". If value is omitted options defaults to "en-US"
        */
        locale?: string;

    }


}


/**
* Namespace: H.map.Marker
**/
declare namespace H.map.Marker {
    /**
    * Options - This object encapsulates the configuration options for a Marker.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-A value indicating whether the map object is visible, the default is (true means it is visible).
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is needed only if a custom implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {H.map.Icon} icon-The icon to use for the visual representation, if omitted, a default icon is used.
        */
        icon?: H.map.Icon;

        /**
        * @var {any} data-Optional arbitrary data to be stored with the given map object. This data can be retrieved by calling getData().
        */
        data?: any;

    }


}


/**
* Namespace: H.map.Object
**/
declare namespace H.map.Object {
    /**
    * Options - This object defines initialization options for a map object.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible, the default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {Object} provider-The provider of the given object. This property is needed only if a custom implementation of ObjectProvider wants to instantiate the given object.
        */
        provider?: Object;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData().
        */
        data: any;

    }


    /**
    * Type - This object defines the supported types of map objects.
    */
    export enum Type {

        /**
        * ANY - Indicates any supported object type.
        */
        ANY,

        /**
        * OVERLAY - Indicates an overlay.
        */
        OVERLAY,

        /**
        * SPATIAL - Indicates a spatial object.
        */
        SPATIAL,

        /**
        * MARKER - Indicates a Marker object.
        */
        MARKER,

        /**
        * DOM_MARKER - Indicates a DomMarker object.
        */
        DOM_MARKER,

        /**
        * GROUP - Indicates an object group.
        */
        GROUP,

    }


}


/**
* Namespace: H.map.Overlay
**/
declare namespace H.map.Overlay {
    /**
    * Options - Options used to initialize an overlay.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {number} opacity-The opacity of the object in range from 0 (transparent) to 1 (opaque), the default is 1.
        */
        opacity?: number;

        /**
        * @var {boolean} visibility-Indicates whether the map object is visible, the default is true.
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this overlay. This property is needed only if a customized implementation of ObjectProvider wants to instantiate the overlay.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with the map overlay. The data can be retrieved by calling getData().
        */
        data: any;

        /**
        * @var {boolean} crossOrigin-Specifies whether to use anonymous Cross-Origin Resource Sharing (CORS) when fetching an image to prevent the resulting canvas from tainting, the default is false. The option is ignored by IE9-10.
        */
        crossOrigin?: boolean;

    }


}


/**
* Namespace: H.map.Polyline
**/
declare namespace H.map.Polyline {
    /**
    * Options - This object contains the configuration options for a polyline.
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} style-The style to be used when tracing the polyline
        */
        style?: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {H.map.ArrowStyle | H.map.ArrowStyle.Options} arrows-The arrows style to be used when rendering the polyline.
        */
        arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options;

        /**
        * @var {boolean} visibility-An optional Boolean value indicating whether this map object is visible (true, default) or not (false)
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level at which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level at which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is needed only if a custom implementation of ObjectProvider wants to instantiate the given polyline
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData()
        */
        data: any;

    }


}


/**
* Namespace: H.map.Spatial
**/
declare namespace H.map.Spatial {
    /**
    * Label - This typedef defines data to used in a rendering hint for a label.
    */
    export interface Label {

        /**
        * @var {number} x-The x coordinate of the first line's starting point
        */
        x: number;

        /**
        * @var {number} y-The y coordinate of the first line's base line
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
    * Options - This object encapsulates the initialization options for a spatial object.
    */
    export interface Options {

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} style-The style to be used when tracing the spatial object.
        */
        style?: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {H.map.ArrowStyle | H.map.ArrowStyle.Options} arrows-The arrows style to be used when rendering the spatial object.
        */
        arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options;

        /**
        * @var {boolean} visibility-An optional Boolean value indicating whether this map object is visible, the default is true
        */
        visibility?: boolean;

        /**
        * @var {number} zIndex-The z-index value of the map object, the default is 0
        */
        zIndex?: number;

        /**
        * @var {number} min-The minimum zoom level for which the object is visible, the default is -Infinity
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the object is visible, the default is Infinity
        */
        max?: number;

        /**
        * @var {H.map.provider.Provider} provider-The provider of this object. This property is only needed if a custom implementation of ObjectProvider wants to instantiate an object.
        */
        provider?: H.map.provider.Provider;

        /**
        * @var {any} data-Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData().
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
    * LineJoin - The type of the corner created when two lines meet, one of 'round', 'bevel' or 'miter'.
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
        * @var {number} lineWidth-The width of the line in pixels, the default is 2. The maximum supported line width is 100.
        */
        lineWidth?: number;

        /**
        * @var {H.map.SpatialStyle.LineCap} lineCap-The style of the end caps for a line.
        */
        lineCap?: H.map.SpatialStyle.LineCap;

        /**
        * @var {H.map.SpatialStyle.LineJoin} lineJoin-The type of corner created when two lines meet.
        */
        lineJoin?: H.map.SpatialStyle.LineJoin;

        /**
        * @var {number} miterLimit-The miter limit in pixels, the default is 10. The maximum supported miter limit is 100.
        */
        miterLimit?: number;

        /**
        * @var {Array<number>} lineDash-The line dash pattern as an even-numbered list of distances to alternate lines (dashes) and spaces. If the browser does not support this feature this property is ignored.
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
    * UpdateEvent - This event is fired whenever view model data is changed. It contains property which hold currently requested data
    */
    export class UpdateEvent extends H.util.Event  {

        /**
        * @var {any} target-This property holds the object which triggered the event.
        */
        target: any;

        /**
        * @var {any} currentTarget-This property holds an object that receives notification of the event (via an attached listener).
        */
        currentTarget: any;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds indicates if preventDefault was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * @var {number} CAPTURING_PHASE-This property identifies the current event phase as the capturing phase.
        */
        CAPTURING_PHASE: number;

        /**
        * @var {number} AT_TARGET-This property indicates that the event is being evaluated at the target.
        */
        AT_TARGET: number;

        /**
        * @var {number} BUBBLING_PHASE-This property identifies the current event phase as the bubbling phase.
        */
        BUBBLING_PHASE: number;

        /**
        * @var {number} eventPhase-This property indicates which phase of the event flow is being evaluated.
        */
        eventPhase: number;

        /**
        * Constructor
        * @param {H.map.ViewModel.RequestedData} requested - The requested view data
        */
        constructor(requested: H.map.ViewModel.RequestedData): void;

        /**
        * This method sets a flag that can be used to prevent the default behavior when the even is fired.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the event.
        */
        stopPropagation(): void;

    }


}


/**
* Namespace: H.map.ViewPort
**/
declare namespace H.map.ViewPort {
    /**
    * Options - Viewport initialization options.
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
        * @var {boolean} fixedCenter-Indicates whether the center of the map should remain unchanged if the viewport's size or padding has changed, default is true
        */
        fixedCenter?: boolean;

    }


    /**
    * Padding - This variable defines viewport padding.
    */
    export interface Padding {

        /**
        * @var {number} top-Padding at the top of the viewport (in pixels)
        */
        top: number;

        /**
        * @var {number} right-Padding on the right of the viewport (in pixels)
        */
        right: number;

        /**
        * @var {number} bottom-Padding at the bottom of the viewport (in pixels)
        */
        bottom: number;

        /**
        * @var {number} left-Padding on the left of the viewport (in pixels)
        */
        left: number;

    }


}


/**
* Namespace: H.map.layer
**/
declare namespace H.map.layer {
    /**
    * BaseTileLayer - BaseTileLayer encapsulates functionality that is common to all layers that deliver tiles, such as H.map.layer.TileLayer. The functionality includes geo-bounding-box-to-grid calculation and tile request management.
    */
    export class BaseTileLayer extends H.map.layer.Layer  {

        /**
        * Constructor
        * @param {H.map.provider.TileProvider} provider - The data source for the TileLayer
        * @param {H.map.layer.ITileLayer.Options} opt_options - Configuration/initialization options
        */
        constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options): void;

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to a projected geometrical rectangle at the current projection zoom level or at the zoom level provided by the caller
        * @param {H.geo.Rect} geoRect - The rectangle to be projected
        * @param {number} opt_zoom - A zoom value to override the current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method retrieves the tile grid bounds for a projected rectangle.
        * @param {H.math.Rect} rectBounds - A projected rectangle which corresponds to a geo bounding box whose tile grid is to be retrieved
        * @param {number} zoom - The current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests a single tile based on the tile coordinates. It returns either a Tile object if it is already loaded or undefined, in which case it starts loading the tile
        * @param {number} x - The tile row position
        * @param {number} y - The tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered (true) or not (false)
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previous request for a tile.
        * @param {number} x - The tile row position
        * @param {number} y - The tile column position
        * @param {number} z - The zoom level
        */
        cancelTile(x: number, y: number, z: number): void;

        /**
        * This method requests tiles from a data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded are included in the response as soon as they become available during subsequent calls.
        * @param {H.math.Rect} tileBounds - The bounds of a tile grid
        * @param {boolean} isCDB - A value indicating if tileBounds crosses the international date line true
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by the given layer.
        * @param {number} zoomLevel - The zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level at which the given layer provides content.
        * @param {number} min - The new minimum zoom level for the given layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level at which the given layer provides content.
        * @param {number} max - The new maximum zoom level for the given layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class derived from Layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * IMarkerLayer - This interface defines a layer which provides marker objects to the renderer.
    */
    export interface IMarkerLayer {

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

    }


    /**
    * ITileLayer - This interface describes a layer which provides data partitioned in quad-tree tiles in an x, y, z fashion (where z describes the level within the tree and x and y describe the absolute column and row indices within the level).
    */
    export interface ITileLayer {

        /**
        * This method is called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, therefore caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered (true)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile for the specified tile coordinates.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered true
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - Zoom level
        */
        cancelTile(x: number, y: number, z: number): void;

    }


    /**
    * Layer - The Layer class represents an object that is evaluated by the renderer in the order in which it is added to the collection of map layers. It provides the basic infrastructure for dispatching update events to the renderer when new data is available.
    */
    export class Layer extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {H.map.layer.Layer.Options} opt_options - An optional configuration object
        */
        constructor(opt_options?: H.map.layer.Layer.Options): void;

        /**
        * This method checks if a zoom level can be served by the given layer.
        * @param {number} zoomLevel - The zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level at which the given layer provides content.
        * @param {number} min - The new minimum zoom level for the given layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level at which the given layer provides content.
        * @param {number} max - The new maximum zoom level for the given layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class derived from Layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * MarkerTileLayer - ObjectTileLayer represents map objects which are requested on a tile basis.
    */
    export class MarkerTileLayer extends H.map.layer.BaseTileLayer  implements H.map.layer.IMarkerLayer  {

        /**
        * Constructor
        * @param {H.map.provider.RemoteTileProvider} provider - An object that represents the tile provider
        * @param {H.map.layer.ITileLayer.Options} opt_options - An object containing configuration/initialization options
        */
        constructor(provider: H.map.provider.RemoteTileProvider, opt_options?: H.map.layer.ITileLayer.Options): void;

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to a projected geometrical rectangle at the current projection zoom level or at the zoom level provided by the caller
        * @param {H.geo.Rect} geoRect - The rectangle to be projected
        * @param {number} opt_zoom - A zoom value to override the current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method retrieves the tile grid bounds for a projected rectangle.
        * @param {H.math.Rect} rectBounds - A projected rectangle which corresponds to a geo bounding box whose tile grid is to be retrieved
        * @param {number} zoom - The current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests a single tile based on the tile coordinates. It returns either a Tile object if it is already loaded or undefined, in which case it starts loading the tile
        * @param {number} x - The tile row position
        * @param {number} y - The tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered (true) or not (false)
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previous request for a tile.
        * @param {number} x - The tile row position
        * @param {number} y - The tile column position
        * @param {number} z - The zoom level
        */
        cancelTile(x: number, y: number, z: number): void;

        /**
        * This method requests tiles from a data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded are included in the response as soon as they become available during subsequent calls.
        * @param {H.math.Rect} tileBounds - The bounds of a tile grid
        * @param {boolean} isCDB - A value indicating if tileBounds crosses the international date line true
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by the given layer.
        * @param {number} zoomLevel - The zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level at which the given layer provides content.
        * @param {number} min - The new minimum zoom level for the given layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level at which the given layer provides content.
        * @param {number} max - The new maximum zoom level for the given layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class derived from Layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

    }


    /**
    * ObjectLayer - This class represents a layer which renders map objects. Spatial objects such as polygons and polylines are rendered to tiles before being passed to the rendering engine. Point objects such as markers are provided as objects given an rectangular area.
    */
    export class ObjectLayer extends H.map.layer.Layer  implements H.map.layer.IMarkerLayer  {

        /**
        * Constructor
        * @param {Object} provider - The ObjectProvider which provides the map objects to the given object layer.
        * @param {Object} opt_options - An object containing the initialization options for the given layer
        */
        constructor(provider: Object, opt_options?: Object): void;

        /**
        * This method returns current ObjectLayer's data provider
        */
        getProvider(): Object;

        /**
        * This method retrieves overlay objects contained in a bounding rectangle.
        * @param {H.geo.Rect} bounds - The bounding rectangle for which overlays are to be returned
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestOverlays(bounds: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): Object;

        /**
        * This method is called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, therefore caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered (true)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile for the specified tile coordinates.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered true
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - Zoom level
        */
        cancelTile(x: number, y: number, z: number): void;

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        */
        requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method is called by the renderer in each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process.
        * @param {H.geo.Rect} boundingRect - The bounding rectangle for which marker are to be retrieved
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered true
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        */
        requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse;

        /**
        * This method checks if a zoom level can be served by the given layer.
        * @param {number} zoomLevel - The zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level at which the given layer provides content.
        * @param {number} min - The new minimum zoom level for the given layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level at which the given layer provides content.
        * @param {number} max - The new maximum zoom level for the given layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class derived from Layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * TileLayer - This class represents data shown on the map as a set of tiles. It can be used to show map tile images or other type of data which is partitioned into tiles.
    */
    export class TileLayer extends H.map.layer.BaseTileLayer  implements H.map.layer.ITileLayer  {

        /**
        * Constructor
        * @param {H.map.provider.TileProvider} provider - data source for the TileLayer
        * @param {H.map.layer.ITileLayer.Options} opt_options - An object containing initialization options
        */
        constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options): void;

        /**
        * This method is called by the renderer for each rendering cycle. An implementing object must make sure that calling this method does not impede the rendering process, therefore caching of remote objects is strongly advised.
        * @param {H.geo.Rect} boundingRect - the bounding rectangle for which tiles are to be returned
        * @param {number} zoomLevel - The zoom level for which the tiles are requested
        * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered (true)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixel relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method requests a single tile for the specified tile coordinates.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - The zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered true
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a previously requested tile.
        * @param {number} x - Tile row position
        * @param {number} y - Tile column position
        * @param {number} z - Zoom level
        */
        cancelTile(x: number, y: number, z: number): void;

        /**
        * This method returns the provider which feeds this layer with data.
        */
        getProvider(): H.map.provider.TileProvider;

        /**
        * This method transforms a geo-rectangle to a projected geometrical rectangle at the current projection zoom level or at the zoom level provided by the caller
        * @param {H.geo.Rect} geoRect - The rectangle to be projected
        * @param {number} opt_zoom - A zoom value to override the current projection zoom level
        */
        geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

        /**
        * This method retrieves the tile grid bounds for a projected rectangle.
        * @param {H.math.Rect} rectBounds - A projected rectangle which corresponds to a geo bounding box whose tile grid is to be retrieved
        * @param {number} zoom - The current zoom level
        */
        getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

        /**
        * This method requests tiles from a data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded are included in the response as soon as they become available during subsequent calls.
        * @param {H.math.Rect} tileBounds - The bounds of a tile grid
        * @param {boolean} isCDB - A value indicating if tileBounds crosses the international date line true
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        * @param {H.math.Point} prioCenter - The priority center as an offset in screen pixels relative to the center
        * @param {any} opt_requesterId - Unique dentifier of the requester, is used when layer is shared between different maps
        */
        getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point, opt_requesterId?: any): H.map.layer.ITileLayer.Response;

        /**
        * This method checks if a zoom level can be served by the given layer.
        * @param {number} zoomLevel - The zoom level to check
        */
        isValid(zoomLevel: number): boolean;

        /**
        * This method sets the minimum zoom level at which the given layer provides content.
        * @param {number} min - The new minimum zoom level for the given layer
        */
        setMin(min: number): H.map.layer.Layer;

        /**
        * This method sets the maximum zoom level at which the given layer provides content.
        * @param {number} max - The new maximum zoom level for the given layer
        */
        setMax(max: number): H.map.layer.Layer;

        /**
        * Note: This function must be overridden by any class derived from Layer. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

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
        * @var {Array<H.map.AbstractMarker>} markers-The marker objects for the bounding rectangle (only ready).
        */
        markers: Array<H.map.AbstractMarker>;

    }


    /**
    * TiledResponse - This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
    */
    export interface TiledResponse {

        /**
        * @var {number} total-A value indicating the number of returned tiles
        */
        total: number;

        /**
        * @var {number} requested-A value indicating the number of requested tiles
        */
        requested: number;

        /**
        * @var {Array<H.map.AbstractMarker>} markers-An array of the marker objects within requested tiled area
        */
        markers: Array<H.map.AbstractMarker>;

    }


}


/**
* Namespace: H.map.layer.ITileLayer
**/
declare namespace H.map.layer.ITileLayer {
    /**
    * Options - This object defines the configuration options which are used to initialize a TileLayer object.
    */
    export interface Options {

        /**
        * @var {H.geo.IProjection} projection-An optional projection to be used for the given layer, the default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {number} opacity-A value indicating the tile layer opacity, the default is 1
        */
        opacity?: number;

    }


    /**
    * Response - This is a response object for a tile request. It contains the total number of elements requested and an array of currently available tiles.
    */
    export interface Response {

        /**
        * @var {number} total-The total number of requested tiles
        */
        total: number;

        /**
        * @var {Array<H.map.provider.Tile>} tiles-The tiles which the provider can currently return synchronously
        */
        tiles: Array<H.map.provider.Tile>;

    }


}


/**
* Namespace: H.map.layer.Layer
**/
declare namespace H.map.layer.Layer {
    /**
    * Options - This object encapsulates options which can be used when creating new layer object.
    */
    export interface Options {

        /**
        * @var {number} min-The minimum zoom level for which the layer is considered for rendering, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum zoom level for which the layer is considered for rendering, the default is 22
        */
        max?: number;

        /**
        * @var {boolean} dark-Indicates whether the content of the given layer is mainly dark, the default is false See also H.Map.Options#autoColor
        */
        dark?: boolean;

        /**
        * @var {H.geo.IProjection} projection-The projection to be used for the given layer, the default is H.geo.mercator
        */
        projection?: H.geo.IProjection;

        /**
        * @var {number} minWorldSize-The minimal world size at zoom level 0, the default is 256
        */
        minWorldSize?: number;

    }


}


/**
* Namespace: H.map.layer.ObjectLayer
**/
declare namespace H.map.layer.ObjectLayer {
    /**
    * Options - This object encapsulates the configuration/initialization properties for the ObjectLayer.
    */
    export interface Options {

        /**
        * @var {number} tileSize-The size of the tiles rendered by this layer for polylines and polygons (must be power of 2, the default is 256)
        */
        tileSize?: number;

        /**
        * @var {number} tileCacheSize-The number of fully rendered spatial tiles that are cached for immediate reuse, the default is 32
        */
        tileCacheSize?: number;

        /**
        * @var {number} dataCacheSize-The number of tiles to cache which have render data only, the default is 512
        */
        dataCacheSize?: number;

        /**
        * @var {number} pixelRatio-The pixel ratio to use for over-sampling on high-resolution displays
        */
        pixelRatio?: number;

    }


    /**
    * OverlaysResponse - A response object returned by the H.map.layer.ObjectLayer#requestOverlays function.
    */
    export interface OverlaysResponse {

        /**
        * @var {number} total-The total number of overlays within the requested bounds, inclusive of overlays which are not yet loaded
        */
        total: number;

        /**
        * @var {Array<H.map.Overlay>} overlays-A list of all overlays which are ready to render
        */
        overlays: Array<H.map.Overlay>;

    }


}


/**
* Namespace: H.map.provider
**/
declare namespace H.map.provider {
    /**
    * ImageTileProvider - An ImageTileProvider uses a network service to provide bitmap images as tiles.
    */
    export class ImageTileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * @var {number} tileSize-This property holds a value indicating the size of a tile image supported by the provider.
        */
        tileSize: number;

        /**
        * @var {any} requestTile-This method requests data for a tile.
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-This method cancels a tile request, using the caller-supplied tile coordinates.
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-This method cancels a tile request, using a tile key.
        */
        cancelTileByKey: any;

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.ImageTileProvider.Options} options - An object containing configuration for the tile provider
        */
        constructor(options: H.map.provider.ImageTileProvider.Options): void;

        /**
        * This method retrieves a tile cache of this provider.
        */
        getCache(): H.util.ICache;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - A Boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean): void;

        /**
        * This method requests a tile from a remote service.
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - A function which is called when a response arrives
        * @param {Function} onError - A function which is called on a communication error
        * @param {H.util.Job.Priority} opt_priority - An optional request priority level
        */
        protected  requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: H.util.Job.Priority): H.util.ICancelable;

        /**
        * This method creates a tile object on the basis of the caller-supplied parameters.
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The tile zoom level
        * @param {HTMLImageElement | HTMLCanvasElement} data - An object containing the data for the tile
        * @param {Object} opt_options - An object containing initialization options to be used in tile-specific rendering
        */
        protected  createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's URI, and the x, y and z coordinates of the tile, seperated by underscores, for example "4711_7_42_23"
        * @param {number} x - The x tile coordinate (column)
        * @param {number} y - The y tile coordinate (row)
        * @param {number} z - The tile zoom level
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Invalidations - This class represents invalidation states of a renderable object. A renderer can optimize its rendering strategies based on the information in this object.
    */
    export class Invalidations {

        /**
        * @var {H.map.provider.Invalidations.Mark} static MARK_INITIAL-This constant represents the initial invalidation mark for an invalidations object.
        */
        static MARK_INITIAL: H.map.provider.Invalidations.Mark;

        /**
        * This method updates invalidation marks according to the caller-provided invalidation types.
        * @param {H.map.provider.Invalidations.Mark} mark - The invalidation mark to set
        * @param {H.math.BitMask} types - The discrete invalidation types to update
        */
        update(mark: H.map.provider.Invalidations.Mark, types: H.math.BitMask): void;

        /**
        * This method retrieves the current invalidation mark of the given invalidations object.
        */
        getMark(): H.map.provider.Invalidations.Mark;

        /**
        * This method checks whether any change occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isAny(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * This method checks whether a visual change occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isVisual(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * This method checks whether a spatial change occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isSpatial(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * This method checks whether an add-operation occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isAdd(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * This method checks whether a remove operation occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isRemove(since: H.map.provider.Invalidations.Mark): boolean;

        /**
        * This method checks whether a z-order change occurred after the specified since mark.
        * @param {H.map.provider.Invalidations.Mark} since - The invalidation mark to check against
        */
        isZOrder(since: H.map.provider.Invalidations.Mark): boolean;

    }


    /**
    * LocalObjectProvider - A LocalObjectProvider acts as a database for map objects. It provides functionality to fetch visible objects for specific geographical bounds and zoom levels. All objects are organized in a hierarchical group structure. An object can be added to the provider by adding it to a group within this structure. The root group of the provider can be fetched via the method H.map.provider.LocalObjectProvider#getRootGroup. A H.Map has its own LocalObjectProvider and offer a means to add and remove objects. Only in advanced use cases, is there a need to create an additional LocalObjectProvider.
    */
    export class LocalObjectProvider extends H.map.provider.ObjectProvider  {

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - An object containing configuration options
        */
        constructor(opt_options?: H.map.provider.Provider.Options): void;

        /**
        * This method retrieves the root group for the given provider.
        */
        getRootGroup(): H.map.Group;

        /**
        * This method removes an object from the given provider's database. It must not called directly. It is invoked by H.map.Group which checks beforehand that it is an H.map.Object instance and its provider is the given provider.
        * @param {Object} object - The object to remove
        */
        removeObject(object: Object): void;

        /**
        * This method retrieves the accumulated invalidations of the given provider's objects.
        * @param {Object} opt_type - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
        */
        getInvalidations(opt_type?: Object): H.map.provider.Invalidations;

        /**
        * This method signals to the provider that a map object has changed. The method updates the Invalidations of the given provider and the specified map object and triggers dispatchUpdate().
        * @param {Object} mapObject - The map object to be invalidated
        * @param {H.math.BitMask} changes - The flags indicating the types of changes that have occurred
        */
        invalidateObject(mapObject: Object, changes: H.math.BitMask): void;

        /**
        * This method retrieves all overlay objects which intersect with the specified area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestOverlays(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Overlay>;

        /**
        * This method retrieves all polyline, polygon, circle and rectangle objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestSpatials(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * This method retrieves the spatial objects which intersect the given tile.
        * @param {Object} tile - The tile for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestSpatialsByTile(tile: Object, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * This method retrieves all Marker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Marker>;

        /**
        * This method retrieves all DomMarker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestDomMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.DomMarker>;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * MarkerTileProvider - A MarkerTileProvider uses a network service to provide markers on a tile basis.
    */
    export class MarkerTileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * @var {any} requestTile-This method requests data for a tile.
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-This method cancels a tile request, using the caller-supplied tile coordinates.
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-This method cancels a tile request, using a tile key.
        */
        cancelTileByKey: any;

        /**
        * @var {number} tileSize-This property holds the size of a tile representing edge length in pixels. Its value must be 2^n where n is in range [0 ... 30], default is 256.
        */
        tileSize: number;

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.MarkerTileProvider.Options} options - An object containing the configuration for the tile provider
        */
        constructor(options: H.map.provider.MarkerTileProvider.Options): void;

        /**
        * This method signals to the provider that a map object has changed. The method marks the tile that contains that object as invalid and triggers dispatchUpdate().
        * @param {H.map.AbstractMarker} marker - The map object to be invalidated
        * @param {H.math.BitMask} flags - The flags indicating the types of occurred changes
        */
        invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask): void;

        /**
        * This method checks whether the given provider currently provides H.map.DomMarker map objects.
        */
        providesDomMarkers(): boolean;

        /**
        * This method retrieves a tile cache of this provider.
        */
        getCache(): H.util.ICache;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - A Boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean): void;

        /**
        * This method requests a tile from a remote service.
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - A function which is called when a response arrives
        * @param {Function} onError - A function which is called on a communication error
        * @param {H.util.Job.Priority} opt_priority - An optional request priority level
        */
        protected  requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: H.util.Job.Priority): H.util.ICancelable;

        /**
        * This method creates a tile object on the basis of the caller-supplied parameters.
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The tile zoom level
        * @param {HTMLImageElement | HTMLCanvasElement} data - An object containing the data for the tile
        * @param {Object} opt_options - An object containing initialization options to be used in tile-specific rendering
        */
        protected  createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's URI, and the x, y and z coordinates of the tile, seperated by underscores, for example "4711_7_42_23"
        * @param {number} x - The x tile coordinate (column)
        * @param {number} y - The y tile coordinate (row)
        * @param {number} z - The tile zoom level
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * ObjectProvider - This is an abstract class to manage and provide map objects (Marker, Polyline, Polygon).
    */
    export class ObjectProvider extends H.map.provider.Provider  {

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - An object containing configuration options
        */
        constructor(opt_options?: H.map.provider.Provider.Options): void;

        /**
        * This method retrieves the accumulated invalidations of the given provider's objects.
        * @param {Object} opt_type - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
        */
        getInvalidations(opt_type?: Object): H.map.provider.Invalidations;

        /**
        * This method signals to the provider that a map object has changed. The method updates the Invalidations of the given provider and the specified map object and triggers dispatchUpdate().
        * @param {Object} mapObject - The map object to be invalidated
        * @param {H.math.BitMask} changes - The flags indicating the types of changes that have occurred
        */
        invalidateObject(mapObject: Object, changes: H.math.BitMask): void;

        /**
        * This method retrieves all overlay objects which intersect with the specified area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestOverlays(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Overlay>;

        /**
        * This method retrieves all polyline, polygon, circle and rectangle objects which intersect with the provided area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestSpatials(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * This method retrieves the spatial objects which intersect the given tile.
        * @param {Object} tile - The tile for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestSpatialsByTile(tile: Object, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Spatial>;

        /**
        * This method retrieves all Marker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.Marker>;

        /**
        * This method retrieves all DomMarker map objects which intersect with the provided rectangular area.
        * @param {H.geo.Rect} geoRect - A rectangular area defined in terms of the geographic coordinates of its top-left and bottom-right corners
        * @param {number} zoomLevel - The zoom level for which the objects are requested
        * @param {boolean} visiblesOnly - A value indicating whether only invisible objects are to be considered (true) or not (false)
        * @param {boolean} cacheOnly - A value indicating whether only cached objects are to be considered (true) or not (false)
        */
        requestDomMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): Array<H.map.DomMarker>;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Provider - A Provider defines an object which works as a database for the map. Providers can exists in different forms in that they can implement client-side object storage or they can request data from a remote service.
    */
    export class Provider extends H.util.EventTarget  {

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.Provider.Options} opt_options - An object containing configuration options
        */
        constructor(opt_options?: H.map.provider.Provider.Options): void;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * RemoteTileProvider - RemoteTileProvider is an abstract class which should be used by classes implementing data provision on a tile basis. Every child class needs to implement the method requestInternal (to request a remote tile) and getCache (to provide configured cache object were tiled data is being cached).
    */
    export class RemoteTileProvider extends H.map.provider.TileProvider  {

        /**
        * @var {any} requestTile-This method requests data for a tile.
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-This method cancels a tile request, using the caller-supplied tile coordinates.
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-This method cancels a tile request, using a tile key.
        */
        cancelTileByKey: any;

        /**
        * @var {number} tileSize-This property holds the size of a tile representing edge length in pixels. Its value must be 2^n where n is in range [0 ... 30], default is 256.
        */
        tileSize: number;

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.TileProvider.Options} options - The options to instantiate a TileProvider instance
        */
        constructor(options: H.map.provider.TileProvider.Options): void;

        /**
        * This method retrieves a tile cache of this provider.
        */
        getCache(): H.util.ICache;

        /**
        * Two reload modes are possible:
        * @param {boolean} hard - A Boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean): void;

        /**
        * This method requests a tile from a remote service.
        * @param {number} x - The row number of the tile
        * @param {number} y - The column number of the tile
        * @param {number} z - The zoom level for which the tile is requested
        * @param {Function} onResponse - A function which is called when a response arrives
        * @param {Function} onError - A function which is called on a communication error
        * @param {H.util.Job.Priority} opt_priority - An optional request priority level
        */
        protected  requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function, opt_priority?: H.util.Job.Priority): H.util.ICancelable;

        /**
        * This method creates a tile object on the basis of the caller-supplied parameters.
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The tile zoom level
        * @param {HTMLImageElement | HTMLCanvasElement} data - An object containing the data for the tile
        * @param {Object} opt_options - An object containing initialization options to be used in tile-specific rendering
        */
        protected  createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's URI, and the x, y and z coordinates of the tile, seperated by underscores, for example "4711_7_42_23"
        * @param {number} x - The x tile coordinate (column)
        * @param {number} y - The y tile coordinate (row)
        * @param {number} z - The tile zoom level
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Tile - This class defines a generic tile object which represents a part of the world that fits into the tile area represented by the tile coordinates (x - row, y - column) and the zoom level (z). The number of tiles at a particular zoom level (which means number of areas into which world is divided) equals numberOfRows = * numberOfColumns = 2^zoomlevel.
    */
    export class Tile {

        /**
        * @var {string} key-This property holds a unique tile key generated by provider.
        */
        key: string;

        /**
        * @var {number} x-This property holds the tile column.
        */
        x: number;

        /**
        * @var {number} y-This property holds the tile row.
        */
        y: number;

        /**
        * @var {number} z-This property holds the tile zoom level.
        */
        z: number;

        /**
        * @var {any} data-This property holds the tile data (for example an image).
        */
        data: any;

        /**
        * @var {boolean} valid-This property holds a Boolean flag indicating whether the tile is still valid (true) or whether it should be re-fetched (false).
        */
        valid: boolean;

        /**
        * Constructor
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The tile zoom level
        * @param {any} data - A generic data object which corresponds to the supplied coordinates
        */
        constructor(x: number, y: number, z: number, data: any): void;

    }


    /**
    * TileProvider - TileProvider is an abstract class to provide tile data.
    */
    export class TileProvider extends H.map.provider.Provider  {

        /**
        * @var {any} requestTile-This method requests data for a tile.
        */
        requestTile: any;

        /**
        * @var {any} cancelTile-This method cancels a tile request, using the caller-supplied tile coordinates.
        */
        cancelTile: any;

        /**
        * @var {any} cancelTileByKey-This method cancels a tile request, using a tile key.
        */
        cancelTileByKey: any;

        /**
        * @var {number} tileSize-This property holds the size of a tile representing edge length in pixels. Its value must be 2^n where n is in range [0 ... 30], default is 256.
        */
        tileSize: number;

        /**
        * @var {string} uri-This property holds the provider's unique resource identifier. If it is not provided at construction time, it defaults to provider's uid.
        */
        uri: string;

        /**
        * @var {number} min-This property holds a value indicating the minimum zoom level at which the given provider can serve data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds a value indicating the maximum zoom level at which the given provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds the unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * Constructor
        * @param {H.map.provider.TileProvider.Options} options - The options to instantiate the given TileProvider
        */
        constructor(options: H.map.provider.TileProvider.Options): void;

        /**
        * This method creates a tile object on the basis of the caller-supplied parameters.
        * @param {number} x - The x tile coordinate (row)
        * @param {number} y - The y tile coordinate (column)
        * @param {number} z - The tile zoom level
        * @param {HTMLImageElement | HTMLCanvasElement} data - An object containing the data for the tile
        * @param {Object} opt_options - An object containing initialization options to be used in tile-specific rendering
        */
        protected  createTileInternal(x: number, y: number, z: number, data: HTMLImageElement | HTMLCanvasElement, opt_options?: Object): H.map.provider.Tile;

        /**
        * This method creates a tile key consisting of the provider's URI, and the x, y and z coordinates of the tile, seperated by underscores, for example "4711_7_42_23"
        * @param {number} x - The x tile coordinate (column)
        * @param {number} y - The y tile coordinate (row)
        * @param {number} z - The tile zoom level
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * Note: This function may be overridden by H.map.provider.Provider.Options.getCopyrights property. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method checks whether this provider currently provides spatial map objects. A concrete implementation of Provider must override it if it currently provides Spatials.
        */
        providesSpatials(): boolean;

        /**
        * This method checks whether this provider currently provides overlay map objects. A concrete implementation of Provider must override it if it currently provides overlays.
        */
        providesOverlays(): boolean;

        /**
        * This method checks whether this provider currently provides Marker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesMarkers(): boolean;

        /**
        * This method checks whether this provider currentky provides DomMarker map objects. A concrete implementation of Provider must override it if it currently provides Markers.
        */
        providesDomMarkers(): boolean;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


}


/**
* Namespace: H.map.provider.ImageTileProvider
**/
declare namespace H.map.provider.ImageTileProvider {
    /**
    * Options - This object encapsulates configuration options for an instance of ImageTileProvider.
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted, an auto-generated unique session ID is used. This property must be specified if a consistent ID across sessions is needed (for example for storing provider data).
        */
        uri?: string;

        /**
        * @var {number} min-The minimum supported zoom level, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum supported zoom level, the default is 22
        */
        max?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implementation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

        /**
        * @var {number} tileSize-The size of a tile as edge length in pixels. It must be 2^n where n is in the range [0 ... 30], the default is 256
        */
        tileSize?: number;

        /**
        * @var {Function} getURL-The function to create a URL for the specified tile. If it returns a false, the tile is not requested.
        */
        getURL: Function;

        /**
        * @var {string | boolean} crossOrigin-The CORS settings to use for the image crossOrigin attribute, if omitted or if the value evaluates to false, no CORS settings are used.
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
    * Mark - The invalidation mark. It represents a counter which is increased whenever an invalidation takes place.
    */
    export interface Mark {

    }


}


/**
* Namespace: H.map.provider.MarkerTileProvider
**/
declare namespace H.map.provider.MarkerTileProvider {
    /**
    * Options - This object encapsulates configuration options for an instance of MarkerTileProvider.
    */
    export interface Options {

        /**
        * @var {number} min-The minimal supported zoom level, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximal supported zoom level, the default is 22
        */
        max?: number;

        /**
        * @var {Function} requestData-A function that fetches marker data and creates an array of H.map.AbstractMarker that is passed to the success callback, if the function fails to fetch data, the error callback must be invoked
        */
        requestData: Function;

        /**
        * @var {boolean} providesDomMarkers-indicates if the provided markers are of the type H.map.DomMarker or H.map.Marker, the default is H.map.Marker
        */
        providesDomMarkers?: boolean;

    }


}


/**
* Namespace: H.map.provider.Provider
**/
declare namespace H.map.provider.Provider {
    /**
    * Options - This object defines configuration options for a Provider instance.
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted, an auto-generated unique session ID is used. If a consistent ID across sessions is needed (for example for storing provider data), this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimum supported zoom level, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum supported zoom level, the default is 22
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
    * Options - This object contains configuration options for a TileProvider instance.
    */
    export interface Options {

        /**
        * @var {string} uri-The provider's unique resource identifier which must not contain an underscore "_". If omitted, an auto-generated unique Session ID is used. If a consistent ID across sessions is needed (for example for storing provider data), this property must be specified.
        */
        uri?: string;

        /**
        * @var {number} min-The minimum supported zoom level, the default is 0
        */
        min?: number;

        /**
        * @var {number} max-The maximum supported zoom level, the default is 22
        */
        max?: number;

        /**
        * @var {Function} getCopyrights-A function to replace the default implementation of H.map.provider.Provider#getCopyrights
        */
        getCopyrights: Function;

        /**
        * @var {number} tileSize-The size of a tile given as edge length in pixels. Its value must be 2^n, where n is in range [0 ... 30], default is 256
        */
        tileSize?: number;

    }


}


/**
* Namespace: H.map.render
**/
declare namespace H.map.render {
    /**
    * RenderEngine - This is an abstract class representing a render engine. Render engines are used to render the geographical position from a view model on the screen (viewport element). The rendered result may be different for different engines, because every engine uses its own capabilities and specific implementation to present the current view model data in best possible way. For example, 2D engines create a two-dimensional flat map composed of tiles, while 3D engines can generate panoramas displaying the same coordinates as a 'street view'.
    */
    export class RenderEngine extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {H.map.ViewPort} viewPort - An object representing the map viewport
        * @param {H.map.ViewModel} viewModel - An object representing a view of the map
        * @param {H.map.DataModel} dataModel - An object encapsulating the data to be rendered on the map (layers and objects)
        * @param {Object} options - An object containing the render engine initialization options
        */
        constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: Object): void;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


}


/**
* Namespace: H.map.render.p2d
**/
declare namespace H.map.render.p2d {
    /**
    * RenderEngine - This class implements a map render engine. It presents a geographic location (camera data from a view model) and renders all map layers in the order in which they are provided in a single 2D canvas element.
    */
    export class RenderEngine extends H.map.render.RenderEngine  {

        /**
        * Constructor
        * @param {H.map.ViewPort} viewPort - An object representing the map viewport
        * @param {H.map.ViewModel} viewModel - An object representing a view of the map
        * @param {H.map.DataModel} dataModel - An object encapsulating the data to be rendered on the map (layers and objects)
        * @param {H.map.render.RenderEngine.Options} options - An object containing the render engine initialization options
        */
        constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: H.map.render.RenderEngine.Options): void;

        /**
        * This method sets the length (duration) for all animations run by the render engine.
        * @param {number} duration - A value indicating the duration of animations
        */
        setAnimationDuration(duration: number): void;

        /**
        * This method retrieves the current setting indicating the length of animations (duration) run by the the render engine.
        */
        getAnimationDuration(): number;

        /**
        * This method sets a value indicating the easing to apply to animations run by the render engine.
        * @param {Function} easeFunction - A function that alters the progress ratio of an animation. It receives an argument indicating animation progress as a numeric value in the range between 0 and 1 and must return a numeric value in the same range.
        */
        setAnimationEase(easeFunction: Function): void;

        /**
        * This method retrieves the current setting representing the easing to be applied to animations.
        */
        getAnimationEase(): Function;

        /**
        * This method resets animation settings on the render engine to defaults. duration is set to 300ms and easing to H.util.animation.ease.EASE_OUT_QUAD.
        */
        resetAnimationDefaults(): void;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

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

        /**
        * @var {boolean} noWrap-Indicates whether to wrap the world on longitude axes. When set to false, multiple worlds are rendered. When set to true, only one world will be rendered. Default is false.
        */
        noWrap?: boolean;

    }


}


/**
* Namespace: H.mapevents
**/
declare namespace H.mapevents {
    /**
    * Behavior - This class encapsulates map behavior functionality. It uses map events and adds functionality such as panning and zooming (via the mouse wheel) to the map.
    */
    export class Behavior extends H.util.Disposable  {

        /**
        * @var {number} static DRAGGING-This property indicates if the map responds to user dragging via mouse or touch.
        */
        static DRAGGING: number;

        /**
        * @var {number} static WHEELZOOM-This property indicates if the map zooms in or out in response to mouse wheel events.
        */
        static WHEELZOOM: number;

        /**
        * @var {number} static DBLTAPZOOM-This property indicates if the map zooms in or out in response to double click or double tap. For double tap, multiple touches on the screen cause the map to zoom out.
        */
        static DBLTAPZOOM: number;

        /**
        * Constructor
        * @param {H.mapevents.MapEvents} mapEvents - An object representing a previously initialized map events instance
        * @param {H.mapevents.Behavior.Options} opt_options - An object defining additional options (kinetics)
        */
        constructor(mapEvents: H.mapevents.MapEvents, opt_options?: H.mapevents.Behavior.Options): void;

        /**
        * This method destroys the handling of all map interaction. It should be used when the behavior functionality is disposed of. The Behavior object is disposed of (this function is called) when the attached H.mapevents.MapEvents object is disposed of.
        */
        dispose(): void;

        /**
        * This method disables the behavior functionality for the map.
        * @param {number} opt_behavior - A bitmask indicating behaviors to disable. If no bits are set in the bitmask, all behaviors will be disabled.
        */
        disable(opt_behavior?: number): void;

        /**
        * This method re-enables the behavior functionality for the map.
        * @param {number} opt_behavior - The bitmask of behaviors to enable. If no bits are set in the bitmask, all behaviors will be enabled.
        */
        enable(opt_behavior?: number): void;

        /**
        * This method checks if certain behavior functionality is enabled.
        * @param {number} behavior - A value indicating the functionality to check, for example H.mapevents.Behavior.DRAGGING
        */
        isEnabled(behavior: number): boolean;

    }


    /**
    * ContextMenuEvent - This class represents an event to be fired when a user right-clicks or longpresses on a map object.
    */
    export class ContextMenuEvent extends H.util.Event  {

        /**
        * @var {Array<H.util.ContextItem>} items-This property contains ContextItems that be used to create context menu entries and set by listeners of the "contextmenu" event.
        */
        items: Array<H.util.ContextItem>;

        /**
        * @var {number} viewportX-This property holds the x-position in the map viewport.
        */
        viewportX: number;

        /**
        * @var {number} viewportY-This property holds the y-position in the map viewport.
        */
        viewportY: number;

        /**
        * @var {Object} target-This property holds the target for the event.
        */
        target: Object;

        /**
        * @var {Event} originalEvent-This property holds the original event.
        */
        originalEvent: Event;

        /**
        * @var {Object} currentTarget-This property holds an object with an attached listener.
        */
        currentTarget: Object;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds a value indicating if preventDefault() was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {number} viewportX - The x coordinate of the event location in the viewport
        * @param {number} viewportY - The y coordinate of the event location in the viewport
        * @param {Object} target - The target element of the event
        * @param {Event} originalEvent - An object representing the original event
        */
        constructor(viewportX: number, viewportY: number, target: Object, originalEvent: Event): void;

        /**
        * This method sets the value of the property defaultPrevented. The property can be used to prevent default behavior associated with the given event.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the current event.
        */
        stopPropagation(): void;

    }


    /**
    * Event - This class represents a custom map event. It contains a list of pointers on the map, a list of changed pointers, and the original event. The class inherits from H.util.Event.
    */
    export class Event extends H.util.Event  {

        /**
        * @var {Array<H.mapevents.Pointer>} pointers-This property holds an array of pointers that are currently on the screen.
        */
        pointers: Array<H.mapevents.Pointer>;

        /**
        * @var {Array<H.mapevents.Pointer>} changedPointers-This property holds an array of pointers that have changed in course of event.
        */
        changedPointers: Array<H.mapevents.Pointer>;

        /**
        * @var {Array<H.mapevents.Pointer>} targetPointers-This property holds an array of pointers that are on same target as the current pointer.
        */
        targetPointers: Array<H.mapevents.Pointer>;

        /**
        * @var {H.mapevents.Pointer} currentPointer-This property holds the current pointer.
        */
        currentPointer: H.mapevents.Pointer;

        /**
        * @var {Event} originalEvent-This property holds the original event fired by the browser.
        */
        originalEvent: Event;

        /**
        * @var {Object} target-This property holds the object which triggered the event. It can be a map object (for example a marker or a polyline) or the map itself.
        */
        target: Object;

        /**
        * @var {Object} currentTarget-This property holds an object with an attached listener.
        */
        currentTarget: Object;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds a value indicating if preventDefault() was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {string} type - type of event
        * @param {Array<H.mapevents.Pointer>} pointers - An array of pointers currently on the screen
        * @param {Array<H.mapevents.Pointer>} changedPointers - An array of pointers which changed during event
        * @param {Array<H.mapevents.Pointer>} targetPointers - An array of pointers on the event target
        * @param {H.mapevents.Pointer} currentPointer - A pointer that triggered the event
        * @param {Object} target - The target map object which triggered event
        * @param {Event} originalEvent - The original DOM event
        */
        constructor(type: string, pointers: Array<H.mapevents.Pointer>, changedPointers: Array<H.mapevents.Pointer>, targetPointers: Array<H.mapevents.Pointer>, currentPointer: H.mapevents.Pointer, target: Object, originalEvent: Event): void;

        /**
        * This method sets the value of the property defaultPrevented. The property can be used to prevent default behavior associated with the given event.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the current event.
        */
        stopPropagation(): void;

    }


    /**
    * MapEvents - MapEvents enables the events functionality on the map and on map objects. The class makes it possible to listen to events on map objects such as markers, polylines, polygons, circles and on the map object itself. Events are triggered by user interaction, for example clicking or tapping on the map. Please check the Events Summary section for the list of events fired by this class and by the map objects.
    */
    export class MapEvents extends H.util.Disposable  {

        /**
        * Constructor
        * @param {H.Map} map - An object representing the map used for firing events
        */
        constructor(map: H.Map): void;

        /**
        * This method destroys the MapEvents instance by removing all handlers from the map object. After calling this method, mapEvents and map objects do not trigger any events. This object is disposed of automatically when the corresponding map object is disposed of.
        */
        dispose(): void;

        /**
        * This method retrieves the map object to which events are attached.
        */
        getAttachedMap(): H.Map;

    }


    /**
    * Pointer - This class represents a pointer on the map surface. A pointer in a platform-specific definition can refer to the mouse, touch, pen or any pointing device which can trigger browser events.
    */
    export class Pointer {

        /**
        * @var {number} static viewportX-This property holds the x-coordinate of the pointer in the map viewport
        */
        static viewportX: number;

        /**
        * @var {number} static viewportY-This property holds the y-coordinate of the pointer in the map viewport
        */
        static viewportY: number;

        /**
        * @var {Object} static target-This property holds the map object directly under the pointer. Its value can be null if the pointer is outside the map viewport.
        */
        static target: Object;

        /**
        * @var {number} static id-This property holds the unique identifier of the pointer.
        */
        static id: number;

        /**
        * @var {string} static type-This property holds the identifier of the pointer type, which can be 'mouse', 'touch' or 'pen'.
        */
        static type: string;

        /**
        * @var {Object} static dragTarget-This property holds the object which is currently dragged by the pointer.
        */
        static dragTarget: Object;

        /**
        * @var {H.mapevents.Pointer.Button} static button-This property indicates which pointing device button has changed.
        */
        static button: H.mapevents.Pointer.Button;

        /**
        * Constructor
        * @param {number} viewportX - The pointer position on x-axis
        * @param {number} viewportY - The pointer position on y-axis
        * @param {number} id - unique The pointer identifier among currently available pointers
        * @param {string} type - The identifier of the pointer type, which can be mouse', 'touch', 'pen'
        * @param {H.mapevents.Pointer.Button} opt_button - The identifier of the pointing device button that was used (whose state has changed)
        * @param {H.mapevents.Pointer.Buttons} opt_buttons - The pointing device buttons that is being pressed.
        */
        constructor(viewportX: number, viewportY: number, id: number, type: string, opt_button?: H.mapevents.Pointer.Button, opt_buttons?: H.mapevents.Pointer.Buttons): void;

    }


    /**
    * WheelEvent - This class represents an event fired when the mouse wheel is turned, with the mouse pointer on the map. It contains information about the cursor position and the map object directly under the mouse pointer.
    */
    export class WheelEvent extends H.util.Event  {

        /**
        * @var {number} delta-This property holds a value indicating the wheel move delta.
        */
        delta: number;

        /**
        * @var {number} viewportX-This property holds a value indicating map viewport x-position.
        */
        viewportX: number;

        /**
        * @var {number} viewportY-This property holds a value indicating map viewport y-position.
        */
        viewportY: number;

        /**
        * @var {Object} target-This property holds the target for the event.
        */
        target: Object;

        /**
        * @var {Event} originalEvent-This property holds the original mouse wheel event object.
        */
        originalEvent: Event;

        /**
        * @var {Object} currentTarget-This property holds an object with an attached listener.
        */
        currentTarget: Object;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds a value indicating if preventDefault() was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * Constructor
        * @param {number} deltaY - The wheel move delta on the y-axis
        * @param {number} viewportX - The x-coordinate of the event in the viewport
        * @param {number} viewportY - The y-coordinate of the event in the viewport
        * @param {Object} target - The target element of the event
        * @param {Event} originalEvent - An object representing the original event
        */
        constructor(deltaY: number, viewportX: number, viewportY: number, target: Object, originalEvent: Event): void;

        /**
        * This method sets the value of the property defaultPrevented. The property can be used to prevent default behavior associated with the given event.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the current event.
        */
        stopPropagation(): void;

    }


}


/**
* Namespace: H.mapevents.Behavior
**/
declare namespace H.mapevents.Behavior {
    /**
    * Options - This typedef defines configuration (initialization) properties for the Behavior class.
    */
    export interface Options {

        /**
        * @var {H.util.kinetics.IKinetics} kinetics-The parameters for the kinetic movement.
        */
        kinetics?: H.util.kinetics.IKinetics;

        /**
        * @var {number} enabled-A bitmask indicating the behavior functionality to enable, for example H.mapevents.Behavior.DRAGGING. All are enabled by default.
        */
        enabled?: number;

    }


}


/**
* Namespace: H.mapevents.Pointer
**/
declare namespace H.mapevents.Pointer {
    /**
    * Button - This enumeration defines identifiers for button types.
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
    * Buttons - This property indicates which pointer device buttons are being pressed. The value of the property is a bit mask, where:
    */
    export interface Buttons {

    }


}


/**
* Namespace: H.math
**/
declare namespace H.math {
    /**
    * BitMask - This property holds a bitmap based on a signed 32-bit integer (JS restriction). The range is [-2,147,483,648 ... 2,147,483,647] or [-2^31 ... 2^31 â 1].
    */
    export interface BitMask {

    }


    /**
    * IPoint - This interface represents a two-dimensional point defined in terms of its x and y coordinates (screen coordinate values).
    */
    export interface IPoint {

        /**
        * @var {number} x-This property represents the x-coordinate of the point.
        */
        x: number;

        /**
        * @var {number} y-This property represents the y-coordinate of the point.
        */
        y: number;

    }


    /**
    * ISize - This interface represents a two-dimensional size consisting a with and a height.
    */
    export interface ISize {

        /**
        * @var {number} w-This property represents the width attribute.
        */
        w: number;

        /**
        * @var {number} h-This property represents the height attribute.
        */
        h: number;

    }


    /**
    * Point - This class represents a two-dimensional point, defined by its x and y coordinates.
    */
    export class Point implements H.math.IPoint  {

        /**
        * @var {number} x-This property represents the x-coordinate of the point.
        */
        x: number;

        /**
        * @var {number} y-This property represents the y-coordinate of the point.
        */
        y: number;

        /**
        * Constructor
        * @param {number} x - coordinate of the point
        * @param {number} y - coordinate of the point
        */
        constructor(x: number, y: number): void;

        /**
        * This method sets the x and y coordinate of the point.
        * @param {number} x - A value indicating the x-coordinate
        * @param {number} y - A value indicating the y-coordinate
        */
        set(x: number, y: number): void;

        /**
        * This method this creates a copy of the current point.
        * @param {H.math.Point} opt_out - An optional point object to store the copied values
        */
        clone(opt_out?: H.math.Point): H.math.Point;

        /**
        * This method adds the coordinates of the point supplied by the caller to the coordinates of the given point.
        * @param {H.math.IPoint} other - An object whose coordinates are to be added to those of the given point
        */
        add(other: H.math.IPoint): H.math.Point;

        /**
        * This method subtract the coordinates of the point supplied by the caller from the coordinates from the given point.
        * @param {H.math.IPoint} other - An object representing the point whose coordinates are to be subtracted from those of the given point
        */
        sub(other: H.math.IPoint): H.math.Point;

        /**
        * This method scales the coordinates of the given point by the factor(s) provided by the caller.
        * @param {number} factor - A value indicating the multiplication factor
        * @param {number} opt_factorY - An optional value indicating the multiplication factor for the y-coordinate; if omitted, only factor is used
        */
        scale(factor: number, opt_factorY?: number): H.math.Point;

        /**
        * This method rounds the x and y coordinates of the given point.
        */
        round(): H.math.Point;

        /**
        * This method rounds the x and y coordinates of the given point down to the next smaller integer values.
        */
        floor(): H.math.Point;

        /**
        * This method rounds the x and y coordinates of the given point up to the next greater integer values.
        */
        ceil(): H.math.Point;

        /**
        * This method compares two points by checking if their coordinates are equal.
        * @param {H.math.IPoint} other - An object representing the point to which to compare the given point
        */
        equals(other: H.math.IPoint): boolean;

        /**
        * This method calculates the closest point on the line specified by the caller to the given point.
        * @param {H.math.IPoint} start - A an object representing the start point of the line
        * @param {H.math.IPoint} end - A an object representing the end point of the line
        */
        getNearest(start: H.math.IPoint, end: H.math.IPoint): H.math.IPoint;

        /**
        * This method calculates the distance to a point supplied by the caller.
        * @param {H.math.IPoint} other - An object representing the point to which the distance is to be calculated
        */
        distance(other: H.math.IPoint): number;

        /**
        * This method creates a Point instance from the IPoint object provided by the caller.
        * @param {H.math.IPoint} iPoint - An object implementing IPoint
        */
        static  fromIPoint(iPoint: H.math.IPoint): H.math.Point;

    }


    /**
    * Rect - This class defines a rectangle in two-dimensional geometric space. It is used to represent the area in projected space.
    */
    export class Rect {

        /**
        * Constructor
        * @param {number} left - An x-value indicating the left edge of the rectangle
        * @param {number} top - A y-value indicating the top edge of the rectangle
        * @param {number} right - An x-value indicating the right edge of the rectangle
        * @param {number} bottom - A y-value indicating the bottom edge of the rectangle
        */
        constructor(left: number, top: number, right: number, bottom: number): void;

        /**
        * This method sets the values of the edges of the rectangle.
        * @param {number} left - An x-value indicating the left edge of the rectangle
        * @param {number} top - A y-value indicating the top edge of the rectangle
        * @param {number} right - An x-value indicating the right edge of the rectangle
        * @param {number} bottom - A y-value indicating the bottom edge of the rectangle
        */
        set(left: number, top: number, right: number, bottom: number): void;

        /**
        * This method retrieves the top-left vertex of the rectangle.
        */
        getTopLeft(): H.math.Point;

        /**
        * This method retrieves the bottom-right vertex of the rectangle.
        */
        getBottomRight(): H.math.Point;

        /**
        * This method checks if the provided coordinates lie within the rectangle.
        * @param {number} x - The value of the x-coordinate to check
        * @param {number} y - The value of the y-coordinate to check
        */
        containsXY(x: number, y: number): boolean;

        /**
        * This method creates a rectangle from a top-left and bottom-right point pair.
        * @param {H.math.IPoint} topLeft - The top-left vertex of the rectangle
        * @param {H.math.IPoint} bottomRight - The bottom-right vertex of the rectangle
        */
        static  fromPoints(topLeft: H.math.IPoint, bottomRight: H.math.IPoint): H.math.Rect;

        /**
        * This method clones the given rectangle.
        */
        clone(): H.math.Rect;

    }


    /**
    * Size - This class represents a size defines in terms of width and height.
    */
    export class Size implements H.math.ISize  {

        /**
        * @var {number} w-This property represents the width attribute.
        */
        w: number;

        /**
        * @var {number} h-This property represents the height attribute.
        */
        h: number;

        /**
        * Constructor
        * @param {number} width - A value indicating width
        * @param {number} height - A value indicating height
        */
        constructor(width: number, height: number): void;

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
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Categories - Categories endpoint is used to obtain the place categories available for a given location. The Place Categories endpoint represents sets of locally relevant categories that are organized in a directed acyclic graph. The category graph may change in the future and may differ depending on the location of the request. For more visti Places API documentation
    */
    export class Categories {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Explore - The Explore endpoint retrieves a list of relevant places nearby a given position or area. It answers the question "What interesting places are in the viewport of the map?" The results presented to the user are confined to those located in the current map view or search area and are ordered by popularity. For more visit Places API documentation
    */
    export class Explore {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Here - The Here endpoint answers the questions "Where am I?" and "What's right here where I am standing?" The search results consist of a list of places with addresses that lie within the vicinity of the search location. The feature is typically used by applications that include "check-in" or "click on map to get more information" options. For more visit Places API documentation
    */
    export class Here {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Lookup - Lookup Endpoint provides ability to find a place by its foreign ID. For more visti Places API Documentation
    */
    export class Lookup {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Search - The Search endpoint processes text string queries based on the user's input to find specific places. It answers questions of "what" and "where" for an online search of POI or address. For more visit Places API documentation
    */
    export class Search {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

    }


    /**
    * Suggest - The Search Suggestions endpoint represents lists of suggested search terms related to a given (partial) search term and location context. This endpoint is used to help users to provide suggested search terms to the user while typing. For more visti Places API Documentation
    */
    export class Suggest {

        /**
        * Constructor
        * @param {H.service.PlacesService} service - 
        */
        constructor(service: H.service.PlacesService): void;

        /**
        * Executes request to endpoint.
        * @param {H.service.ServiceParameters} params - encapsulates URL parameters to be sent to endpoint.
        * @param {Object} headers - required by the endpoint
        * @param {Function} onResult - callback that gets triggered with the full response of the request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        request(params: H.service.ServiceParameters, headers: Object, onResult: Function, onError: Function): void;

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
        constructor(obj: Object, service: H.service.PlacesService): void;

        /**
        * Follows available href by executing ajax get request against it.
        * @param {Function} onResult - gets called when result of follow request gets completed
        * @param {Function} onError - gets called if something goes wrong when trying to follow link
        * @param {Object} queryParams - contains additional query params that should be passed when following link.
        */
        follow(onResult: Function, onError: Function, queryParams: Object): void;

    }


    /**
    * PostLink - PostLink - is abstraction that wraps passed object and creates method for executing POST request against href value of the object.
    */
    export class PostLink {

        /**
        * Constructor
        * @param {Object} obj - 
        */
        constructor(obj: Object): void;

        /**
        * Executes post ajax request against object's href property with data as a body
        * @param {Object} body - of the POST request
        * @param {Function} onResult - gets called when result of post request gets completed
        * @param {Function} onError - gets called if something goes wrong when trying to post
        * @param {Object} queryParams - contains additional query params that should be passed when posting
        */
        post(body: Object, onResult: Function, onError: Function, queryParams: Object): void;

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
        constructor(resultSet: Object, service: H.service.PlacesService): void;

        /**
        * Follow next link is a Ajax GET request.
        * @param {Function} onResult - callback that gets triggered with the full response of the next request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        fetchNext(onResult: Function, onError: Function): void;

        /**
        * Follow previous link is a Ajax GET request.
        * @param {Function} onResult - callback that gets triggered with the full response of the next request.
        * @param {Function} onError - callback gets triggered in case of network errors or in case of invalid request
        */
        fetchPrevious(onResult: Function, onError: Function): void;

    }


}


/**
* Namespace: H.service
**/
declare namespace H.service {
    /**
    * AbstractRestService - This is an abstract REST service class.
    */
    export class AbstractRestService implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {Object} opt_options - An object containing initialization options
        */
        constructor(opt_options?: Object): void;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * EnterpriseRoutingService - Extends: H.service.AbstractRestService
    */
    export class EnterpriseRoutingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.EnterpriseRoutingService.Options} opt_options - An object containing initialization options for EnterpriseRoutingService
        */
        constructor(opt_options?: H.service.EnterpriseRoutingService.Options): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateRouteParams - An object containing the service parameters to be sent with the routing request
        * @param {Function} onResult - A function to be called when the Enterprise Routing REST API provides a response to the request
        * @param {Function} onError - A function to be called if a communication error occurs during the JSON-P request
        */
        calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} getRouteParams - An object containing the service parameters to be sent with the route request
        * @param {Function} onResult - A function to be called once the Enterprise Routing REST API provides a response to the request
        * @param {Function} onError - A function to be called if a communication error occurs during the JSON-P request
        */
        getRoute(getRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} getLinkInfoParams - An object containing the service parameters to be sent with the request
        * @param {Function} onResult - A function to be called when the Enterprise Routing REST API provides a response to the request
        * @param {Function} onError - A function to be called if a communication error occurs during the JSON-P request
        */
        getLinkInfo(getLinkInfoParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateIsolineParams - An object containing the service parameters to be sent with the routing request.
        * @param {Function} onResult - A function to be called when the Enterprise Routing REST API provides a response to the request.
        * @param {Function} onError - A function to be called if a communication error occurs during the JSON-P request
        */
        calculateIsoline(calculateIsolineParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * GeocodingService - This class encapsulates the Geocoding REST API in a service stub, providing methods to access its resources.
    */
    export class GeocodingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.GeocodingService.Options} opt_options - An object containing configuration options for GeocodingService
        */
        constructor(opt_options?: H.service.GeocodingService.Options): void;

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} geocodingParams - An object containing the service parameters to be sent with the geocoding request.
        * @param {Function} onResult - A callback function to be called once the Geocoder REST API provides a response to the request.
        * @param {Function} onError - A callback function to be called if a communication error occurs during the JSON-P request
        */
        geocode(geocodingParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} reverseGeocodingParams - An object containing the service parameters to be sent with the reverse geocoding request
        * @param {Function} onResult - A callback function to be called once the Geocoder REST API provides a response to the request.
        * @param {Function} onError - A callback function to be called if a communication error occurs during the JSON-P request
        */
        reverseGeocode(reverseGeocodingParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Please refer to the Geocoder REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} searchParams - An object containing the service parameters to be sent with the landmark search request
        * @param {Function} onResult - A callback function to be called once the Geocoder REST API provides a response to the request
        * @param {Function} onError - A callback function to be called if a communication error occurs during the JSON-P request
        */
        search(searchParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * IConfigurable - This interface represents an object that can be configured with credentials, settings, etc., by the H.service.Platform.
    */
    export interface IConfigurable {

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * JsonpRequestHandle - This type represents a handle object.
    */
    export interface JsonpRequestHandle {

        /**
        * @var {number} id-The internal ID of the request
        */
        id: number;

        /**
        * @var {Function} cancel-A callback function to be invoked to cancel the request
        */
        cancel: Function;

    }


    /**
    * MapTileService - This class encapsulates a map tile end point of the HERE Map Tile API.
    */
    export class MapTileService extends H.util.EventTarget  implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {H.service.MapTileService.Options} opt_options - An object containing the configuration options for MapTileService
        */
        constructor(opt_options?: H.service.MapTileService.Options): void;

        /**
        * This method retrieves the map tile type provided by this service.
        */
        getType(): string;

        /**
        * This method retrieves a hash representing the newest version of the given map tile service.
        */
        getVersion(): string;

        /**
        * This method retrieves meta information for the map tile service. It returns an object if the data associated with the given map tile service has been fetched.
        */
        getInfo(): H.service.MapTileService.Info | any;

        /**
        * This method creates a tile provider which uses the specified map tiles. This provider can be used as a data source for an ImageTileLayer.
        * @param {string} tileType - An identifier of the tile type
        * @param {string} scheme - An identifier of the tile scheme
        * @param {number} tileSize - A value indicating the tile size
        * @param {string} format - An identifier of the tile image format
        * @param {H.service.ServiceParameters} opt_additionalParameters - a hash of additional parameters to be sent to the HERE Map Tile API with each tile request.
        * @param {H.service.TileProviderOptions} opt_options - An object containing a set of options for the tile provider object
        */
        createTileProvider(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_options?: H.service.TileProviderOptions): H.map.provider.ImageTileProvider;

        /**
        * This method creates a tile layer. This layer can be used as a layer on the map data model.
        * @param {string} tileType - An identifier of the tile type
        * @param {string} scheme - An identifier of the tile scheme
        * @param {number} tileSize - A value indicating the tile size
        * @param {string} format - An identifier of the tile image format
        * @param {H.service.ServiceParameters} opt_additionalParameters - a hash of additional parameters to be sent to the HERE Map Tile API with each tile request.
        * @param {number} opt_opacity - A value indicating the opacity of the tile layer
        * @param {boolean} opt_dark - A Boolean value indicating whether the content of this layer is mainly dark, the default is false. See also H.Map.Options#autoColor
        * @param {H.service.TileProviderOptions} opt_options - An object specifying an additional set of options for the provider
        */
        createTileLayer(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_opacity?: number, opt_dark?: boolean, opt_options?: H.service.TileProviderOptions): H.map.layer.TileLayer;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * MapType - This property specifies the map type. A map type is an object holding tile layers corresponding to a map type (for example 'normal', 'satellite' or 'terrain'). A map type contains at least a map property which defines the basic map layer for a given map type. In addition, it can contain other map layers, for example base, xbase, traffic, etc.
    */
    export interface MapType {

        /**
        * @var {H.map.layer.TileLayer} map-The basic map tiles with all features and labels
        */
        map: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} mapnight-The basic map tiles with all features and labels (night mode)
        */
        mapnight: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} xbase-Map tiles without features and labels
        */
        xbase?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} xbasenight-Map tiles without features and labels (night mode)
        */
        xbasenight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} base-Map tiles without labels
        */
        base?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} basenight-Map tiles without labels (night mode)
        */
        basenight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} traffic-Map tiles with traffic flow highlighting
        */
        traffic?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} trafficnight-Map tiles with traffic flow highlighting (night mode)
        */
        trafficnight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} transit-Map tiles with public transit lines highlighted
        */
        transit?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} panorama-Map tiles highlighting areas with HERE StreetLevel coverage
        */
        panorama?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} panoramanight-Map tiles highlighting areas with HERE StreetLevel coverage (night mode)
        */
        panoramanight?: H.map.layer.TileLayer;

        /**
        * @var {H.map.layer.TileLayer} labels-Transparent map tiles with labels only
        */
        labels?: H.map.layer.TileLayer;

    }


    /**
    * PlacesService - This service implements a low-level Places REST API access. Please refer to Restful API documentation for providing parameters and handling response objects.
    */
    export class PlacesService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.PlacesService.Options} opt_options - An object containing the configuration options
        */
        constructor(opt_options?: H.service.PlacesService.Options): void;

        /**
        * Example
        * @param {string} entryPoint - An identifier indicating one of the available entry points (H.service.PlacesService.EntryPoint), for example, H.service.PlacesService.EntryPoint.SEARCH
        * @param {Object} entryPointParams - An object containing map key value pairs to be transformed into the URL parameters. For entry point parameters description, please refer to Places RESTful API documentation documentation for available parameters for chose entry point
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs (for example request timeout)
        */
        request(entryPoint: string, entryPointParams: Object, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'search' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} searchParams - An object containing Places API search entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        search(searchParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'suggestions' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} suggestParams - An object containing Places API 'suggest' entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        suggest(suggestParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'explore' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} exploreParams - An object containing Places API 'explore' entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        explore(exploreParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'around' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} aroundParams - An object containing Places API 'around' entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        around(aroundParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'here' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} hereParams - An object containing Places API 'here' entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        here(hereParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method triggers the Places API 'categories' entry point. Please refer to documentation for parameter specification and response handling.
        * @param {H.service.ServiceParameters} categoriesParams - An object containing Places API 'categories' entry point parameters, please refer to Places API documentation
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        */
        categories(categoriesParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * Example
        * @param {string} hyperlink - A string containing a hyperlink to follow
        * @param {Function} onResult - A callback which is called when result is available
        * @param {Function} onError - A callback which is called when an error occurs
        * @param {Object} opt_additionalParameters - An object containing additional parameters to send with the request
        */
        follow(hyperlink: string, onResult: Function, onError: Function, opt_additionalParameters?: Object): H.service.JsonpRequestHandle;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Platform - Platform is a central class from which all other service stubs are created. It contains the shared settings to be passed to the individual service stubs, for example the root URL of the platform, application credentials, etc.
    */
    export class Platform {

        /**
        * Constructor
        * @param {H.service.Platform.Options} options - An object containing configuration options
        */
        constructor(options: H.service.Platform.Options): void;

        /**
        * This method attempts to configure an object that implements H.service.IConfigurable.
        * @param {H.service.IConfigurable} configurable - The object to configure
        */
        configure(configurable: H.service.IConfigurable): H.service.IConfigurable;

        /**
        * This method enables or disables HTTPS communication with the platform.
        * @param {boolean} useHTTPS - A Boolean value indicating whether to communicate with the platform via HTTPS (true) or not (false)
        */
        setUseHTTPS(useHTTPS: boolean): void;

        /**
        * This method sets a flag indicating whether to use the "customer integration testing" instance of the platform.
        * @param {boolean} useCIT - A Boolean value indicating whether the CIT platform instance is to be used (true) or not (false)
        */
        setUseCIT(useCIT: boolean): void;

        /**
        * This method modifies the base URL to be used when creating service stubs.
        * @param {H.service.Url} baseUrl - The new base URL to use
        */
        setBaseUrl(baseUrl: H.service.Url): void;

        /**
        * This method retrieves the currently used base URL.
        */
        getBaseUrl(): H.service.Url;

        /**
        * This method returns an instance of H.service.TrafficIncidentsService to query the Traffic API Traffic Incident Data
        */
        getTrafficIncidentsService(): H.service.TrafficIncidentsService;

        /**
        * This method retrieves an instance of H.service.MapTileService to query the Map Tile API.
        * @param {H.service.MapTileService.Options} opt_options - An object representing the map tile service configuration options
        */
        getMapTileService(opt_options?: H.service.MapTileService.Options): H.service.MapTileService;

        /**
        * This method retrieves an instance of H.service.venues.Service to query the Venue Maps API.
        * @param {H.service.venues.Service.Options} opt_params - An object containing service configuration parameters
        */
        getVenueService(opt_params?: H.service.venues.Service.Options): H.service.venues.Service;

        /**
        * This method returns an instance of H.service.metaInfo.Service to query the Map Tile API Metainfo Tiles
        * @param {H.service.metaInfo.Service.Options} opt_params - additional service parameters
        */
        getMetaInfoService(opt_params?: H.service.metaInfo.Service.Options): H.service.metaInfo.Service;

        /**
        * Example
        * @param {H.service.Platform.DefaultLayersOptions | number} opt_tileSize - If this parameter is a number, it indicates the tile size to be queried from the HERE Map Tile API (the default value is 256); if this parameter is an object, it represents configuration options for the layer and all the remaining parameters (below) should be omitted
        * @param {number} opt_ppi - optional A 'ppi' parameter to use when querying tiles, the default is not specified
        * @param {string} opt_lang - An optional identifier of the primary language parameter, the default is not specified
        * @param {string} opt_secondaryLang - An optional identifier of the secondary language parameter, the default is not specified
        * @param {string} opt_style - An optional 'style' parameter to use when querying map tiles, the default is not specified
        * @param {string | boolean} opt_pois - A Boolean value indicating if POIs are displayed on the map (true) or a mask for the POI Categories as described in the Map Tile API documentation POI Categories. By default POIs are disabled.
        */
        createDefaultLayers(opt_tileSize?: H.service.Platform.DefaultLayersOptions | number, opt_ppi?: number, opt_lang?: string, opt_secondaryLang?: string, opt_style?: string, opt_pois?: string | boolean): {normal: H.service.MapType, satellite: H.service.MapType, terrain: H.service.MapType};

        /**
        * This method retrieves an instance of H.service.RoutingService to query the Routing API.
        * @param {H.service.RoutingService.Options} opt_options - An object containing RoutingService configuration options
        */
        getRoutingService(opt_options?: H.service.RoutingService.Options): H.service.RoutingService;

        /**
        * This method retrieves an instance of H.service.GeocodingService to query the Geocoder API.
        * @param {H.service.GeocodingService.Options} opt_options - An optional set of options for the new geocoding service to connect to
        */
        getGeocodingService(opt_options?: H.service.GeocodingService.Options): H.service.GeocodingService;

        /**
        * This method retrieves an instance of H.service.PlacesService to query the Places API.
        */
        getPlacesService(): H.service.PlacesService;

        /**
        * This method retrieves an instance of H.service.EnterpriseRoutingService to query the Enterprise Routing API.
        * @param {H.service.EnterpriseRoutingService.Options} opt_options - An object containing EnterpriseRoutingService configuration options
        */
        getEnterpriseRoutingService(opt_options?: H.service.EnterpriseRoutingService.Options): H.service.EnterpriseRoutingService;

        /**
        * This method returns an instance of H.service.extension.platformData.Service to query the Platform Data Extension API.
        * @param {H.service.extension.platformData.Service.Options} opt_options - The service options object
        */
        getPlatformDataService(opt_options?: H.service.extension.platformData.Service.Options): H.service.extension.platformData.Service;

        /**
        * Returns a new instance of H.service.extension.geofencing.Service to query the Geofencing Extension API.
        * @param {H.service.extension.geofencing.Service.Options} opt_options - An object containing the service options
        */
        getGeofencingService(opt_options?: H.service.extension.geofencing.Service.Options): H.service.extension.geofencing.Service;

        /**
        * To obtain a new instance of H.service.extension.customLocation.Service to query the CLE API.
        * @param {H.service.extension.customLocation.Service.Options} opt_options - The options to configure the service.
        */
        getCustomLocationService(opt_options?: H.service.extension.customLocation.Service.Options): H.service.extension.customLocation.Service;

        /**
        * Returns a new instance of H.service.extension.customRoute.Service to query the Custom Route Extension API.
        * @param {H.service.extension.customRoute.Service.Options} opt_options - An object containing the service options
        */
        getCustomRoutingService(opt_options?: H.service.extension.customRoute.Service.Options): H.service.extension.customRoute.Service;

    }


    /**
    * RoutingService - This class encapsulates the Routing REST API as a service stub. An instance of this class can be obtained by calling the factory method on a platform instance, H.service.Platform#getRoutingService.
    */
    export class RoutingService extends H.service.AbstractRestService  {

        /**
        * Constructor
        * @param {H.service.RoutingService.Options} opt_options - An object containing initialization options
        */
        constructor(opt_options?: H.service.RoutingService.Options): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateRouteParams - An object containing the service parameters to be sent with the routing request.
        * @param {Function} onResult - A callback function to be called once the Routing REST API provides a response to the request.
        * @param {Function} onError - A callback function to be called if a communication error occurs during the JSON-P request
        */
        calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Please refer to the Routing REST API documentation for information on available parameters and the response object structure.
        * @param {H.service.ServiceParameters} calculateRouteParams - An object containing the service parameters to be sent with the routing request.
        * @param {Function} onResult - A callback function to be called once the Routing REST API provides a response to the request.
        * @param {Function} onError - A callback function to be called if a communication error occurs during the JSON-P request
        */
        calculateIsoline(calculateRouteParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
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
    * TileProviderOptions - This type defines options which are used to initialize a tile provider.
    */
    export interface TileProviderOptions {

        /**
        * @var {boolean} crossOrigin-The string to be set for the crossOrigin attribute for loaded images
        */
        crossOrigin?: boolean;

    }


    /**
    * TrafficIncidentsProvider - This class represents a traffic incidents provider which requests traffic incident data from the platform traffic incidents service and converts it to map objects.
    */
    export class TrafficIncidentsProvider {

        /**
        * @var {number} min-This property holds the minimum zoom level at which the provider can server data. The value is set at construction time.
        */
        min: number;

        /**
        * @var {number} max-This property holds the maximum zoom level at which the provider can server data. The value is set at construction time.
        */
        max: number;

        /**
        * @var {string} uid-This property holds a unique identifier for the provider instance. The value is generated at construction time.
        */
        uid: string;

        /**
        * @var {number} tileSize-This property holds the size of a tile expressed as the length of the tile side in pixels. It must be 2^n, where n is in the range [0 ... 30], default is 256.
        */
        tileSize: number;

        /**
        * Constructor
        * @param {H.service.TrafficIncidentsService} service - An object representing a traffic incidents service that serves incidents data
        * @param {number} opt_refreshTime - A value indicating an interval between provider tiles updates (in ms), defaults to 3 minutes
        * @param {H.service.ServiceParameters} opt_additionalParameters - An object containing an additional set of URL parameters
        */
        constructor(service: H.service.TrafficIncidentsService, opt_refreshTime?: number, opt_additionalParameters?: H.service.ServiceParameters): void;

        /**
        * This method adds a listener for a specific event triggered by the object.
        * @param {string} type - An indicator of the event type
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that monitoring for the event is to include the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object representing the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target
        * @param {string} type - An indicator of the event type
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that monitoring for the event is to include the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object representing the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the event target object.
        * @param {H.util.Event | string} evt - An object representing the event or the identifier of the event
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the TrafficIncidentsProvider object is being disposed of.
        * @param {Function} callback - The callback function to invoke
        * @param {Object} opt_scope - An object representing the scope for the callback
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

        /**
        * Note: This function must be overridden by any class derived from Provider. The default implementation returns null.
        * @param {H.geo.Rect} bounds - The bounding area for which to retrieve the copyright information
        * @param {number} level - The zoom level for which to retrieve the copyright information
        */
        getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;

        /**
        * This method request a tile.
        * @param {number} x - A value indicating the row number of the tile
        * @param {number} y - A value indicating the column number of the tile
        * @param {number} z - A value indicating the zoom level for which the tile is requested
        * @param {boolean} cacheOnly - A value indicating whether only cached tiles are to be considered (true)
        */
        requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | any;

        /**
        * This method cancels a tile request based on the tile coordinates (column, row) and zoom level.
        * @param {number} x - A value indicating the row number of the tile
        * @param {number} y - A value indicating the column number of the tile
        * @param {number} z - A value indicating the zoom level for which the tile is requested
        */
        cancelTile(x: number, y: number, z: number): void;

        /**
        * This method cancels a tile request based on a tile key.
        * @param {string} tileKey - The key identifying the tile
        */
        cancelTileByKey(tileKey: string): void;

        /**
        * This method creates a tile key consisting of the provider's UID, and the x, y and z coordinates of the tile, seperated by underscores, for example "4711_7_42_23".
        * @param {number} x - A value indicating the row number of the tile
        * @param {number} y - A value indicating the column number of the tile
        * @param {number} z - A value indicating the zoom level for which the tile is requested
        */
        getTileKey(x: number, y: number, z: number): string;

        /**
        * This method retrieves a tile cache.
        */
        getCache(): H.util.Cache;

        /**
        * This method request a tile from the remote service.
        * @param {number} x - A value indicating the row number of the requested tile
        * @param {number} y - A value indicating the column number of the requested tile
        * @param {number} z - A value indicating the zoom level for which the tile is requested
        * @param {Function} onResponse - A function which is called when the response arrives
        * @param {Function} onError - A function which is called if a communication error occurs
        */
        requestInternal(x: number, y: number, z: number, onResponse: Function, onError: Function): H.util.ICancelable;

        /**
        * Two reload modes are supported:
        * @param {boolean} hard - A Boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
        */
        reload(hard: boolean): void;

        /**
        * This method signals to the given provider that a map object has changed. The method marks the tile that contains the object as invalid and triggers a call to dispatchUpdate().
        * @param {H.map.AbstractMarker} marker - The map object to be invalidated
        * @param {H.math.BitMask} flags - The flags indicating the types of changes that occurred
        */
        invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask): void;

        /**
        * This method checks whether the given provider provides H.map.DomMarker objects.
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
        constructor(opt_options?: H.service.TrafficIncidentsService.Options): void;

        /**
        * This method requests traffic incidents based on the service parameters provided.
        * @param {H.service.ServiceParameters} serviceParams - 
        * @param {Function} onResult - 
        * @param {Function} onError - 
        */
        requestIncidents(serviceParams: H.service.ServiceParameters, onResult: Function, onError: Function): H.service.JsonpRequestHandle;

        /**
        * This method requests traffic incident information by tile coordinates
        * @param {number} x - tile column number
        * @param {number} y - tile row number
        * @param {number} z - zoom level
        * @param {Function} onResult - callback to handle service response
        * @param {Function} onError - callback to handle communication error
        * @param {H.service.ServiceParameters} opt_serviceParams - optional service parameters to be added to the request
        */
        requestIncidentsByTile(x: number, y: number, z: number, onResult: Function, onError: Function, opt_serviceParams?: H.service.ServiceParameters): H.service.JsonpRequestHandle;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Url - This class represents a URL with elements such as the scheme, host/domain, path, etc. Use the static parse method to populate a new URL object from a URL string. Be aware that URLs with user and password, for example, "ftp://user:password@foo.bar/", are not supported.
    */
    export class Url {

        /**
        * Constructor
        * @param {string} scheme - The URL scheme (e.g. "http" or "https" or "mailto")
        * @param {string} host - The host (or domain) part of the URL
        * @param {string} opt_path - The path following the host, pointing to a resource
        * @param {Object} opt_params - The query string parameters of the URL
        * @param {number} opt_port - The port on the host on which the host listens (if the value is provided as a string, it must be convertible to an integer)
        * @param {string} opt_anchor - An optional anchor part of the URL (usually preceded by '#');
        */
        constructor(scheme: string, host: string, opt_path?: string, opt_params?: Object, opt_port?: number, opt_anchor?: string): void;

        /**
        * This method parses a URL string and returns a Url object. The URL string must contain at least a scheme and a host.
        * @param {string} url - The URL string to parse
        * @param {string} opt_baseURL - The base URL to use to resolve relative URLs. If omitted, the method uses the base URL of the document which loaded the API
        */
        static  parse(url: string, opt_baseURL?: string): H.service.Url;

        /**
        * This method clones the given URL object. Optionally, mutations can be passed to this method to modify properties of the cloned object. Note that URL parameters are not replaced but merged with the parameters of the given instance.
        */
        clone(): H.service.Url;

        /**
        * This method sets the scheme of the given URL object.
        * @param {string} scheme - The new scheme
        */
        setScheme(scheme: string): H.service.Url;

        /**
        * This method retrieves the scheme for the given Url object.
        */
        getScheme(): string;

        /**
        * This method sets the host for the given Url object.
        * @param {string} host - The new host
        */
        setHost(host: string): H.service.Url;

        /**
        * This method retrieves the host name from the given Url object.
        */
        getHost(): string;

        /**
        * This method sets the path for the given Url object.
        * @param {string | any} path - A string containing the new path or undefined to clear the path
        */
        setPath(path: string | any): H.service.Url;

        /**
        * This method retrieves the path part of the given Url object.
        */
        getPath(): string | any;

        /**
        * This method sets the specified parameters for the given Url object. Keys in this object, which are associated with undefined values, are treated as query string parameters with no value.
        * @param {Object} params - A hash of query string parameters specifying the parameters to be set or a undefined to clear the parameters.
        */
        setQuery(params: Object): H.service.Url;

        /**
        * This method retrieves a Boolean value indicating whether there are any query string parameter associated with the given Url.
        */
        hasQuery(): boolean;

        /**
        * This method retrieves the query object of the given Url object.
        */
        getQuery(): Object;

        /**
        * This method sets the anchor for the given Url object.
        * @param {string | boolean | any} anchor - The new anchor or undefined to clear the anchor
        */
        setAnchor(anchor: string | boolean | any): H.service.Url;

        /**
        * This method retrieves the anchor from the given Url object.
        */
        getAnchor(): string | any;

        /**
        * Example
        * @param {Object} other - The parameters to be merged into the existing query string parameters
        */
        mergeQuery(other: Object): H.service.Url;

        /**
        * This method adds a sub-domain to the host in the given Url object.
        * @param {string} subDomain - The sub domain (a non-empty string) to be added
        */
        addSubDomain(subDomain: string): H.service.Url;

        /**
        * This method adds a sub-path to the given Url's path.
        * @param {string} subPath - The path to be added
        */
        addSubPath(subPath: string): H.service.Url;

        /**
        * This method retrieves a string representation of the given Url object.
        */
        toString(): string;

    }


}


/**
* Namespace: H.service.EnterpriseRoutingService
**/
declare namespace H.service.EnterpriseRoutingService {
    /**
    * Options - This type encapsulates the configuration (initialization) options for a EnterpriseRoutingService.
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the routing service relative to the platform's base URL, the default is 'route'
        */
        subDomain?: string;

        /**
        * @var {string} path-The path of the map tile service, the default is "routing/7.2"
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-The base URL of the service, the default is the the platform's base URL if the given instance was created using H.service.Platform#getEnterpriseRoutingService method
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.GeocodingService
**/
declare namespace H.service.GeocodingService {
    /**
    * Options - This type encapsulates configuration (initialization) options for an instance of GeocodingService.
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the geo-coding service relative to the platform's base URL, the default is 'geocoder'
        */
        subDomain?: string;

        /**
        * @var {string} reverseSubDomain-The sub-domain of the reverse geo-coding service relative to the geo-coding subdomain, the default is 'reverse'
        */
        reverseSubDomain?: string;

        /**
        * @var {string} path-The path of the Geocoding service, the default is '6.2'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-An optional base URL if it differs from the platform's default base URL
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.MapTileService
**/
declare namespace H.service.MapTileService {
    /**
    * Info - This type encapsulates information about a MapTileService.
    */
    export interface Info {

        /**
        * @var {Object} maps-Identifiers of the supported map types
        */
        maps: Object;

        /**
        * @var {Object} schemes-Identifiers of the supported map tile schemes
        */
        schemes: Object;

        /**
        * @var {Object} tiletypes-Identifiers of the supported map tile types
        */
        tiletypes: Object;

        /**
        * @var {Object} formats-Identifiers of the supported map tile image formats
        */
        formats: Object;

        /**
        * @var {Object} resolutions-Identifiers of the supported map tile resolutions
        */
        resolutions: Object;

        /**
        * @var {Object} languages-Identifiers of the supported map tile languages
        */
        languages: Object;

    }


    /**
    * Options - The type defines the configuration (initialization) options for a MapTileService.
    */
    export interface Options {

        /**
        * @var {string} type-The type of the map tile service with which to communicate, for example 'base' (default), 'aerial', etc. (Refer to HERE Map Tile API documentation for available types)
        */
        type?: string;

        /**
        * @var {string} version-The map version hash to use for retrieving tiles, the default is the newest and it is automatically updated
        */
        version?: string;

        /**
        * @var {string} subDomain-The sub-domain of the map tile service relative to the platform's base URL, the default is 'maps'
        */
        subDomain?: string;

        /**
        * @var {string} path-The path of the map tile service, the default is 'maptile/2.1'
        */
        path?: string;

    }


}


/**
* Namespace: H.service.PlacesService
**/
declare namespace H.service.PlacesService {
    /**
    * EntryPoint - This object contains a list of available entry points.
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
    * Options - This type defines configuration (initialization) options for a PlacesService instance.
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the PlacesService relative to the platform's base URL, the default is 'places'
        */
        subDomain?: string;

        /**
        * @var {string} path-The path of the PlacesService, the default is 'places/v1'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-An optional base URL if it differs from the platform's default base URL
        */
        baseUrl?: H.service.Url;

    }


}


/**
* Namespace: H.service.Platform
**/
declare namespace H.service.Platform {
    /**
    * DefaultLayersOptions - This type encapsulates options used to create default layers.
    */
    export interface DefaultLayersOptions {

        /**
        * @var {number} tileSize-A value indicating the tile size to be queried from the HERE Map Tile API, the default is 256
        */
        tileSize?: number;

        /**
        * @var {number} ppi-A ppi parameter to use when querying tiles, the default is not specified
        */
        ppi?: number;

        /**
        * @var {string} lg-An optional identifier of the primary language, the default is not specified
        */
        lg?: string;

        /**
        * @var {string} lg2-An optional identifier of the secondary language, the default is not specified
        */
        lg2?: string;

        /**
        * @var {string} style-An optional 'style' definition to use when querying map tiles, the default is not specified
        */
        style?: string;

        /**
        * @var {boolean} pois-A value indicating if POIs are displayed on the map (true). By default POIs are disabled.
        */
        pois?: boolean;

        /**
        * @var {string | boolean} crossOrigin-A Boolean indicating if CORS headers should be used for default layers (false) means that CORS headers are not set, defaults to 'anonymous'; note that storing of content is not possible if crossOrigin is not set to true; see also H.Map#storeContent
        */
        crossOrigin: string | boolean;

    }


    /**
    * Options - This type encapsulates the configuration (initialization) options for an instance of Platform.
    */
    export interface Options {

        /**
        * @var {string} app_id-The application ID to identify the client against the platform (mandatory)
        */
        app_id: string;

        /**
        * @var {string} app_code-The application code to identify the client against the platform (mandatory)
        */
        app_code: string;

        /**
        * @var {H.service.Url} baseUrl-The base URL of the platform, the default is http://api.here.com
        */
        baseUrl?: H.service.Url;

        /**
        * @var {boolean} useCIT-A Boolean indicating whether the Customer Integration Testing should be used, the default is false
        */
        useCIT?: boolean;

        /**
        * @var {boolean} useHTTPS-A Boolean indicating whether secure communication should be used, the default is false
        */
        useHTTPS?: boolean;

    }


}


/**
* Namespace: H.service.RoutingService
**/
declare namespace H.service.RoutingService {
    /**
    * Options - This type encapsulates configuration (initialization) options for an instance of RoutingService.
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the routing service relative to the platform's base URL, the default is 'route'
        */
        subDomain?: string;

        /**
        * @var {string} path-The path of the routing service, the default is 'routing/7.2'
        */
        path?: string;

        /**
        * @var {H.service.Url} baseUrl-An optional base URL if it differs from the platform's default base URL
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
        * @param {H.service.metaInfo.Service.Options} opt_options - An optional service parameters
        */
        constructor(opt_options?: H.service.metaInfo.Service.Options): void;

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
        * @param {number} pixelRatio - The pixel ratio to use for over-sampling in cases of high-resolution displays
        * @param {Array<string>} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
        * @param {H.service.ServiceParameters} opt_additionalParameters - Additional parameters for the meta info service
        * @param {string} opt_tileType - The tile type (default is 'maptile')
        * @param {string} opt_scheme - The scheme for which the meta info tiles a requested (default is 'normal.day')
        */
        createTileProvider(tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string): H.map.provider.TileProvider;

        /**
        * This method creates a tile layer. This layer can be used as a layer on a map's data model.
        * @param {number} tileSize - The tile size
        * @param {number} pixelRatio - The tile's pixel ratio, should be aligned with base map tile
        * @param {Array<string>} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
        * @param {H.service.ServiceParameters} opt_additionalParameters - Additional parameters for the meta info service
        * @param {string} opt_tileType - The tile type (default is 'maptile')
        * @param {string} opt_scheme - The scheme for which the meta info tiles a requested (default is 'normal.day')
        */
        createTileLayer(tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string): H.map.layer.TileLayer;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
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
        constructor(service: H.service.metaInfo.Service | H.service.MapTileService, opt_params?: H.service.ServiceParameters, opt_options?: H.service.metaInfo.TileProvider.Options): void;

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
        * @var {string} type-The type of the map tile service to communicate with, e.g. 'base' (default), 'aerial', etc. (Refer to HERE Map Tile API documentation for available types)
        */
        type?: string;

        /**
        * @var {string} version-The map version hash to use for retrieving tiles, default is newest and will be automatically updated
        */
        version?: string;

        /**
        * @var {string} subDomain-The sub-domain of the map tile service relative to the platform's base URL, default is 'maps'
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
    * Building - The class represents a building in the venue hierarchy (see H.service.venues.Venue) and holds the floors that belong to the building.
    */
    export class Building extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of the given venue building
        * @param {string} uid - A unique identifier of the building
        * @param {number} minLevel - The minimum floor level in the building
        * @param {number} maxLevel - The maximum floor level in the building
        */
        constructor(provider: Object, uid: string, minLevel: number, maxLevel: number): void;

        /**
        * This method retrieves the parent object - venue (see H.service.venues.Venue) to which the given building belongs.
        */
        getVenue(): H.service.venues.Venue;

        /**
        * This method retrieves the minimum floor level in the given building.
        */
        getMinLevel(): number;

        /**
        * This method retrieves the maximum floor level of the given building
        */
        getMaxLevel(): number;

        /**
        * This method retrieves a floor (see H.service.venues.Floor) if it is loaded. This method does not fetch the floor data.
        * @param {number} level - The floor level within the range defined by the minimum and maximum floor levels for the given building
        */
        getFloor(level: number): H.service.venues.Floor | any;

    }


    /**
    * Floor - The class represents the floor object in the venue hierarchy (see H.service.venues.Venue). The class holds information about the floor geometry and spaces (see H.service.venues.Space) that belong to the floor.
    */
    export class Floor extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of the given venue floor
        * @param {any} data - An object containing the meta data of the given floor
        * @param {number} level - A value indicating the floor level
        */
        constructor(provider: Object, data: any, level: number): void;

        /**
        * This method retrieves a value indicating the floor level in the building.
        */
        getLevel(): number;

        /**
        * This method retrieves the map geometry that represents the boundaries for the given floor.
        */
        getFloorSpace(): H.service.venues.Space | any;

        /**
        * This method retrieves the H.map.Group of all spaces that belong to the floor.
        */
        getSpaces(): H.map.Group;

        /**
        * This method retrieves the parent object - building (see H.service.venues.Building) - for the given floor.
        */
        getBuilding(): H.service.venues.Building;

        /**
        * This method retrieves raw data associated with the given floor. For more details on data formats, see http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-floor.html
        */
        getData(): any;

        /**
        * This method retrieves the space object that belongs to the given floor, using the ID provided by the caller.
        * @param {string} id - The ID of the space
        */
        getSpace(id: string): H.service.venues.Space | any;

    }


    /**
    * Service - This class encapsulates methods to call Venue Maps API endpoints.
    */
    export class Service extends H.util.EventTarget  implements H.service.IConfigurable  {

        /**
        * Constructor
        * @param {H.service.venues.Service.Options} opt_options - An object containing service configuration parameters
        */
        constructor(opt_options?: H.service.venues.Service.Options): void;

        /**
        * Example
        * @param {H.service.ServiceParameters} serviceParams - The service parameters to be sent with the discovery request
        * @param {Function} onResult - A function to be called once the Venue Maps API provides a response to the request
        * @param {Function} onError - A function to be called if a communication error occurs during the processing of the request, with the error type as an argument
        */
        discover(serviceParams: H.service.ServiceParameters, onResult: Function, onError: Function): void;

        /**
        * Example
        * @param {H.service.venues.TileProvider.Options} opt_options - An object containing tile provider options
        */
        createTileLayer(opt_options?: H.service.venues.TileProvider.Options): H.map.layer.TileLayer;

        /**
        * This method retrieves the current state of the service.
        */
        getState(): H.service.venues.Service.State;

        /**
        * Example
        * @param {string} appId - The application ID to identify the client against the platform (mandatory)
        * @param {string} appCode - The application code to identify the client against the platform (mandatory)
        * @param {boolean} useHTTPS - The indicator whether secure communication is used (true), the default is false
        * @param {boolean} useCIT - A value indicating whether Customer Integration Testing ("CIT") is used (true), the default is false
        * @param {H.service.Url} opt_baseUrl - The base URL of the platform, the default is http://api.here.com. Note that if the useHTTPS flag is set to true, the URL scheme specified in the opt_baseUrl is overridden to use HTTPS.
        */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;

    }


    /**
    * Space - This class represents a space in a venue. Each space object contains associated data, which can be retrieved by using the method H.service.venues.Space#getData.
    */
    export class Space {

        /**
        * Constructor
        * @param {Object} provider - The provider of the given object.
        * @param {string} uid - The unique identifier of the space object
        * @param {any} data - The meta data for the space object
        */
        constructor(provider: Object, uid: string, data: any): void;

        /**
        * This method returns type of this space. See Space IATileMember documentation in Venue Maps API for more information.
        */
        getType(): string;

        /**
        * The method indicates whether the spatial object represents the whole floor space or a space within a floor boundaries that belongs to the floor.
        */
        isFloorSpace(): boolean;

        /**
        * Example
        * @param {H.map.SpatialStyle | H.map.SpatialStyle.Options} labelStyle - An object containing a custom label style
        */
        initLabelStyle(labelStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options): void;

        /**
        * This method retrieves the parent object - floor (see H.service.venues.Floor) - of the space.
        */
        getFloor(): H.service.venues.Floor;

        /**
        * This method retrieves the raw data associated with the space. For more details on data formats, see http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-space.html.
        */
        getData(): Object;

    }


    /**
    * TileProvider - This class represents a Venue Maps tile provider which requests venues tiles from a platform venue tile service.
    */
    export class TileProvider extends H.map.provider.RemoteTileProvider  {

        /**
        * Constructor
        * @param {H.service.venues.Service} service - An object representing the venue tile service
        * @param {H.service.venues.TileProvider.Options} opt_options - An object containing configuration options
        */
        constructor(service: H.service.venues.Service, opt_options?: H.service.venues.TileProvider.Options): void;

        /**
        * This method specifies which floor level of the venues must be fetched by provider. The floor level is global to all venues and defaults to 0.
        * @param {number} level - A value indicating the floor level to fetch
        */
        setCurrentLevel(level: number): void;

        /**
        * This method retrieves the floor level that provider uses for tile fetching.
        */
        getCurrentLevel(): number;

    }


    /**
    * Venue - The class represents a venue and is the root for the venue object hierarchy. The venue inherits from H.map.Group and holds building objects (see H.service.venues.Building). Building objects hold floor objects (see H.service.venues.Floor) and inherit from H.map.Group as well. The leaf objects are spaces (see H.service.venues.Space) that are spatial map objects and reside inside floor containers.
    */
    export class Venue extends H.map.Group  {

        /**
        * Constructor
        * @param {Object} provider - The object provider of the given venue
        * @param {string} uid - The unique identifier of the venue
        */
        constructor(provider: Object, uid: string): void;

        /**
        * This method retrieves the building object that belongs to the venue, using the ID provided by the caller. The method doesn't attempt to fetch building data.
        * @param {string} id - The ID of the building
        */
        getBuilding(id: string): H.service.venues.Building | any;

        /**
        * This method retrieves a map of all loaded buildings associated with the given venue.
        */
        getBuildings(): Object;

    }


}


/**
* Namespace: H.service.venues.Service
**/
declare namespace H.service.venues.Service {
    /**
    * Options - The type encapsulates configuration (initialization) options for a Service instance.
    */
    export interface Options {

        /**
        * @var {string} subDomain-The sub-domain of the Venue Maps service relative to the platform's base URL, the default is 'venue.maps'
        */
        subDomain?: string;

        /**
        * @var {string} path-The path to append after the host name when making requests to the Venue Maps API, the default is an empty string
        */
        path?: string;

    }


    /**
    * State - This enumeration defines identifiers for the state types of the H.service.venues.Service. The possible states types are:
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
    * Options - This configuration object defines configuration (initialization) options for a TileProvider.
    */
    export interface Options {

        /**
        * @var {number} tileCacheSize-The number of fully rendered spatial tiles that are cached for immediate reuse, the default is 32
        */
        tileCacheSize?: number;

        /**
        * @var {number} pixelRatio-The pixel ratio to use for over-sampling when a high-resolution display is in use
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
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {any} child - The child element to be added
        */
        addChild(child: any): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * DistanceMeasurement - This class represents a distance measurement control. The control helps in calculate distances between geographical locations, which the user selects by clicking on the map.
    */
    export class DistanceMeasurement extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.DistanceMeasurement.Options} opt_options - Optional parameters to be passed to this control
        */
        constructor(opt_options?: H.ui.DistanceMeasurement.Options): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * InfoBubble - This class represents an information bubble bound to a geographic position on the map.
    */
    export class InfoBubble extends H.ui.base.Element  {

        /**
        * Constructor
        * @param {H.geo.IPoint} position - The geographic location to which this info bubble corresponds
        * @param {H.ui.InfoBubble.Options} opt_options - An object containing optional initialization parameters to be passed to the info bubble
        */
        constructor(position: H.geo.IPoint, opt_options?: H.ui.InfoBubble.Options): void;

        /**
        * Note: Disposing of an info bubble does not automatically remove it from the UI's info bubble collection. Please call H.ui.UI#removeBubble before disposing of an info bubble instance.
        */
        dispose(): void;

        /**
        * This method sets the geographic location of the given info bubble.
        * @param {H.geo.IPoint | H.geo.Point} position - An object defining the geographic location of the bubble
        */
        setPosition(position: H.geo.IPoint | H.geo.Point): void;

        /**
        * This method retrieves the current state of the info bubble instance.
        */
        getState(): H.ui.InfoBubble.State;

        /**
        * This method sets the state of the info bubble.
        * @param {H.ui.InfoBubble.State} state - A value indicating the new state of the info bubble
        */
        setState(state: H.ui.InfoBubble.State): void;

        /**
        * This method closes the info bubble (setting its state to CLOSED).
        */
        close(): void;

        /**
        * This method opens the info bubble (setting its state to OPEN).
        */
        open(): void;

        /**
        * Note: The content element is null before the info bubble has been added to a UI object.
        */
        getContentElement(): HTMLElement;

        /**
        * This methods sets the content of the info bubble. This can either be a string (applied as innerHTML) to the content element of the given info bubble or an HTML node to be appended to the content element.
        * @param {string | Node} content - An object representing the content for the given bubble
        */
        setContent(content: string | Node): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * LayoutAlignment - This enumeration holds values indicating the possible layout alignments for UI elements.
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
    * MapSettingsControl - This class represents a menu control allowing the user to select the map type.
    */
    export class MapSettingsControl extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.MapSettingsControl.Options} opt_options - Optional initialization parameters for the given control object
        */
        constructor(opt_options?: H.ui.MapSettingsControl.Options): void;

        /**
        * Setting this layer to false value hides the button.
        * @param {H.map.layer.Layer} incidentsLayer - An object representing the incidents layer
        */
        setIncidentsLayer(incidentsLayer: H.map.layer.Layer): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Overview - This class represents a small overview of the main map.
    */
    export class Overview extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.map.layer.Layer} baseLayer - The layer to use to display the overview map
        * @param {H.ui.Overview.Options} opt_options - Optional initialization parameters
        */
        constructor(baseLayer: H.map.layer.Layer, opt_options?: H.ui.Overview.Options): void;

        /**
        * This method method sets the base layer of the overview map.
        * @param {H.map.layer.TileLayer} baseLayer - An object representing the base layer
        */
        setBaseLayer(baseLayer: H.map.layer.TileLayer): H.ui.Overview;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Pano - This class represents the UI controls for panorama
    */
    export class Pano extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.Pano.Options} opt_options - The optional parameters to be passed to the map.
        */
        constructor(opt_options?: H.ui.Pano.Options): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {H.ui.base.Element} child - The child element to be added
        */
        addChild(child: H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * ScaleBar - This class represents a UI element that shows the zoom scale.
    */
    export class ScaleBar extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.ScaleBar.Options} opt_options - Optional parameters to be passed to this scale bar object.
        */
        constructor(opt_options?: H.ui.ScaleBar.Options): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * UI - This class encapsulates map UI functionality.
    */
    export class UI extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {H.Map} map - An object repreenting the map
        * @param {H.ui.UI.Options} opt_options - An optional object containing the initialization parameters.
        */
        constructor(map: H.Map, opt_options?: H.ui.UI.Options): void;

        /**
        * This method retrieves the root element of the user interface.
        */
        getElement(): Element;

        /**
        * This method retrieves the map instance to which the UI was added.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the current distance measurement system for the given UI instance.
        */
        getUnitSystem(): H.ui.UnitSystem;

        /**
        * This method sets the distance measurement system for the given UI object.
        * @param {H.ui.UnitSystem} unitSystem - The distance measurement system to use
        */
        setUnitSystem(unitSystem: H.ui.UnitSystem): void;

        /**
        * This method toggles distance measurement system between H.ui.UnitSystem.METRIC and H.ui.UnitSystem.IMPERIAL.
        */
        toggleUnitSystem(): void;

        /**
        * This method adds an info bubble to the UI.
        * @param {H.ui.InfoBubble} bubble - The info bubble to be added
        */
        addBubble(bubble: H.ui.InfoBubble): void;

        /**
        * This method removes a previously added info bubble from the UI.
        * @param {H.ui.InfoBubble} bubble - The info bubble to be removed
        */
        removeBubble(bubble: H.ui.InfoBubble): void;

        /**
        * This method retrieves a list of info bubble objects which are currently attached to the UI.
        */
        getBubbles(): Array<H.ui.InfoBubble>;

        /**
        * This method appends a control to the UI.
        * @param {string} name - The name under which to register the control
        * @param {H.ui.Control} control - The control to add to the UI
        */
        addControl(name: string, control: H.ui.Control): void;

        /**
        * This method removes a previously registered control from the UI object.
        * @param {string} name - The name under which the control was previously registered
        */
        removeControl(name: string): H.ui.Control;

        /**
        * This method retrieves a UI control which was previously registered with the provided name.
        * @param {string} name - The name under which the control was registered
        */
        getControl(name: string): H.ui.Control;

        /**
        * This function creates the default UI including the zoom control, map settings control and scalebar and panorama discovery control. The default controls are assigned the following values:
        * @param {H.Map} map - The map instance to which to append the UI
        * @param {Object} mapTypes - The map types to use
        * @param {H.ui.i18n.Localization | string} opt_locale - The language to use (or a full localization object).
        */
        static  createDefault(map: H.Map, mapTypes: Object, opt_locale: H.ui.i18n.Localization | string): H.ui.UI;

    }


    /**
    * UnitSystem - This enumeration defines identifiers for the supported distance measurement systems for the UI.
    */
    export enum UnitSystem {

        /**
        * IMPERIAL - This value represents the imperial unit system, using miles and feet (value: 'imperial').
        */
        IMPERIAL,

        /**
        * METRIC - This value represents the metric unit system, using meters and kilometers, etc (value: 'metric').
        */
        METRIC,

    }


    /**
    * ZoomControl - This class represents the UI control that allows the user to change the map zoom level.
    */
    export class ZoomControl extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.ZoomControl.Options} opt_options - An object containing initialization parameters.
        */
        constructor(opt_options?: H.ui.ZoomControl.Options): void;

        /**
        * This method retrieves the zoom speed (in levels per millisecond) which is applied when the button is pressed constantly.
        */
        getZoomSpeed(): number;

        /**
        * This method sets the zoom speed (in levels per millisecond) which is applied when the button is pressed constantly.
        * @param {number} zoomSpeed - A value indicating the zoom speed
        */
        setZoomSpeed(zoomSpeed: number): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * ZoomRectangle - This class represents a zoom rectangle control element that allows zooming to the selected area on the screen.
    */
    export class ZoomRectangle extends H.ui.Control  {

        /**
        * @var {any} el-This property holds the container element for the given control object once it is rendered into a UI.
        */
        el: any;

        /**
        * Constructor
        * @param {H.ui.ZoomRectangle.Options} opt_options - An object containing optional initialization parameters
        */
        constructor(opt_options?: H.ui.ZoomRectangle.Options): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the UI object distance measurement system changes.
        * @param {H.ui.UnitSystem} unitSystem - An identifier indicating the distance measurement system the UI currently uses
        */
        onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

        /**
        * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
        * @param {H.Map.EngineType} engineType - An identifier of the engine type the map currently uses
        */
        onMapEngineTypeChange(engineType: H.Map.EngineType): void;

        /**
        * Note: This method returns null if called before any controls have been added to a UI object.
        */
        getMap(): H.Map;

        /**
        * This method retrieves the localization object which corresponds to the current locale of the UI.
        */
        getLocalization(): H.ui.i18n.Localization;

        /**
        * This method retrieves a value indicating layout alignment for the given control.
        */
        getAlignment(): H.ui.LayoutAlignment;

        /**
        * Elements with the same layout alignments are lined up in the directions of the arrows in the illustration.
        * @param {H.ui.LayoutAlignment} alignment - A value indicating the new alignment of the control
        */
        setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {H.ui.base.Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: H.ui.base.Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


}


/**
* Namespace: H.ui.DistanceMeasurement
**/
declare namespace H.ui.DistanceMeasurement {
    /**
    * Options - This object defines configuration (initialization) properties for an instance of DistanceMeasurement.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-A value indicating the layout alignment to apply to this control, the default is H.ui.LayoutAlignment.RIGHT_BOTTOM
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {H.map.Icon} startIcon-The icon to use for the first measurement point
        */
        startIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} stopoverIcon-The icon to use for the intermediate measurement points
        */
        stopoverIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} endIcon-The icon to use for the last measurement point
        */
        endIcon?: H.map.Icon;

        /**
        * @var {H.map.Icon} splitIcon-The icon to use to indicate the position under the pointer over the line where a new point will be created once user clicks
        */
        splitIcon?: H.map.Icon;

        /**
        * @var {H.map.SpatialStyle | H.map.SpatialStyle.Options} lineStyle-The style to use for connecting lines of the measurement points
        */
        lineStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options;

        /**
        * @var {Function} distanceFormatter-An optional function used for formatting a distance. By default, distance measurement tool does the formatting according to the specified measurement unit (see H.ui.UI.Options#unitSystem)
        */
        distanceFormatter?: Function;

    }


}


/**
* Namespace: H.ui.InfoBubble
**/
declare namespace H.ui.InfoBubble {
    /**
    * Options - This typedef defines the configuration (initialization) properties of an InfoBubble instance.
    */
    export interface Options {

        /**
        * @var {Function} onStateChange-A callback to be invoked when the sate of the info bubble changes
        */
        onStateChange?: Function;

        /**
        * @var {string | Node} content-The content to be added to the info bubble
        */
        content: string | Node;

    }


    /**
    * State - This enumeration defines identifiers for the state applicable to an info bubble.
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
    * Options - This typedef defines the configuration options (initialization options) for the MapSettingsControl.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-The layout alignment which should be applied to the given control object, the default is H.ui.LayoutAlignment.BOTTOM_RIGHT
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {Array<H.ui.MapSettingsControl.MapTypeEntry>} entries-The map type entries to be shown in the given map settings control
        */
        entries?: Array<H.ui.MapSettingsControl.MapTypeEntry>;

        /**
        * @var {H.map.layer.Layer} incidents-An object representing the traffic incidents layer to be activated by the map settings control
        */
        incidents: H.map.layer.Layer;

    }


    /**
    * MapTypeEntry - The map type entry is an object containing a display name and a map type object to which it refers.
    */
    export interface MapTypeEntry {

        /**
        * @var {string} name-A label which describes the map type
        */
        name: string;

        /**
        * @var {H.service.MapType} mapType-A reference to the map type object
        */
        mapType: H.service.MapType;

    }


}


/**
* Namespace: H.ui.Overview
**/
declare namespace H.ui.Overview {
    /**
    * Options - This typedef defines the configuration (initialization) properties for an object representing an overview map.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-A value indicating the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {number} zoomDelta-option defines the delta between the zoom levels of the main map and the overview map (defaults to 3)
        */
        zoomDelta?: number;

        /**
        * @var {number} scaleX-A value that defines the ratio between the view port width of the main map and that of the overview map (defaults to 5, which means that the width of overview map is five times smaller)
        */
        scaleX?: number;

        /**
        * @var {number} scaleY-A value that defines the ratio between map view port height of the main map and that of the overview map (defaults to 5, which means that map view port height of the overview map is five times smaller) @publish
        */
        scaleY?: number;

    }


}


/**
* Namespace: H.ui.Pano
**/
declare namespace H.ui.Pano {
    /**
    * Options - This typedef defines configuration (initialization) properties for a H.ui.Pano instance.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-The layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
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
    * Options - This typedef defines the configuration options (initialization options) for a ScaleBar instance.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-The layout alignment which should be applied to this control, the default is H.ui.LayoutAlignment.BOTTOM_RIGHT
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
        * @var {H.ui.UnitSystem} unitSystem-An optional value indicating the distance measurement system for the UI, the default is H.ui.UnitSystem.METRIC
        */
        unitSystem?: H.ui.UnitSystem;

        /**
        * @var {H.ui.ZoomControl.Options | boolean} zoom-A value indicating the zoom level
        */
        zoom?: H.ui.ZoomControl.Options | boolean;

        /**
        * @var {H.ui.ZoomRectangle.Options | boolean} zoomrectangle-An object containing ZoomRectangle initialization options
        */
        zoomrectangle?: H.ui.ZoomRectangle.Options | boolean;

        /**
        * @var {H.ui.MapSettingsControl.Options | boolean} mapsettings-An object containing MapSettingControl initialization options
        */
        mapsettings?: H.ui.MapSettingsControl.Options | boolean;

        /**
        * @var {H.ui.ScaleBar.Options | boolean} scalebar-An object containing ScaleBar initialization options
        */
        scalebar?: H.ui.ScaleBar.Options | boolean;

        /**
        * @var {H.ui.Pano.Options | boolean} panorama-An object containing panorama initialization options
        */
        panorama?: H.ui.Pano.Options | boolean;

        /**
        * @var {H.ui.DistanceMeasurement.Options | boolean} distancemeasurement-An object containing DistanceMeasurement initialization options
        */
        distancemeasurement?: H.ui.DistanceMeasurement.Options | boolean;

        /**
        * @var {H.ui.i18n.Localization | string} locale-Defines the language in which UI is to be rendered. It can be a predefined H.ui.i18n.Localization object with a custom translation map, or one of following strings, 'en-US', 'de-DE', 'es-ES', 'fi-FI', 'fr-FR', 'it-IT', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'tr-TR', 'zh-CN'. If the property is not specified, the UI uses 'en-US' by default
        */
        locale?: H.ui.i18n.Localization | string;

    }


}


/**
* Namespace: H.ui.ZoomControl
**/
declare namespace H.ui.ZoomControl {
    /**
    * Options - This typedef defines configuration (initialization) properties for a ZoomControl instance.
    */
    export interface Options {

        /**
        * @var {number} zoomSpeed-The zoom speed in levels per millisecond, defaults to 0.004
        */
        zoomSpeed?: number;

        /**
        * @var {H.ui.LayoutAlignment} alignment-The layout alignment which should be applied to the given UI control, defaults to H.ui.LayoutAlignment.RIGHT_MIDDLE
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {boolean} slider-A flag indicating whether to show the slider (true) or not (false, default)
        */
        slider?: boolean;

        /**
        * @var {boolean} sliderSnaps-A flag indicating whether the slider should snap to integer values or not, defaults to false. This option has effect only if slider is enabled.
        */
        sliderSnaps?: boolean;

    }


}


/**
* Namespace: H.ui.ZoomRectangle
**/
declare namespace H.ui.ZoomRectangle {
    /**
    * Options - This typedef defines the configuration (initialization) properties for an instance of ZoomRectangle.
    */
    export interface Options {

        /**
        * @var {H.ui.LayoutAlignment} alignment-A value indicating the layout alignment to be applied to the given control, the default is H.ui.LayoutAlignment.BOTTOM_RIGHT
        */
        alignment?: H.ui.LayoutAlignment;

        /**
        * @var {Function} adjustZoom-An optional function that defines how the zoom level should be changed, by default zoom level is selected to fit the bounding rectangle of the view port.
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
        * @param {H.ui.base.Button.Options} opt_options - Optional parameters to be passed to the button instance
        */
        constructor(opt_options?: H.ui.base.Button.Options): void;

        /**
        * This method retrieves the current state of the button.
        */
        getState(): H.ui.base.Button.State;

        /**
        * This method sets the state of this button.
        * @param {H.ui.base.Button.State} state - A value to which the button is to be set
        * @param {boolean} opt_suppressEvent - An optional flag indicating that the onStateChange callback is not to be invoked
        */
        setState(state: H.ui.base.Button.State, opt_suppressEvent?: boolean): H.ui.base.Button;

        /**
        * This method retrieves the label string for the given button.
        */
        getLabel(): string;

        /**
        * This method sets the label string for the given button object.
        * @param {string} label - The label to set on the given button object
        * @param {boolean} opt_force - A Boolean flag indicating if the new label should be set and propagated even if it has the same value as the current one (true) or not (false).
        */
        setLabel(label: string, opt_force?: boolean): H.ui.base.Button;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Container - This class represents an abstract base class for container UI elements such as Lists and Panels.
    */
    export class Container extends H.ui.base.Element  {

        /**
        * Constructor
        * @param {string} opt_elementType - The rendering HTML element type (the given UI element is to be rendered as this type), the default is div
        * @param {string} opt_className - An optional class name to be used on the given element
        * @param {Array<H.ui.base.Element>} opt_children - Optional child elements to be added to the given container element
        */
        constructor(opt_elementType?: string, opt_className?: string, opt_children?: Array<H.ui.base.Element>): void;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * Element - This class represents the base class for UI elements such as buttons and list entries.
    */
    export class Element extends H.util.EventTarget  {

        /**
        * Constructor
        * @param {string} opt_elementType - The rendering HTML element type (the given UI element is to be rendered as this type), the default is div
        * @param {string} opt_className - An optional class name to apply to the given element
        */
        constructor(opt_elementType?: string, opt_className?: string): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * OverlayPanel - This class represents a panel that points to a control.
    */
    export class OverlayPanel extends H.ui.base.Container  {

        /**
        * This method sets the state of the given panel object.
        * @param {H.ui.base.OverlayPanel.State} state - The state of the given panel object
        * @param {boolean} opt_force - A Boolean value indicating whether the value should be propagated even if it is the same as the current value (true), or not (false)
        */
        setState(state: H.ui.base.OverlayPanel.State, opt_force?: boolean): H.ui.base.OverlayPanel;

        /**
        * This method retrieves the current state of the panel.
        */
        getState(): H.ui.base.OverlayPanel.State;

        /**
        * This method adjusts the alignment of the overlay panel to point to the provided control.
        * @param {H.ui.Control} control - The control to which to point
        */
        pointToControl(control: H.ui.Control): void;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * PushButton - This class represents a button, which keeps its state when pressed. Pressing the button once changes its state to 'down'. Pressing it again changes the state to 'up'.
    */
    export class PushButton extends H.ui.base.Button  {

        /**
        * Constructor
        * @param {H.ui.base.Button.Options} opt_options - Optional parameters to be passed to the given button instance.
        */
        constructor(opt_options?: H.ui.base.Button.Options): void;

        /**
        * This method toggles the state of the button between the two possible button states (see H.ui.base.Button.State).
        */
        toggleState(): H.ui.base.PushButton;

        /**
        * This method retrieves the current state of the button.
        */
        getState(): H.ui.base.Button.State;

        /**
        * This method sets the state of this button.
        * @param {H.ui.base.Button.State} state - A value to which the button is to be set
        * @param {boolean} opt_suppressEvent - An optional flag indicating that the onStateChange callback is not to be invoked
        */
        setState(state: H.ui.base.Button.State, opt_suppressEvent?: boolean): H.ui.base.Button;

        /**
        * This method retrieves the label string for the given button.
        */
        getLabel(): string;

        /**
        * This method sets the label string for the given button object.
        * @param {string} label - The label to set on the given button object
        * @param {boolean} opt_force - A Boolean flag indicating if the new label should be set and propagated even if it has the same value as the current one (true) or not (false).
        */
        setLabel(label: string, opt_force?: boolean): H.ui.base.Button;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


    /**
    * RadioGroup - This class represents a group of push buttons of which only one can be active at a time.
    */
    export class RadioGroup extends H.ui.base.Container  {

        /**
        * Constructor
        * @param {H.ui.base.RadioGroup.Options} opt_options - An optional configuration options
        */
        constructor(opt_options?: H.ui.base.RadioGroup.Options): void;

        /**
        * This method sets the title of the given group.
        * @param {string} title - The new title of this group
        * @param {boolean} opt_force - An optional flag indicating that the new value is to be updated and propagated even if it has the same value as the current title
        */
        setTitle(title: string, opt_force?: boolean): H.ui.base.RadioGroup;

        /**
        * This method retrieves the current title string of the given group.
        */
        getTitle(): string;

        /**
        * This method adds a button element to the given group.
        * @param {H.ui.base.PushButton} button - The button to add
        */
        addButton(button: H.ui.base.PushButton): H.ui.base.RadioGroup;

        /**
        * This method removes a button element from the given group.
        * @param {H.ui.base.PushButton} button - The button to remove
        */
        removeButton(button: H.ui.base.PushButton): H.ui.base.RadioGroup;

        /**
        * This method retrieves the buttons currently registered with the given group.
        */
        getButtons(): Array<H.ui.base.PushButton>;

        /**
        * This method sets the active button of the given radio group.
        * @param {H.ui.base.PushButton} button - The button to be the active button in the radio group
        * @param {boolean} opt_suppressEvent - An optional Boolean flag indicating if no state change event is to be fired true
        */
        setActiveButton(button: H.ui.base.PushButton, opt_suppressEvent?: boolean): void;

        /**
        * This method adds a child element to be rendered within the given container element.
        * @param {typeof H.ui.base.Element} child - The child element to be added
        */
        addChild(child: typeof H.ui.base.Element): H.ui.base.Container;

        /**
        * This method retrieves the child element collection of the given container.
        */
        getChildren(): Array<H.ui.base.Element>;

        /**
        * This method removes a child element from the given container's child element collection.
        * @param {H.ui.base.Element} child - The child element to be removed
        */
        removeChild(child: H.ui.base.Element): void;

        /**
        * This method sets a listener for a specific event triggered by the given element.
        * @param {string} type - The name of the event type
        * @param {Function} handler - An event handler function to be invoked when the event is fired
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the event target.
        * @param {string} type - The name of the event type
        * @param {Function} handler - The previously added event handler
        * @param {boolean} opt_capture - If true, listening is active in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - The scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method is the concrete implementation of the UI element. It receives the pre-rendered HTML element which may be modified by deriving classes.
        * @param {Element} element - The HTML representation of the given UI element
        * @param {Document} doc - The HTML document into which the give UI element is rendered
        */
        renderInternal(element: Element, doc: Document): void;

        /**
        * This method retrieves a value indicating if the given UI element is disabled.
        */
        isDisabled(): boolean;

        /**
        * This method sets a value indicating if the given UI element is disabled.
        * @param {boolean} disabled - true to disable the element, false to enable it
        * @param {boolean} opt_force - An optional Boolean flag indicating that the value should be set and propagated even if it is the same as the current state
        */
        setDisabled(disabled: boolean, opt_force?: boolean): H.ui.base.Element;

        /**
        * This method retrieves previously stored arbitrary data from the given element.
        */
        getData(): any;

        /**
        * This method stores arbitrary data with the given UI element.
        * @param {any} data - The data to be stored
        */
        setData(data: any): void;

        /**
        * Note: If the UI element has not been rendered, the method retrieves null.
        */
        getElement(): HTMLElement;

        /**
        * This method sets a value indicating if the given element is visible.
        * @param {boolean} visibility - true if the given element is visible, otherwise false
        */
        setVisibility(visibility: boolean): void;

        /**
        * This method retrieves a value indicating if the given element is visibile.
        */
        getVisibility(): boolean;

        /**
        * This method adds a CSS class to the given UI element (if it is not already present).
        * @param {string} className - The name of the CSS class to add
        */
        addClass(className: string): H.ui.base.Element;

        /**
        * This method removes a CSS class from the given UI element (if it is present).
        * @param {string} className - The CSS class name to add
        */
        removeClass(className: string): H.ui.base.Element;

    }


}


/**
* Namespace: H.ui.base.Button
**/
declare namespace H.ui.base.Button {
    /**
    * Options - This object defines the configuration (initialization) options for a button object.
    */
    export interface Options {

        /**
        * @var {boolean} disabled-A flag to indicate whether the given button object is disabled, the default is false
        */
        disabled?: boolean;

        /**
        * @var {string} label-The mark-up (used as innerHTML) to be rendered into the given button object
        */
        label?: string;

        /**
        * @var {Function} onStateChange-An event listener for the onstatechange event to be added
        */
        onStateChange?: Function;

        /**
        * @var {any} data-An arbitrary data object to be stored with the given button object
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
    * State - This enumeration defines identifiers for panel states.
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
    * Options - This typedef defines configuration options for a button group.
    */
    export interface Options {

        /**
        * @var {string} title-An optional title string for the given group
        */
        title?: string;

        /**
        * @var {Array<H.ui.base.Button.Options>} buttons-An optional set of button options to be added to the group
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
        * @param {string} locale - A locale code, for example 'en-GB'
        * @param {Object} opt_translationMap - An optional translation map for this locale. If not provided, the Locale is initialized with default translations, if available
        */
        constructor(locale: string, opt_translationMap?: Object): void;

        /**
        * This method retrieves the current locale code, for example 'en-US'.
        */
        getLocale(): string;

        /**
        * This method retrieves translation keys for current locale. Keys from this set can be used to get translations via translate method.
        */
        getKeys(): Array<string>;

        /**
        * This method retrieves a Boolean value indicating whether the given localization object has a translation for the specified translation key.
        * @param {string} key - A transaltion key
        */
        hasKey(key: string): boolean;

        /**
        * This method retrieves translation for the key provided by the caller. It throws an exception if a translation is not available.
        * @param {string} key - A translation key
        */
        translate(key: string): string;

    }


}


/**
* Namespace: H.util
**/
declare namespace H.util {
    /**
    * Cache - The cache represents an in-memory LRU-cache with a fixed size. Once the elements held in the cache reach the maximum permitted size, the cache drops the elements with the oldest retrieval time stamp to bring the size of the cached data within bounds. Data elements held in the cache are stored with their IDs and size to facilitate retrieval.
    */
    export class Cache implements H.util.ICache  {

        /**
        * Constructor
        * @param {number} maxSize - A value indicating the maximum size of the cache
        * @param {Function} opt_onDrop - A callback to be invoked when a data element is dropped from the cache
        * @param {Function} opt_filter - A function to filter data elements that are not to be cached
        */
        constructor(maxSize: number, opt_onDrop?: Function, opt_filter?: Function): void;

        /**
        * This method sets the maximum size of the cache. If the existing contents of the cache exceed the new size, the least recently used data elements are dropped.
        * @param {number} maxSize - A value indicating the new maximum size of the cache
        */
        setMaxSize(maxSize: number): H.util.Cache;

        /**
        * This method retrieves the maximum size of the cache.
        */
        getMaxSize(): number;

        /**
        * This method retrieves the current size of this cache.
        */
        getCurrentSize(): number;

        /**
        * This method adds an element to the cache.
        * @param {any} id - The identifier of this data element, the value is converted to a string.
        * @param {any} data - the actual data to be stored
        * @param {number} size - The size of the data element
        */
        add(id: any, data: any, size: number): boolean;

        /**
        * This method retrieves an element from the cache.
        * @param {string} id - The ID of the data element to be retrieved.
        * @param {boolean} opt_noUpdate - An optional flag to indicate if the retrieved object should not be marked as 'most recently used' (true)
        */
        get(id: string, opt_noUpdate?: boolean): any;

        /**
        * This method explicitly removes an element from the cache.
        * @param {any} id - the id of the item to drop
        */
        drop(id: any): void;

        /**
        * This method executes a callback function on each entry in the cache. If the optional match predicate is specified, the callback is executed only on those entries for which the predicate returns true.
        * @param {Function} callback - The callback to be invoked for each entry
        * @param {Object} opt_ctx - An optional context object to be used as this within the callback
        * @param {Function} opt_matcher - An optional match predicate to filter the entries on which the callback operates
        */
        forEach(callback: Function, opt_ctx?: Object, opt_matcher?: Function): void;

        /**
        * This method removes all data elements from the cache. The caller can provide an optional match predicate to narrow down the selection of data elements to be removed.
        * @param {Function} opt_matcher - An optional function that receives data entry IDs, data and sizes and returns true or false to remove or leave an entry in the cache, respectively
        */
        removeAll(opt_matcher?: Function): void;

        /**
        * This method registers a callback to be called each time an entry is dropped from the cache.
        * @param {Function} callback - The callback to be invoked for each removed entry
        */
        registerOnDrop(callback: Function): void;

    }


    /**
    * ChangeEvent - This event indicates a change. It contains both the old and the new value.
    */
    export class ChangeEvent extends H.util.Event  {

        /**
        * @var {any} target-This property holds the object which triggered the event.
        */
        target: any;

        /**
        * @var {any} currentTarget-This property holds an object that receives notification of the event (via an attached listener).
        */
        currentTarget: any;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds indicates if preventDefault was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * @var {number} CAPTURING_PHASE-This property identifies the current event phase as the capturing phase.
        */
        CAPTURING_PHASE: number;

        /**
        * @var {number} AT_TARGET-This property indicates that the event is being evaluated at the target.
        */
        AT_TARGET: number;

        /**
        * @var {number} BUBBLING_PHASE-This property identifies the current event phase as the bubbling phase.
        */
        BUBBLING_PHASE: number;

        /**
        * @var {number} eventPhase-This property indicates which phase of the event flow is being evaluated.
        */
        eventPhase: number;

        /**
        * Constructor
        * @param {string} type - A value indicating the event type
        * @param {any} newValue - The new value of the property
        * @param {any} oldValue - The previous value of the property
        */
        constructor(type: string, newValue: any, oldValue: any): void;

        /**
        * This method sets a flag that can be used to prevent the default behavior when the even is fired.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the event.
        */
        stopPropagation(): void;

    }


    /**
    * ContextItem - This class represents contextual information/action.
    */
    export class ContextItem extends H.util.EventTarget  {

        /**
        * @var {H.util.ContextItem} static SEPARATOR-This constant represents the separator for the context item.
        */
        static SEPARATOR: H.util.ContextItem;

        /**
        * Constructor
        * @param {H.util.ContextItem.Options} opt_options - An object containing the initialization properties
        */
        constructor(opt_options?: H.util.ContextItem.Options): void;

        /**
        * This method retrieves the label of the context item.
        */
        getLabel(): string;

        /**
        * This method sets the context item label.
        * @param {string} label - A new label for the context item
        */
        setLabel(label: string): H.util.ContextItem;

        /**
        * This method retrieves a value indicating whether the given context item is disabled or not.
        */
        isDisabled(): boolean;

        /**
        * This method enables/disables the context item.
        * @param {boolean} disabled - true to disable and false to enabled the context item
        */
        setDisabled(disabled: boolean): H.util.ContextItem;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Disposable - This class represents an object that can be safely disposed.
    */
    export class Disposable {

        /**
        * This method adds a callback which to be triggered when an object is disposed.
        * @param {Function} callback - A callback function to add
        * @param {Object} opt_scope - An object representing the scope
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Event - This is a base event class which is used for all events dispatched by any instance of EventTarget within the API.
    */
    export class Event {

        /**
        * @var {any} target-This property holds the object which triggered the event.
        */
        target: any;

        /**
        * @var {any} currentTarget-This property holds an object that receives notification of the event (via an attached listener).
        */
        currentTarget: any;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds indicates if preventDefault was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * @var {number} CAPTURING_PHASE-This property identifies the current event phase as the capturing phase.
        */
        CAPTURING_PHASE: number;

        /**
        * @var {number} AT_TARGET-This property indicates that the event is being evaluated at the target.
        */
        AT_TARGET: number;

        /**
        * @var {number} BUBBLING_PHASE-This property identifies the current event phase as the bubbling phase.
        */
        BUBBLING_PHASE: number;

        /**
        * @var {number} eventPhase-This property indicates which phase of the event flow is being evaluated.
        */
        eventPhase: number;

        /**
        * Constructor
        * @param {string} type - Event Type.
        * @param {Object} opt_target - A reference to the object that is the target of the given event. It must implement the EventTarget interface.
        */
        constructor(type: string, opt_target?: Object): void;

        /**
        * This method sets a flag that can be used to prevent the default behavior when the even is fired.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the event.
        */
        stopPropagation(): void;

    }


    /**
    * EventTarget - This class enables listening and dispatching events on all its instances and the derived classes.
    */
    export class EventTarget {

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * ICache - This interface provides a definition for a generic cache. A cache can store any data elements. To facilitate retrieval of these data elements, each has an identifier an a content size attribute.
    */
    export interface ICache {

        /**
        * This method adds an element to the cache.
        * @param {any} id - The identifier of this data element, the value is converted to a string.
        * @param {any} data - the actual data to be stored
        * @param {number} size - The size of the data element
        */
        add(id: any, data: any, size: number): boolean;

        /**
        * This method retrieves an element from the cache.
        * @param {string} id - The ID of the data element to be retrieved.
        * @param {boolean} opt_noUpdate - An optional flag to indicate if the retrieved object should not be marked as 'most recently used' (true)
        */
        get(id: string, opt_noUpdate?: boolean): any;

        /**
        * This method explicitly removes an element from the cache.
        * @param {any} id - the id of the item to drop
        */
        drop(id: any): void;

        /**
        * This method executes a callback function on each entry in the cache. If the optional match predicate is specified, the callback is executed only on those entries for which the predicate returns true.
        * @param {Function} callback - The callback to be invoked for each entry
        * @param {Object} opt_ctx - An optional context object to be used as this within the callback
        * @param {Function} opt_matcher - An optional match predicate to filter the entries on which the callback operates
        */
        forEach(callback: Function, opt_ctx?: Object, opt_matcher?: Function): void;

        /**
        * This method removes all data elements from the cache. The caller can provide an optional match predicate to narrow down the selection of data elements to be removed.
        * @param {Function} opt_matcher - An optional function that receives data entry IDs, data and sizes and returns true or false to remove or leave an entry in the cache, respectively
        */
        removeAll(opt_matcher?: Function): void;

        /**
        * This method registers a callback to be called each time an entry is dropped from the cache.
        * @param {Function} callback - The callback to be invoked for each removed entry
        */
        registerOnDrop(callback: Function): void;

    }


    /**
    * ICancelable - An interface for cancelable requests and actions.
    */
    export interface ICancelable {

        /**
        * This method is used to cancel the current action.
        */
        cancel(): void;

    }


    /**
    * ICapturable - This is an interface for capturable elements.
    */
    export interface ICapturable {

        /**
        * This method is used to capture the element view.
        * @param {HTMLCanvasElement} canvas - The HTML Canvas element to draw the view of the capturable element
        * @param {number} pixelRatio - The pixel ratio to use for over-sampling for high-resolution displays, the default is 1
        * @param {Function} callback - A callback function to call once the result of capture is ready
        * @param {Function} opt_errback - A callback function to call if error occurred during capture
        */
        capture(canvas: HTMLCanvasElement, pixelRatio: number, callback: Function, opt_errback?: Function): void;

    }


    /**
    * OList - This class represents an list of ordered entries which dispatches events when the list is modified.
    */
    export class OList extends H.util.EventTarget  {

        /**
        * This method inserts an entry in the list. Optionally it can place the new entry at the index provided by the caller.
        * @param {any} entry - The entry to insert
        * @param {number} opt_idx - The index where the new entry should be inserted; if omitted or greater then the current size of the list, the entry is added at the end of the list; a negative index is treated as being relative from the end of the list
        */
        add(entry: any, opt_idx?: number): void;

        /**
        * This method removes an entry at the index provided by the caller.
        * @param {number} idx - The index of the entry which should be removed; a negative index is treated as being relative from the end of the list
        */
        removeAt(idx: number): any;

        /**
        * This method removes the first entry which is identical with the entry provided by the caller.
        * @param {any} entry - An object representing the entry to remove
        */
        remove(entry: any): boolean;

        /**
        * This method replaces an entry at the index provided by the caller.
        * @param {number} idx - The index of the entry which should be replaced; a negative index is treated as being relative from the end of the list
        * @param {any} entry - The entry with which to replace an existing entry
        */
        set(idx: number, entry: any): any;

        /**
        * This method retrieves the index of the first object in this list that is identical to the object supplied by the caller.
        * @param {any} entry - The entry for which to return the index
        */
        indexOf(entry: any): number;

        /**
        * This method retrieves the entry at the specified index.
        * @param {number} idx - The index of the entry to get, a negative index is treated as relative from the end of the list
        */
        get(idx: number): any;

        /**
        * This method retrieves the length of the list.
        */
        getLength(): number;

        /**
        * This method retrieves all the entries held in the list as an array.
        */
        asArray(): Array<any>;

        /**
        * This method removes all entries from the list.
        */
        flush(): void;

        /**
        * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
        * @param {string} type - The name of the event
        * @param {Function} handler - An event handler function
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An object defining the scope for the handler function
        */
        addEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method removes a previously added listener from the EventTarget instance.
        * @param {string} type - The name of the event
        * @param {Function} handler - A previously added event handler
        * @param {boolean} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
        * @param {Object} opt_scope - An oject defining the scope for the handler function
        */
        removeEventListener(type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object): void;

        /**
        * This method dispatches an event on the EventTarget object.
        * @param {H.util.Event | string} evt - An object representing the event or a string with the event name
        */
        dispatchEvent(evt: H.util.Event | string): void;

        /**
        * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
        */
        dispose(): void;

        /**
        * This method adds a callback which is triggered when the EventTarget object is being disposed.
        * @param {Function} callback - The callback function.
        * @param {Object} opt_scope - An optional scope for the callback function
        */
        addOnDisposeCallback(callback: Function, opt_scope?: Object): void;

    }


    /**
    * Request - This is a generic class representing a handle for any kind of asynchronous request.
    */
    export class Request {

        /**
        * Constructor
        * @param {Function} opt_onprogress - A callback to invoke every time the progress state of the request changes
        * @param {number} opt_total - The total number of processing steps to complete the request, the default is 1
        */
        constructor(opt_onprogress?: Function, opt_total?: number): void;

        /**
        * This method retrieves the state of the request.
        */
        getState(): H.util.Request.State;

        /**
        * This method retrieves the number of processing steps to complete this request.
        */
        getTotal(): number;

        /**
        * This method retrieves the number of completed request processing steps.
        */
        getProcessed(): number;

        /**
        * This method retrieves the number of failed processing steps.
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
        * @var {string} label-The label for the context item
        */
        label?: string;

        /**
        * @var {boolean} disabled-A flag indicating whether the context item is disabled (true) or not (false, default)
        */
        disabled?: boolean;

        /**
        * @var {Function} callback-Optional callback function to call when the context item is selected
        */
        callback?: Function;

    }


}


/**
* Namespace: H.util.OList
**/
declare namespace H.util.OList {
    /**
    * Event - The class represents an event dispatched by OList.
    */
    export class Event extends H.util.Event  {

        /**
        * @var {any} target-This property holds the object which triggered the event.
        */
        target: any;

        /**
        * @var {any} currentTarget-This property holds an object that receives notification of the event (via an attached listener).
        */
        currentTarget: any;

        /**
        * @var {string} type-This property holds the name of the dispatched event.
        */
        type: string;

        /**
        * @var {boolean} defaultPrevented-This property holds indicates if preventDefault was called on the current event.
        */
        defaultPrevented: boolean;

        /**
        * @var {number} CAPTURING_PHASE-This property identifies the current event phase as the capturing phase.
        */
        CAPTURING_PHASE: number;

        /**
        * @var {number} AT_TARGET-This property indicates that the event is being evaluated at the target.
        */
        AT_TARGET: number;

        /**
        * @var {number} BUBBLING_PHASE-This property identifies the current event phase as the bubbling phase.
        */
        BUBBLING_PHASE: number;

        /**
        * @var {number} eventPhase-This property indicates which phase of the event flow is being evaluated.
        */
        eventPhase: number;

        /**
        * Constructor
        * @param {H.util.OList} list - The OList instance emitting the event
        * @param {Object} type - A value indicating the event type
        * @param {number} idx - The index of the affected list entry
        * @param {any} added - The value of the entry which was added or set
        * @param {any} removed - The value of the entry which was removed or replaced
        * @param {any} moved - The value of the entry which was moved
        */
        constructor(list: H.util.OList, type: Object, idx: number, added: any, removed: any, moved: any): void;

        /**
        * This method sets a flag that can be used to prevent the default behavior when the even is fired.
        */
        preventDefault(): void;

        /**
        * This method stops the propagation of the event.
        */
        stopPropagation(): void;

    }


}


/**
* Namespace: H.util.Request
**/
declare namespace H.util.Request {
    /**
    * State - This enumeration defines the supported request states.
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
    * IKinetics - This interface defines kinetic move parameters used by the map for kinetic drag.
    */
    export interface IKinetics {

        /**
        * @var {number} power-This property hods the value of the power multiplier. It is used to increase the speed of the kinetic move. By default the map uses 1.
        */
        power: number;

        /**
        * @var {number} duration-This property hold the value indicating the duration of the kinetic move.
        */
        duration: number;

        /**
        * Several predefined implementations of this function can be found at H.util.animation.ease namespace.
        * @param {number} progress - A value from [0..1] range indicating the current progress
        */
        ease(progress: number): number;

    }


}
