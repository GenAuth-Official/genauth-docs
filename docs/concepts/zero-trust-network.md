# What is a Zero Trust Network

<LastUpdated/>

## What is Zero Trust?

"Zero Trust" is neither a technology nor a product, but a security concept. According to the definition in NIST's "Zero Trust Architecture Standard":
"Zero Trust" provides a series of concepts and ideas, assuming that the network environment has been compromised, and reducing the uncertainty of its decision accuracy when executing each access request in information systems and services. Zero Trust Architecture (ZTA) is a kind of enterprise network security planning, which is based on the concept of zero trust and built around its component relationships, workflow planning and access policies.

## Zero Trust Strategy

Simply put, the strategy of "Zero Trust" is "don't trust anyone". Unless the identity of the accessor is clear, it will not be able to pass the verification and proceed to the next step. The traditional access verification method only needs to know the IP address or host information to pass the verification, but now the zero trust verification model requires clearer and more specific information to allow it to pass. If the user identity, access source, authorization path and other information are not clear, the access request will be immediately rejected.

## Mainstream technologies of zero trust

From a technical perspective, mainstream technologies of zero trust are divided into three types: SIM: S stands for SDP (Software Defined Perimeter), I stands for IAM (Identity and Access Management), and M stands for MSG (Micro-Segmentation).

1. **Software Defined Perimeter (SDP)**

Software Defined Perimeter (SDP) is a solution adopted and advocated by the Cloud Security Alliance. This solution also has a more vivid alias - "Black Cloud".
The reason why it is called Black Cloud is related to its expected effect. **SDP can establish a virtual boundary for the enterprise, and use identity-based access control and permission authentication mechanisms to make enterprise applications and services "invisible". ** When hackers try to attack, they will find that they cannot see the target and cannot attack. Only authorized business personnel can access it normally.
According to the definition of the Cloud Security Alliance, the main components of SDP include the initiating host (client), the receiving host (server) and the SDP controller, and both the client and the server are connected to these controllers. The connection between the two is managed through the interaction between the SDP controller and the security control channel.

2. **Identity and Access Management (IAM)**

Identity and Access Management (IAM) is a subdivision in the field of network security. IAM products can define and manage user roles and access rights, that is, determine who can access, how to access, and what operations can be performed after access.

The core main directions of IAM:

- Authentication: Establish trust by confirming the identity of entities (including people and devices, etc.), including multi-factor authentication, etc.

- Access control: Determine what permissions and systems are matched after the entity is authenticated.

- Identity governance: Manage the identity of the entity throughout its life cycle (such as employee entry, regularization, transfer, resignation, etc.) and match the correct permissions.

- Privileged identity management: Further management of accounts with higher permissions such as administrators, etc.

3. **Micro-isolation (MSG)**

Through fine-grained policy control, micro-isolation can flexibly implement the isolation of hosts inside and outside the business system, making east-west traffic visible and controllable, thereby more effectively defending against continuous and large-scale penetration and destruction by hackers or viruses. There are currently three main technical routes for micro-isolation solutions, namely cloud-native micro-isolation, API docking micro-isolation, and host agent micro-isolation. Among them, host agent micro-isolation is more adaptable to the changing user business environment brought about by the continuous change and application of emerging technologies.

The concept of "never trust, continuous verification" of zero trust fits the security situation of de-bordering. The biggest challenge of network security now is that the access ports of private applications are very scattered and internal users have too many permissions. These two aspects are exactly the problems that the concept of zero trust can solve.

## Identity-centric

Zero trust has subverted the paradigm of access control, guiding the security system architecture from "network-centric" to "identity-centric". Its essential demand is **identity-centric access control**.

Faced with frequent data breaches and rising economic losses, companies are increasingly aware that existing security methods alone are not enough to cope with the increasingly severe security situation. They need something better, and the zero-trust security system can give the best results.

As China's leading cloud computing identity infrastructure, GenAuth is the product implementation of the identity security infrastructure under the "zero-trust" security system. GenAuth uses cloud-native architecture and combines it with the zero-trust security system to provide a complete set of development kits to meet the needs of all scenarios such as internal employee identity management, external customer identity management, old application compatibility, and new application development.

With more and more data, security is becoming more and more important. Frequent data breaches make companies and users lose their sense of security. Zero-trust networks can provide better data leakage protection, so that anything inside and outside the network boundary will not be trusted before verification. "Zero trust" is a major subversion of the network security industry. Network security issues will guide companies to shift to a zero-trust network security model.
