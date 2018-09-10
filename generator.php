<?php
/**
 * Requests the here maps API docs from the given urls, parse the HTML document and generates a TypeScript definition file.
 *
 * @author kristianb@gmx.net
 * @copyright Copyright (c) 2016
 * @version $Id$
 */
/**
 * Set config
 */
$exportDir = __DIR__;
$exportFile = $exportDir . '/index.d.ts';
$baseDocUrl = 'https://developer.here.com/documentation/maps/topics_api/';

/**
 * Defined namespaces or elements. For some elements we have to correct the online available doc (e.g. wrong isOptional status, wrong implements)
 */
$namespacesConfig = array(
    'H' => array(
        'elements' => array(
            'Map' => array(
                'elements' => array(
                    'BackgroundRange' => array(),
                    'EngineType' => array(),
                    'Options' => array(
                        'properties' => array(
                            'pixelRatio' => array(
                                'isOptional' => true
                            )
                        )
                    ),
                )
            )
        )
    ),

    'H.clustering' => array(
        'elements' => array(
            'DataPoint' => array(
                'implements' => null
            ),
            'ICluster' => array(),
            'INoisePoint' => array(),
            'IResult' => array(),
            'ITheme' => array(),
            'Provider' => array(
                'methods' => array(
                    'requestSpatialsByTile' => array(
                        'parameters' => array(
                            'tile' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'ClusteringOptions' => array(),
                    'Options' => array(),
                    'Strategy' => array(),
                )
            ),
        )
    ),

    'H.data' => array(
        'elements' => array(
            'AbstractReader' => array(
                'elements' => array(
                    'Event' => array(),
                    'State' => array()
                )
            )
        )
    ),

    'H.data.geojson' => array(
        'elements' => array(
            'Reader' => array(
                'elements' => array(
                    'Options' => array()
                )
            )
        )
    ),

    'H.data.heatmap' => array(
        'elements' => array(
            'Colors' => array(),
            'IDataPoint' => array(),
            'Provider' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
        )
    ),

    'H.data.kml' => array(
        'elements' => array(
            'Reader' => array(),
        )
    ),

    'H.geo' => array(
        'elements' => array(
            'Altitude' => array(),
            'AltitudeContext' => array(),
            'IPoint' => array(
                'properties' => array(
                    'alt' => array(
                        'isOptional' => true
                    ),
                    'ctx' => array(
                        'isOptional' => true
                    )
                )
            ),
            'IProjection' => array(),
            'Latitude' => array(),
            'Longitude' => array(),
            'PixelProjection' => array(),
            'Point' => array(),
            'Rect' => array(),
            'Strip' => array(),
        )
    ),

    'H.lang' => array(
        'elements' => array(
            'IllegalOperationError' => array(),
            'InvalidArgumentError' => array(),
            'OutOfRangeError' => array(),
        )
    ),

    'H.map' => array(
        'elements' => array(
            'AbstractMarker' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'ArrowStyle' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'ChangeEvent' => array(),
            'Circle' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'DataModel' => array(),
            'DomIcon' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'DomMarker' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'GeoShape' => array(),
            'Group' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'HitArea' => array(
                'elements' => array(
                    'ShapeType' => array(),
                )
            ),
            'IControl' => array(),
            'ICopyright' => array(),
            'IInteraction' => array(),
            'Icon' => array(
                'methods' => array(
                    'getState' => array(
                        'returnType' => 'H.map.Icon.State'
                    )
                ),
                'elements' => array(
                    'State' => array(),
                    'Options' => array(),
                )
            ),
            'Imprint' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'Marker' => array(
                'elements' => array(
                    'Options' => array(
                        'properties' => array(
                            'data' => array(
                                'isOptional' => true
                            )
                        )
                    ),
                )
            ),
            'Object' => array(
                'elements' => array(
                    'Options' => array(),
                    'Type' => array(),
                )
            ),
            'Overlay' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'Polygon' => array(),
            'Polyline' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'Rect' => array(),
            'Spatial' => array(
                'elements' => array(
                    'Label' => array(),
                    'Options' => array(),
                )
            ),
            'SpatialStyle' => array(
                'elements' => array(
                    'LineCap' => array(),
                    'LineJoin' => array(),
                    'Options' => array(),
                )
            ),
            'ViewModel' => array(
                'elements' => array(
                    'CameraData' => array(),
                    'RequestedData' => array(),
                    'UpdateEvent' => array(),
                )
            ),
            'ViewPort' => array(
                'elements' => array(
                    'Options' => array(),
                    'Padding' => array(),
                )
            ),
        )
    ),

    'H.map.layer' => array(
        'elements' => array(
            'BaseTileLayer' => array(),
            'IMarkerLayer' => array(
                'elements' => array(
                    'Response' => array(),
                    'TiledResponse' => array(),
                )
            ),
            'ITileLayer' => array(
                'elements' => array(
                    'Options' => array(),
                    'Response' => array(),
                )
            ),
            'Layer' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'MarkerTileLayer' => array(),
            'ObjectLayer' => array(
                'elements' => array(
                    'Options' => array(),
                    'OverlaysResponse' => array(),
                )
            ),
            'TileLayer' => array(),
        )
    ),

    'H.map.provider' => array(
        'elements' => array(
            'ImageTileProvider' => array(
                'methods' => array(
                    'requestInternal' => array(
                        'parameters' => array(
                            'opt_priority' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'Invalidations' => array(
                'elements' => array(
                    'Flag' => array(),
                    'Mark' => array(),
                )
            ),
            'LocalObjectProvider' => array(
                'methods' => array(
                    'requestSpatialsByTile' => array(
                        'parameters' => array(
                            'tile' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
            ),
            'MarkerTileProvider' => array(
                'methods' => array(
                    'requestInternal' => array(
                        'parameters' => array(
                            'opt_priority' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'ObjectProvider' => array(
                'methods' => array(
                    'requestSpatialsByTile' => array(
                        'parameters' => array(
                            'tile' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
            ),
            'Provider' => array(
                'elements' => array(
                    'Options' => array()
                )
            ),
            'RemoteTileProvider' => array(
                'methods' => array(
                    'requestInternal' => array(
                        'parameters' => array(
                            'opt_priority' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                ),
            ),
            'Tile' => array(),
            'TileProvider' => array(
                'elements' => array(
                    'Options' => array()
                )
            ),
        )
    ),

    'H.map.render' => array(
        'elements' => array(
            'RenderEngine' => array(
                'constructor' => array(
                    'parameters' => array(
                        'options' => array(
                            'type' => 'Object'
                        )
                    )
                )
            ),
        )
    ),

    'H.map.render.p2d' => array(
        'elements' => array(
            'RenderEngine' => array(
                'elements' => array(
                    'Options' => array()
                )
            ),
        )
    ),

    'H.mapevents' => array(
        'elements' => array(
            'Behavior' => array(
                'constructor' => array(
                    'parameters' => array(
                        'options' => array(
                            'isOptional' => true
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'ContextMenuEvent' => array(),
            'Event' => array(),
            'MapEvents' => array(),
            'Pointer' => array(
                'elements' => array(
                    'Button' => array(),
                    'Buttons' => array(),
                )
            ),
            'WheelEvent' => array(),
        )
    ),

    'H.math' => array(
        'elements' => array(
            'BitMask' => array(),
            'IPoint' => array(),
            'ISize' => array(),
            'Point' => array(),
            'Rect' => array(),
            'Size' => array(),
        )
    ),

    'H.places' => array(
        'elements' => array(
            'Around' => array(),
            'Categories' => array(),
            'Explore' => array(),
            'Here' => array(),
            'Lookup' => array(),
            'Search' => array(),
            'Suggest' => array(),
        )
    ),

    'H.places.model' => array(
        'elements' => array(
            'GetLink' => array(),
            'PostLink' => array(),
            'ResultSet' => array(),
        )
    ),

    'H.service' => array(
        'elements' => array(
            'AbstractRestService' => array(
                'constructor' => array(
                    'parameters' => array(
                        'opt_options' => array(
                            'type' => 'Object'
                        )
                    )
                )
            ),
            'EnterpriseRoutingService' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'GeocodingService' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'IConfigurable' => array(),
            'JsonpRequestHandle' => array(),
            'MapTileService' => array(
                'elements' => array(
                    'Info' => array(),
                    'Options' => array(),
                )
            ),
            'MapType' => array(),
            'PlacesService' => array(
                'elements' => array(
                    'EntryPoint' => array(),
                    'Options' => array(),
                )
            ),
            'Platform' => array(
                'methods' => array(
                    'createDefaultLayers' => array(
                        'returnType' => '{normal: H.service.MapType, satellite: H.service.MapType, terrain: H.service.MapType}'
                    )
                ),
                'elements' => array(
                    'DefaultLayersOptions' => array(),
                    'Options' => array(),
                )
            ),
            'RoutingService' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'ServiceParameters' => array(),
            'ServiceResult' => array(),
            'TileProviderOptions' => array(),
            'TrafficIncidentsProvider' => array(
                'extends' => ''
            ),
            'TrafficIncidentsService' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'Url' => array(),
        )
    ),

    'H.service.metaInfo' => array(
        'elements' => array(
            'Service' => array(
                'elements' => array(
                    'Info' => array(),
                    'Options' => array(),
                )
            ),
            'TileProvider' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
        )
    ),

    'H.service.venues' => array(
        'elements' => array(
            'Building' => array(),
            'Floor' => array(),
            'Service' => array(
                'elements' => array(
                    'Options' => array(),
                    'State' => array(),
                )
            ),
            'Space' => array(),
            'TileProvider' => array(
                'elements' => array(
                    'Options' => array()
                )
            ),
            'Venue' => array(),
        )
    ),


    'H.ui' => array(
        'elements' => array(
            'Control' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'any'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                )
            ),
            'DistanceMeasurement' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'InfoBubble' => array(
                'methods' => array(
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array(),
                    'State' => array(),
                )
            ),
            'LayoutAlignment' => array(),
            'MapSettingsControl' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array(),
                    'MapTypeEntry' => array()
                )
            ),
            'Overview' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'Pano' => array(
                'addChild' => array(
                    'parameters' => array(
                        'child' => array(
                            'type' => 'typeof H.ui.base.Element'
                        )
                    )
                ),
                'methods' => array(
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array(
                        'properties' => array(
                            'mapTypes' => array(
                                'type' => 'Object'
                            )
                        )
                    )
                )
            ),
            'ScaleBar' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'UI' => array(
                'implements' => '',
                'elements' => array(
                    'Options' => array()
                )
            ),
            'UnitSystem' => array(),
            'ZoomControl' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
            'ZoomRectangle' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                    'renderInternal' => array(
                        'parameters' => array(
                            'element' => array(
                                'type' => 'H.ui.base.Element'
                            )
                        )
                    )
                ),
                'elements' => array(
                    'Options' => array()
                )
            ),
        )
    ),

    'H.ui.base' => array(
        'elements' => array(
            'Button' => array(
                'elements' => array(
                    'Options' => array(
                        'properties' => array(
                            'data' => array(
                                'isOptional' => true
                            )
                        )
                    ),
                    'State' => array(),
                )
            ),
            'Container' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                )
            ),
            'Element' => array(),
            'OverlayPanel' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                ),
                'elements' => array(
                    'State' => array(),
                )
            ),
            'PushButton' => array(),
            'RadioGroup' => array(
                'methods' => array(
                    'addChild' => array(
                        'parameters' => array(
                            'child' => array(
                                'type' => 'typeof H.ui.base.Element'
                            )
                        )
                    ),
                ),
                'elements' => array(
                    'Options' => array(),
                )
            ),
        )
    ),

    'H.ui.i18n' => array(
        'elements' => array(
            'Localization' => array(),
        )
    ),

    'H.util' => array(
        'elements' => array(
            'Cache' => array(),
            'ChangeEvent' => array(),
            'ContextItem' => array(
                'elements' => array(
                    'Options' => array(),
                )
            ),
            'Disposable' => array(),
            'Event' => array(),
            'EventTarget' => array(),
            'ICache' => array(),
            'ICancelable' => array(),
            'ICapturable' => array(),
            'OList' => array(
                'elements' => array(
                    'Event' => array(
                        'constructor' => array(
                            'parameters' => array(
                                'type' => array(
                                    'type' => 'Object'
                                )
                            )
                        )
                    ),
                )
            ),
            'Request' => array(
                'elements' => array(
                    'State' => array(),
                )
            ),
        )
    ),

    'H.util.kinetics' => array(
        'elements' => array(
            'IKinetics' => array(),
        )
    )
);

/**
 * Write file header file
 */
file_put_contents($exportFile, "// Type definitions for HERE maps 3.0.x\n// Project: http://here.com/\n// Definitions by: kristian-b <https://github.com/kristian-b>");

/**
 * Generate files
 */
foreach ($namespacesConfig AS $namespaceName => $namespaceConfig) {
    // write namespace
    writeNamespace(
        $namespaceName,
        $exportFile,
        $baseDocUrl,
        $namespaceConfig['elements']
    );

    // write sub namespaces?
    foreach ($namespaceConfig['elements'] AS $subNamespaceName => $subNamespaceConfig) {
        if (isset($subNamespaceConfig['elements'])) {
            // set full ns name
            $fullNamespaceName = implode('.', array($namespaceName, $subNamespaceName));
            // write namespace
            writeNamespace(
                $fullNamespaceName,
                $exportFile,
                $baseDocUrl,
                $subNamespaceConfig['elements']
            );
        }
    }
}

echo 'ready!';

/**
 * @param DOMNodeList $parameterContainerElements
 * @param array $parametersConfig
 * @return array
 */
function fetchParametersInformation(\DOMNodeList $parameterContainerElements, $parametersConfig = array())
{
    $parameters = array();
    $currentParameterName = null;
    $currentParameterType = null;
    $currentParameterDescription = null;
    $currentParameterIsOptional = null;

    foreach ($parameterContainerElements AS $element) {
        /**
         * @var DOMNode $element
         */
        $nodeValue = trim(trim((string)$element->nodeValue), '  ');


        // is parameter name?
        if ($element->nodeName == 'dt' AND $nodeValue != 'Parameters:' AND !empty($nodeValue)) {
            $currentParameterName = trim($nodeValue, ':');
        } // is parameter type?
        elseif ($element->nodeName == 'dd' AND !empty($currentParameterName) AND substr($nodeValue, 0, 1) == '{') {
            // is optional?
            if (strpos($nodeValue, '[optional]') !== false) {
                $currentParameterIsOptional = 1;
                $nodeValue = str_replace('[optional]', '', $nodeValue);
            }
            $currentParameterType = getFormattedType($nodeValue);

        } // is parameter description?
        elseif ($element->nodeName == 'dd' AND !empty($currentParameterName)) {
            $currentParameterDescription = $nodeValue;
        }


        // save?
        if (!empty($currentParameterName) AND !empty($currentParameterType) AND $currentParameterDescription !== null) {
            $parameters[] = array(
                'name' => $currentParameterName,
                'type' => $currentParameterType,
                'description' => $currentParameterDescription,
                'isOptional' => $currentParameterIsOptional ? true : false,
            );
            $currentParameterName = $currentParameterType = $currentParameterDescription = $currentParameterIsOptional = null;
        }
    }

    // check parameters config
    foreach ($parameters AS &$parameter) {
        $parameterName = $parameter['name'];
        if (isset($parametersConfig[$parameterName])) {
            if (isset($parametersConfig[$parameterName]['type'])) {
                $parameter['type'] = $parametersConfig[$parameterName]['type'];
            }
            if (isset($parametersConfig[$parameterName]['isOptional'])) {
                $parameter['isOptional'] = $parametersConfig[$parameterName]['isOptional'];
            }
        }
    }

    return $parameters;
}

/**
 * @param DOMNode $methodContainerElement
 * @param array $elementConfig
 * @return array
 */
function fetchMethodInformation(\DOMNode $methodContainerElement, $elementConfig)
{
    /**
     * Fetch method information
     */
    $methodInformation = array(
        'name' => '',
        'description' => '',
        'returnType' => '',
        'parameters' => array(),
    );
    foreach ($methodContainerElement->childNodes AS $childNode) {
        /**
         * @var \DOMNode $childNode
         */
        // fetch name and return type
        if (
            $childNode->nodeName == 'p' AND
            isset($childNode->attributes['class']) AND
            substr(trim((string)$childNode->attributes['class']->value), 0, strlen('method')) == 'method'
        ) {
            $values = explode(':', trim((string)$childNode->nodeValue));
            $methodInformation['name'] = trim(substr($values[0], 0, strpos($values[0], '(') - 1));
            if (isset($values[1])) {
                $methodInformation['returnType'] = getFormattedType($values[1]);
            }

        } // fetch description
        elseif ($childNode->nodeName == 'p' AND !$childNode->hasAttributes()) {
            $methodInformation['description'] = trim((string)$childNode->nodeValue);
        } // fetch parameters
        elseif (
            $childNode->nodeName == 'div' AND
            isset($childNode->attributes['class']) AND
            trim((string)$childNode->attributes['class']->value) == 'parameters'
        ) {
            $dlContainer = $childNode->getElementsByTagName('dl')->item(0);
            if ($dlContainer) {
                $methodInformation['parameters'] = fetchParametersInformation(
                    $dlContainer->childNodes,
                    (isset($elementConfig['methods'][$methodInformation['name']]['parameters'])) ?
                        $elementConfig['methods'][$methodInformation['name']]['parameters'] :
                        array()
                );
            }
        }
    }

    /**
     * Check method config: does we anything to set by our own?
     */
    if (isset($elementConfig['methods'][$methodInformation['name']])) {
        $methodConfig = $elementConfig['methods'][$methodInformation['name']];
        // check return type
        if (isset($methodConfig['returnType'])) {
            $methodInformation['returnType'] = $methodConfig['returnType'];
        }
    }


    return $methodInformation;
}

/**
 * @param \DOMDocument $document
 * @param array $elementConfig
 * @return array|bool
 */
function fetchClassInformation(\DOMDocument $document, $elementConfig)
{
    $classInformation = array(
        'type' => '',
        'description' => '',
        'extends' => '',
        'implements' => '',
    );

    $xpath = new DOMXPath($document);

    if ($xpath->query('//section[@class="class summary"]')->length > 0) {
        $containerElement = $xpath->query('//section[@class="class summary"]')->item(0);
        $classInformation['type'] = 'class';
    } else if ($xpath->query('//section[@class="interface summary"]')->length > 0) {
        $containerElement =
            $xpath->query('//section[@class="interface summary"]')->item(0);
        $classInformation['type'] = 'interface';
    } else if ($xpath->query('//section[@class="typedef summary"]')->length > 0) {
        $containerElement = $xpath->query('//section[@class="typedef summary"]')->item(0);
        $classInformation['type'] = 'typedef';
    } else if ($xpath->query('//section[@class="enumeration summary"]')->length > 0) {
        $containerElement = $xpath->query('//section[@class="enumeration summary"]')->item(0);
        $classInformation['type'] = 'enumeration';
    } else {
        return false;
    }

    foreach ($containerElement->childNodes AS $childNode) {
        /**
         * @var \DOMNode $childNode
         */
        if ($childNode->nodeName == 'p') {
            $nodeValue = trim($childNode->nodeValue);
            // is extends info?
            if (substr($nodeValue, 0, strlen('Extends')) == 'Extends') {
                $classInformation['extends'] = trim(substr($nodeValue, strpos($nodeValue, ':') + 1));
            }
            // is implements info?
            if (substr($nodeValue, 0, strlen('Implements')) == 'Implements') {
                $classInformation['implements'] = trim(substr($nodeValue, strpos($nodeValue, ':') + 1));
            } // is description?
            elseif (substr($nodeValue, 0, 1) != '[') {
                $classInformation['description'] = $nodeValue;
            }
        }
    }

    // check element config: does we anything to set by our own?
    if (array_key_exists('extends', $elementConfig)) {
        $classInformation['extends'] = $elementConfig['extends'];
    }
    if (array_key_exists('implements', $elementConfig)) {
        $classInformation['implements'] = $elementConfig['implements'];
    }

    return $classInformation;
}

/**
 * @param DOMNode $propertyContainerElement
 * @param array $elementConfig
 * @return array
 */
function fetchPropertyInformation(\DOMNode $propertyContainerElement, $elementConfig)
{
    $propertyInformation = array(
        'name' => '',
        'description' => '',
        'type' => '',
        'isOptional' => false,
    );

    foreach ($propertyContainerElement->childNodes AS $childNode) {
        /**
         * @var \DOMNode $childNode
         */
        // fetch name and return type
        if (
            $childNode->nodeName == 'p' AND
            isset($childNode->attributes['class']) AND
            strpos(trim((string)$childNode->attributes['class']->value), 'property') !== false
        ) {
            $values = explode(':', trim((string)$childNode->nodeValue));
            $propertyInformation['name'] = trim($values[0]);
            if (isset($values[1])) {
                if (strpos($values[1], '[optional]') !== false) {
                    $propertyInformation['isOptional'] = true;
                    $values[1] = str_replace('[optional]', '', $values[1]);
                }
                $propertyInformation['type'] = getFormattedType($values[1], true);
            }
        } // fetch description
        elseif ($childNode->nodeName == 'p' AND !$childNode->hasAttributes()) {
            $propertyInformation['description'] = trim((string)$childNode->nodeValue);
        }
    }

    // check parameters config: does we anything to set by our own?
    if (isset($elementConfig['properties'][$propertyInformation['name']])) {
        $propertyConfig = $elementConfig['properties'][$propertyInformation['name']];
        if (isset($propertyConfig['type'])) {
            $propertyInformation['type'] = $propertyConfig['type'];
        }
        if (isset($propertyConfig['isOptional'])) {
            $propertyInformation['isOptional'] = $propertyConfig['isOptional'];
        }
    }


    return $propertyInformation;
}

/**
 * @param string $type
 * @param bool $dontAllowUndefinedOrNull
 * @return string
 */
function getFormattedType($type, $dontAllowUndefinedOrNull = false)
{
    $type = trim(str_replace(array('{', '}', '?', '!', '=', '*', ',', '(', ')'), '', $type));
    $types = explode(' | ', $type);
    $typeFinal = array();
    foreach ($types AS $value) {
        if ($dontAllowUndefinedOrNull AND ($value == 'undefined' OR $value == 'null')) {
            continue;
        }
        if ($value == '*' OR $value == '' OR $value == 'undefined' OR $value == 'null') {
            $value = 'any';
        }
        if ($value == 'Array<*>' OR $value == 'Array' OR $value == 'Array<>') {
            $value = 'Array<any>';
        }

        $typeFinal[] = $value;
    }

    $type = implode(' | ', $typeFinal);

    if (empty($type)) {
        $type = 'any';
    }

    if (strpos(strtolower($type), 'function') !== false) {
        $type = 'Function';
    }

    if (strpos(strtolower($type), 'object') !== false) {
        $type = 'Object';
    }

    return $type;
}

/**
 * @param string $namespaceName
 * @param string $fileName
 * @param string $baseDocUrl
 * @param array $elements
 * @return bool
 */
function writeNamespace($namespaceName, $fileName, $baseDocUrl, $elements)
{
    // build file handle
    $fHandle = fopen($fileName, 'a');

    // write namespace definition
    writeNamespaceOpener($fHandle, $namespaceName);

    // write class definitions
    foreach ($elements AS $elementName => $elementConfig) {
        // set url
        $docUrl = $baseDocUrl . str_replace('.', '-', strtolower($namespaceName)) . '-' . strtolower($elementName) . '.html';
        // get html code from doc page
        $content = file_get_contents($docUrl);
        // parse html
        $domDocument = new DOMDocument();
        $domDocument->strictErrorChecking = false;
        @$domDocument->loadHTML($content);
        $xpath = new DOMXpath($domDocument);

        // write class
        $classInformation = fetchClassInformation($domDocument, $elementConfig);
        if (!$classInformation) {
            echo 'Not supported type on element "' . $elementName . '"!' . "<br/>\n";
            continue;
        }

        writeClassOpener(
            $fHandle,
            $elementName,
            $classInformation['description'],
            $classInformation['type'],
            $classInformation['extends'],
            $classInformation['implements']
        );

        fwrite($fHandle, "\n\n");

        // write properties
        $propertyContainerElements = $xpath->query('//section[@class="' . $classInformation['type'] . '-properties details"]/div[@class="property"]');
        if ($propertyContainerElements) {
            foreach ($propertyContainerElements AS $propertyContainerElement) {
                /**
                 * @var \DOMNode $propertyContainerElement
                 */
                $propertyInformation = fetchPropertyInformation($propertyContainerElement, $elementConfig);

                if ($classInformation['type'] == 'enumeration') {
                    writeEnumProperty($fHandle, $propertyInformation['name'], $propertyInformation['description'], 2);
                } else {
                    writeProperty(
                        $fHandle,
                        $propertyInformation['name'],
                        $propertyInformation['description'],
                        $propertyInformation['type'],
                        $propertyInformation['isOptional'],
                        2
                    );
                }


                fwrite($fHandle, "\n\n");
            }
        }

        // write constructor
        $constructorParameterElements = $xpath->query('//section[@class="' . $classInformation['type'] . '-constructor details"]/div[@class="parameters"]/dl/*');
        if ($constructorParameterElements AND $constructorParameterElements->length > 0) {
            writeMethod(
                $fHandle,
                'constructor',
                'Constructor',
                '',
                fetchParametersInformation(
                    $constructorParameterElements,
                    isset($elementConfig['constructor']['parameters']) ?
                        $elementConfig['constructor']['parameters'] :
                        array()
                ),
                2
            );
            fwrite($fHandle, "\n\n");
        }

        // write methods
        $methodContainerElements = $xpath->query('//section[@class="' . $classInformation['type'] . '-methods details"]/div[@class="method"]');
        if ($methodContainerElements) {
            foreach ($methodContainerElements AS $methodContainerElement) {
                /**
                 * @var \DOMNode $methodContainerElement
                 */
                $methodInformation = fetchMethodInformation($methodContainerElement, $elementConfig);

                // write interface method
                if ($classInformation['type'] == 'interface') {
                    writeInterfaceMethod(
                        $fHandle,
                        $methodInformation['name'],
                        $methodInformation['description'],
                        $methodInformation['returnType'],
                        $methodInformation['parameters'],
                        2
                    );
                } // write standard method
                else {
                    writeMethod(
                        $fHandle,
                        $methodInformation['name'],
                        $methodInformation['description'],
                        $methodInformation['returnType'],
                        $methodInformation['parameters'],
                        2
                    );
                }

                fwrite($fHandle, "\n\n");
            }

        }

        // close class
        writeClassClosure($fHandle);
        fwrite($fHandle, "\n\n");
    }

    // write namespace closure
    writeNamespaceClosure($fHandle);

    return true;
}

/**
 * @param resource $fHandle
 * @param string $methodName
 * @param string $methodDescription
 * @param string $methodReturnType
 * @param array $parameters
 * @param int $indentionLevel
 * @return bool
 */
function writeMethod($fHandle, $methodName, $methodDescription, $methodReturnType, $parameters, $indentionLevel = 1)
{
    $linePrefix = getLinePrefix($indentionLevel);

    $lines = array();

    // method description
    $lines[] = '/**';
    $lines[] = '* ' . $methodDescription;

    foreach ($parameters AS $parameter) {
        $lines[] = '* @param {' . $parameter['type'] . '} ' . $parameter['name'] . ' - ' . $parameter['description'];
    }

    $lines[] = '*/';

    // parameters list
    $parameterStrings = array();
    foreach ($parameters AS $parameter) {
        $parameterString = $parameter['name'];

        if ($parameter['isOptional']) {
            $parameterString .= '?';
        }

        $parameterString .= ': ' . $parameter['type'];

        $parameterStrings[] = $parameterString;
    }

    // write method
    $method = $methodName . '(' . implode(', ', $parameterStrings) . ')';
    if (!empty($methodReturnType)) {
        $method .= ': ' . $methodReturnType;
    }
    else {
        $method .= ': void';
    }
    $method .= ';';
    $lines[] = $method;

    fwrite($fHandle, $linePrefix . implode("\n" . $linePrefix, $lines));
    return true;
}

/**
 * @param resource $fHandle
 * @param string $methodName
 * @param string $methodDescription
 * @param string $methodReturnType
 * @param array $parameters
 * @param int $indentionLevel
 * @return bool
 */
function writeInterfaceMethod($fHandle, $methodName, $methodDescription, $methodReturnType, $parameters, $indentionLevel = 1)
{
    $methodName = trim(str_replace('static ', '', $methodName));
    return writeMethod($fHandle, $methodName, $methodDescription, $methodReturnType, $parameters, $indentionLevel);
}

/**
 * @param resource $fHandle
 * @param string $propertyName
 * @param string $propertyDescription
 * @param string g$propertyReturnType
 * @param bool $propertyIsOptional
 * @param int $indentionLevel
 * @return bool
 */
function writeProperty($fHandle, $propertyName, $propertyDescription, $propertyReturnType, $propertyIsOptional = false, $indentionLevel = 1)
{
    $linePrefix = getLinePrefix($indentionLevel);

    $lines = array();

    // description
    $lines[] = '/**';
    $lines[] = '* @var {' . $propertyReturnType . '} ' . $propertyName . '-' . $propertyDescription;
    $lines[] = '*/';

    // property
    $propertyString = $propertyName;
    if ($propertyIsOptional) {
        $propertyString .= '?';
    }
    $lines[] = $propertyString . ': ' . $propertyReturnType . ';';

    fwrite($fHandle, $linePrefix . implode("\n" . $linePrefix, $lines));
    return true;
}

/**
 * @param resource $fHandle
 * @param string $propertyName
 * @param string $propertyDescription
 * @param int $indentionLevel
 * @return bool
 */
function writeEnumProperty($fHandle, $propertyName, $propertyDescription, $indentionLevel)
{
    $linePrefix = getLinePrefix($indentionLevel);

    $lines = array();

    // replace static keyword
    $propertyName = trim(str_replace('static ', '', $propertyName));

    // description
    $lines[] = '/**';
    $lines[] = '* ' . $propertyName . ' - ' . $propertyDescription;
    $lines[] = '*/';

    // property
    $lines[] = $propertyName . ',';

    fwrite($fHandle, $linePrefix . implode("\n" . $linePrefix, $lines));
    return true;
}

/**
 * @param resource $fHandle
 * @param string $namespaceName
 * @return bool
 */
function writeNamespaceOpener($fHandle, $namespaceName)
{
    $lines = array(
        '',
        '',
        '/**',
        '* Namespace: ' . $namespaceName,
        '**/',
        'declare namespace ' . $namespaceName . ' {',
        ''
    );
    fwrite($fHandle, implode("\n", $lines));
    return true;
}

/**
 * @param resource $fHandle
 * @return bool
 */
function writeNamespaceClosure($fHandle)
{
    fwrite($fHandle, '}' . "\n");
    return true;
}

/**
 * @param resource $fHandle
 * @param string $className
 * @param null|string $classDescription
 * @param string $type
 * @param null|string $extends
 * @param null|string $implements
 * @param int $indentionLevel
 * @return bool
 */
function writeClassOpener($fHandle, $className, $classDescription = null, $type = 'class', $extends = null, $implements = null, $indentionLevel = 1)
{
    $linePrefix = getLinePrefix($indentionLevel);
    $lines = array();
    // write documentation
    $lines[] = '/**';
    $lines[] = '* ' . $className . ' - ' . $classDescription;
    $lines[] = '*/';

    // format type
    if ($type == 'typedef') {
        $type = 'interface';
    } elseif ($type == 'enumeration') {
        $type = 'enum';
    }

    // write class definition
    if (!empty($extends)) {
        $extends = ' extends ' . $extends . ' ';
    } else {
        $extends = '';
    }
    if (!empty($implements)) {
        $implements = ' implements ' . $implements . ' ';
    } else {
        $implements = '';
    }
    $lines[] = 'export ' . $type . ' ' . $className . $extends . $implements . ' {';
    fwrite($fHandle, $linePrefix . implode("\n" . $linePrefix, $lines));
    return true;
}

/**
 * @param resource $fHandle
 * @param int $indentionLevel
 * @return bool
 */
function writeClassClosure($fHandle, $indentionLevel = 1)
{
    $linePrefix = str_pad('', $indentionLevel * 4, ' ', STR_PAD_RIGHT);
    fwrite($fHandle, $linePrefix . '}' . "\n");
    return true;
}

/**
 * @param int $indentionLevel
 * @return string
 */
function getLinePrefix($indentionLevel = 1)
{
    return str_pad('', $indentionLevel * 4, ' ', STR_PAD_RIGHT);
}