import type { APIRoute } from "astro";
export const prerender = true;

export const GET: APIRoute = async function GET() {
  return Response.json({
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/multikey/v1",
      "https://w3id.org/security/suites/secp256k1-2019/v1",
    ],
    id: "did:web:web.mmatt.net",
    alsoKnownAs: ["at://web.mmatt.net"],
    verificationMethod: [
      {
        id: "did:web:web.mmatt.net#atproto",
        type: "Multikey",
        controller: "did:web:web.mmatt.net",
        publicKeyMultibase: "zQ3shY7GoooRkEWUvqXoAvUfVFPANxaJgnr4MCc8ZdXGmr7JW",
      },
    ],
    service: [
      {
        id: "#atproto_pds",
        type: "AtprotoPersonalDataServer",
        serviceEndpoint: "https://pds.mmatt.net",
      },
    ],
  });
};
