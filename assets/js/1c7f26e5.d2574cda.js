"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7006],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"YurtHub"},s=void 0,u={unversionedId:"core-concepts/yurthub",id:"version-v0.6.0/core-concepts/yurthub",isDocsHomePage:!1,title:"YurtHub",description:"1. Function Introduction",source:"@site/versioned_docs/version-v0.6.0/core-concepts/yurthub.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurthub",permalink:"/docs/core-concepts/yurthub",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurthub.md",tags:[],version:"v0.6.0",lastUpdatedBy:"windydayc",lastUpdatedAt:1645961041,formattedLastUpdatedAt:"2/27/2022",frontMatter:{title:"YurtHub"},sidebar:"version-v0.6.0/docs",previous:{title:"Architecture",permalink:"/docs/core-concepts/architecture"},next:{title:"YurtTunnel",permalink:"/docs/core-concepts/yurttunnel"}},c=[{value:"1. Function Introduction",id:"1-function-introduction",children:[{value:"1\uff09Edge autonomy",id:"1edge-autonomy",children:[],level:3},{value:"2\uff09Service topology",id:"2service-topology",children:[],level:3},{value:"3\uff09Pod seamless migration",id:"3pod-seamless-migration",children:[],level:3},{value:"4\uff09Support multi-cloud addresses access",id:"4support-multi-cloud-addresses-access",children:[],level:3},{value:"5\uff09Node Certificate Management",id:"5node-certificate-management",children:[],level:3}],level:2},{value:"2. Component architecture",id:"2-component-architecture",children:[{value:"1\uff09Edge mode",id:"1edge-mode",children:[],level:3},{value:"2\uff09Cloud mode",id:"2cloud-mode",children:[],level:3}],level:2},{value:"3. Startup parameters",id:"3-startup-parameters",children:[],level:2}],d={toc:c};function p(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-function-introduction"},"1. Function Introduction"),(0,o.kt)("p",null,"As an important component of OpenYurt, Yurthub provides many expansion capabilities for the edge side in the cloud edge scene."),(0,o.kt)("h3",{id:"1edge-autonomy"},"1\uff09Edge autonomy"),(0,o.kt)("p",null,"At present, openyurt provides the edge autonomy function: that is, when the cloud edge network is disconnected and the edge node or business container is restarted, the business container can be restored automatically at the edge node without being evicted and rescheduled by the cloud."),(0,o.kt)("p",null,"Yurthub caches resources locally, so that pod and kubelet can also obtain the required resources through YurtHub to keep them running normally in the case of cloud-edge network disconnection."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(446).Z})),(0,o.kt)("h3",{id:"2service-topology"},"2\uff09Service topology"),(0,o.kt)("p",null,"In a native K8S cluster, the back-end scope of the Service resource is the entire cluster. In OpenYurt, you can use NodePool to divide nodes and manage node partitions. Thus, resource management can be based on nodepools, such as managing Pod resources in different nodepools using UnitedDeployment.  "),(0,o.kt)("p",null,"In this context, resources in different node pools are independent to some extent. Nodes in a partition may require Service access traffic to flow only in the same partition rather than across node partitions. Therefore, YurtHub provides a traffic closed-loop function: the back-end of a Service is restricted to the same nodepool, so that the access traffic of a Service only flows in the same nodepool.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(1530).Z})),(0,o.kt)("h3",{id:"3pod-seamless-migration"},"3\uff09Pod seamless migration"),(0,o.kt)("p",null,"In a native K8S cluster, by default, Pod accesses Kube APIServer via the InClusterConfig address.  However, in the cloud edge scene, the cloud and the edge may be on the different network planes, in which case Pod cannot access Kube APIServer through the InClusterConfig address.  At the same time, in the case of cloud edge disconnection, when edge Pod needs to restart, it fails to connect to Kube APIServer for resource configuration.  "),(0,o.kt)("p",null,"In order to solve the above two problems, YurtHub provides Pod zero-modification migration capabilities to edge environments. For the Pod that accesses Kube APIServer using InClusterConfig, YurtHub automatically adjusts the Pod access address on the node without modifying the configuration of the Pod itself, and forwards the Pod request to YurtHub. So that Pod can run normally even when the cloud-edge network is disconnected, and realize the seamless migration of Pod from cloud scene to cloud edge scene.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(8881).Z})),(0,o.kt)("h3",{id:"4support-multi-cloud-addresses-access"},"4\uff09Support multi-cloud addresses access"),(0,o.kt)("p",null,"YurtHub supports multi-cloud addresses access to meet the situation that multiple Kube APIServer work simultaneously in the private cloud scenario, and private line and public network communication work simultaneously in the edge computing scenario."),(0,o.kt)("p",null,"There are two load balancing modes for cloud addresses in YurtHub:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rr(round-robin)\uff1aindicates the round robin mode. This mode is selected by default.  "),(0,o.kt)("li",{parentName:"ul"},"priority: indicates the priority mode. The low priority address is used only after the high priority address fails.")),(0,o.kt)("h3",{id:"5node-certificate-management"},"5\uff09Node Certificate Management"),(0,o.kt)("p",null,"Currently, YurtHub acts as a client to forward requests to Kube APIServer. Meanwhile, YurtHub provides HTTP and HTTPS service ports. Pod and Kubelet can connect to YurtHub through HTTP or HTTPS. At this point, YurtHub serves as the server to receive Pod and Kubelet requests on the node. To ensure secure communication between cluster components, YurtHub must have client and server certificates and manage them.  "),(0,o.kt)("p",null,"The client certificate and server certificate of YurtHub use the automatic rotation function of node certificate in kubernetes. When the node certificate expires, it will automatically apply for a new node certificate from the cloud. In addition,  it also solves the problems of certificate rotation failure caused by the disconnection of cloud-edge network and the rotation failure again when the certificate has expired when the network is restored."),(0,o.kt)("h2",{id:"2-component-architecture"},"2. Component architecture"),(0,o.kt)("p",null,'Yurthub can run on both cloud nodes and edge nodes. Therefore, it supports two working modes: "edge" and "cloud".'),(0,o.kt)("h3",{id:"1edge-mode"},"1\uff09Edge mode"),(0,o.kt)("p",null,'For YurtHub in "edge" mode, its component architecture is shown in the picture below.  '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(2527).Z})),(0,o.kt)("p",null,"The flow of requests through YurtHub is clearly shown in the above architecture picture."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the cloud-edge network is in good condition, the requests of the Pod and Kubelet are sent to Kube APIServer through Load Balancer. After receiving the response message, the Load Balancer performs data filtering on the response message. Resources in the response body are cached locally based on the request type before the response is returned to the requester.  "),(0,o.kt)("li",{parentName:"ul"},"When the cloud-edge network is disconnected, the requests of the Pod and Kubelet are processed by the Local Proxy. The Local Proxy operates the local cache data and returns the response information.  ")),(0,o.kt)("p",null,"According to data flow, modules in YurtHub can be simply divided into cloud service modules and local service modules.  "),(0,o.kt)("p",null,"The local service module mainly consists of the following sub-modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Proxy")),(0,o.kt)("li",{parentName:"ul"},"Responsible for handling resource requests of Pod and Kubelet in the case of cloud-edge network disconnection, so that the requester can be unaware of network disconnection. When the Local Proxy processes requests, it constructs response information and returns corresponding resources for locally supported operations (Get, List, and Watch). For operations (Delete, Create, Update, etc.) that are not supported locally, failure information is displayed. The Cache Manager module is called in the above processes.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cache Manager")),(0,o.kt)("li",{parentName:"ul"},"Responsible for local storage and retrieval of resources. This method is used by Load Balancer to store response messages locally and Local Proxy to obtain resources from the disk.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage Manager")),(0,o.kt)("li",{parentName:"ul"},"Defines basic methods for manipulating resources on disks, including Create, Update, Delete, Get, and List. The final resources are stored on local disk in serialized format.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Manager")),(0,o.kt)("li",{parentName:"ul"},"It mainly creates a dummy network interface (name: yurthub-dummy0, IP: 169.254.2.1) on nodes. Non-host network pods access Yurthub through this dummy network interface.  ")),(0,o.kt)("p",null,"The cloud service module mainly includes the following sub-modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Certificate Manager"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Responsible for managing the needed information when YurtHub connect to the Kube APIServer, including YurtHub client certificate and cluster CA certificate. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Health Check"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Responsible for periodically checking whether Kube APIServer is accessible and setting the health status of Kube APIServer as the basis for forwarding requests to cloud or local processing. In addition, the heartbeat sent by Kubelet is intercepted by YurtHub, and Health Check is responsible for updating YurtHub's heartbeat information to the cloud.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Load Balancer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Responsible for establishing a connection with Kube APIServer and forwarding the requests of Pod and Kubelet to the cloud. LB module supports multi-cloud addresses access, and the load balancing mode of the cloud can be round-robin or priority mode.  "),(0,o.kt)("p",{parentName:"li"}," In addition, the LB module is responsible for processing response messages and local caching, which calls the Data Filtering Framework module for response processing and the Storage Manager module for local caching.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Filtering Framework")),(0,o.kt)("p",{parentName:"li"},"Data filtering is performed on response messages to extend YurtHub's capabilities. Three filters are currently included:  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"MasterService Filter\uff1aProvides the ability to the business pod which use InClusterConfig to run in the edge environment with zero modification.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ServiceTopology Filter\uff1aProvides the ability of closed-loop traffic, limiting the back-end of service access to the nodepool where the node is located.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DiscardCloudService Filter\uff1aWhen the cloud and the edge are on the different network planes, the edge accesses the back-end service through the public network rather than PodIP to ensure that the edge can access the back-end service correctly.  ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"GC Manager")),(0,o.kt)("p",{parentName:"li"},"Every time YurtHub restarts, the pod resources that stored on the node but no longer exist in the cloud are recycled. After that, recycle and delete the kubelet and kube-proxy event resources that cached on the node at regular intervals."))),(0,o.kt)("h3",{id:"2cloud-mode"},"2\uff09Cloud mode"),(0,o.kt)("p",null,'For YurtHub in "cloud" mode, its component architecture is shown in the picture below.  '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(3219).Z})),(0,o.kt)("p",null,"Compared with edge mode, because the cloud network is stable, there is no need to detect the connection status between nodes and Kube APIServer, YurtHub forwards all requests to Kube APIServer, and YurtHub does not need cache data locally. Therefore, YurtHub in cloud mode turns off the modules that related to processing requests locally.  "),(0,o.kt)("h2",{id:"3-startup-parameters"},"3. Startup parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--bind-address      default: "127.0.0.1"\n')),(0,o.kt)("p",null,"YurtHub server IP address, used together with --serve-port.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--serve-port        default: "10267"\n')),(0,o.kt)("p",null,"YurtHub Port for processing HTTP requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--proxy-port        default: "10261"\n')),(0,o.kt)("p",null,"Port that forwards HTTP requests. HTTP requests destined for this port are forwarded to kube-apiserver.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--proxy-secure-port     default: "10268"\n')),(0,o.kt)("p",null,"Port that forwards HTTPS requests. HTTP requests destined for this port are forwarded to kube-apiserver.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--server-addr\n")),(0,o.kt)("p",null,'Kube-apiserver address. The value is in the format of "server1,server2..." .  '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--cert-mgr-mode     default: "hubself"\n')),(0,o.kt)("p",null,"Configure the certificate used by YurtHub. If the value is hubself, the certificate applied by YurtHub is used. The other modes are not currently supported.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--kubelet-ca-file       default: "/etc/kubernetes/pki/ca.crt"\n')),(0,o.kt)("p",null,"Path of the CA file used by Kubelet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--kubelet-client-certificate        default: "/var/lib/kubelet/pki/kubelet-client-current.pem"\n')),(0,o.kt)("p",null,"Path of the Kubelet client certificate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--gc-frequency      default: 120\n")),(0,o.kt)("p",null,"GC frequency. (unit: minutes)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--node-name\n")),(0,o.kt)("p",null,"Specifies the name of the node where YurtHub resides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--lb-mode       default: "rr"\n')),(0,o.kt)("p",null,"Load balancing mode for cloud addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-failed-retry        default: 3\n")),(0,o.kt)("p",null,"The number of retries after YurtHub heartbeat information update failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-healthy-threshold       default: 2\n")),(0,o.kt)("p",null,"The number of consecutive times Kube APIServer has been detected as healthy before being set to health again.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-timeout-seconds     default: 2\n")),(0,o.kt)("p",null,"When YurtHub updates heartbeat information, the time of connection timeout (unit: seconds)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--max-requests-in-flight        default: 250\n")),(0,o.kt)("p",null,"Limit on the total number of concurrent YurtHub requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--join-token\n")),(0,o.kt)("p",null,'Bootstrap token. When -- cert-Mgr-mode is "hubself", YurtHub applies for a certificate through join-token.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--root-dir      default: "/var/lib/yurthub"\n')),(0,o.kt)("p",null,"Directory where YurtHub files are stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--version\n")),(0,o.kt)("p",null,"YurtHub version information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--profiling     default: true\n")),(0,o.kt)("p",null,"Whether to enable profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-dummy-if       default: true\n")),(0,o.kt)("p",null,"Specifies whether to create a dummy network interface(name: yurthub-dummy0).  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-iptables       default: true\n")),(0,o.kt)("p",null,"Whether to enable iptables management."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--dummy-if-ip       default: "169.254.2.1"\n')),(0,o.kt)("p",null,"YurtHub IP address of the dummy network interface, used to connect to YurtHub inside containers.  The value cannot be 169.254.31.0/24 or 169.254.1.1/32.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--dummy-if-name     default: "yurthub-dummy0"\n')),(0,o.kt)("p",null,"The name of the YurtHub dummy network interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--disk-cache-path        default: "/etc/kubernetes/cache/"\n')),(0,o.kt)("p",null,"YurtHub Directory that caches cloud data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--access-server-through-hub     default: true\n")),(0,o.kt)("p",null,"Whether Pod connects to Kube-Apiserver through YurtHub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-resource-filter        default: true\n")),(0,o.kt)("p",null,"Whether to enable the YurtHub's response filtering function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--disabled-resource-filters\n")),(0,o.kt)("p",null,"List of closed filters. All filters are turned on by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--nodepool-name\n")),(0,o.kt)("p",null,"Nodepool where YurtHub resides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'--working-mode      default: "edge"\n')),(0,o.kt)("p",null,'YurtHub working mode. If the value is "edge", it indicates the edge node. If the value is "cloud", it indicates the cloud node.  '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"--kubelet-health-grace-period       default: 40s\n")),(0,o.kt)("p",null,"The time that allowed kubelet remain unresponsive, after which YurtHub will no longer send heartbeat messages."))}p.isMDXComponent=!0},446:function(e,t,r){t.Z=r.p+"assets/images/yurthub-autonomy-afa7624d38879e8057110b48e7fdc6c4.png"},3219:function(e,t,r){t.Z=r.p+"assets/images/yurthub-cloud-21d4dc8b7e41d307ac49aaad8cb16c14.png"},2527:function(e,t,r){t.Z=r.p+"assets/images/yurthub-edge-bfa8383ca5ee7dae4a364c2e22ed9483.png"},8881:function(e,t,r){t.Z=r.p+"assets/images/yurthub-pod-683562c21a64d2f2c3c43535b3d8d6ef.png"},1530:function(e,t,r){t.Z=r.p+"assets/images/yurthub-service-topology-7547711bf03c626fd1b07e7fd42689cb.png"}}]);