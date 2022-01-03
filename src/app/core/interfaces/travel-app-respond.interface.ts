export interface SearchOriginDestData {
  code: string,
  isAirport: boolean,
  name: string,
  city: string,
  state: string,
  country: string
}

export interface SearchResult {
  origin: SearchOriginDestData,
  destination: SearchOriginDestData,
  departure_date: string;
}

export interface AirportData {
  name: string,
  code: string,
  city?: string,
  state?: string,
  country?: string,
  flight_orig_count?: number,
  flight_dest_count?: number,
  geo: {
    latitude: number,
    longitude: number
  }

}

export interface AirlineData {
  name: string,
  code: string,
  websiteUrl: string,
  phoneNumber: string,
  frequentFlyerProgram: string
}

export interface Brand {
  brandId: string,
  name: string,
  tier: number,
  brandAttributes: {
    attribute_0?: BrandAttribute,
    attribute_1?: BrandAttribute,
    attribute_2?: BrandAttribute,
    attribute_3?: BrandAttribute,
    attribute_4?: BrandAttribute,
    attribute_5?: BrandAttribute,
    attribute_6?: BrandAttribute,
    attribute_7?: BrandAttribute,
    attribute_8?: BrandAttribute,
    attribute_9?: BrandAttribute,
    attribute_10?: BrandAttribute,
    attribute_11?: BrandAttribute,
    attribute_12?: BrandAttribute,
    attribute_13?: BrandAttribute
  }
}

export interface BrandAttribute {
  type: string,
  description: string,
  inclusion: string

}

export interface Note {
  type: string,
  value: string,
  duration: string
}

export interface PriceDetail {
  accepted_credit_cards: any[],
  display_base_fare: number,
  display_taxes: number,
  display_fees: number,
  display_taxes_and_fees: number,
  display_pcln_fees: number,
  display_ppn_fees: number,
  display_taxes_and_ppn_fees: number,
  display_total_fare_per_ticket: number,
  display_total_fare: number,
  display_currency: string,
  display_symbol: string,
  source_base_fare: number,
  source_taxes: number,
  source_fees: number,
  source_taxes_and_fees: number,
  source_pcln_fees: number,
  source_ppn_fees: number,
  source_taxes_and_ppn_fees: number,
  source_total_fare_per_ticket: number,
  source_total_fare: number,
  source_currency: string,
  baseline_base_fare: number,
  baseline_taxes: number,
  baseline_fees: number,
  baseline_taxes_and_fees: number,
  baseline_pcln_fees: number,
  baseline_ppn_fees: number,
  baseline_taxes_and_ppn_fees: number,
  baseline_total_fare_per_ticket: number,
  baseline_total_fare: number,
  baseline_currency: string,
  baseline_symbol: string,
  savings: any[],
  component_information_list: any[]
}

export interface BaggageCarrier {
  available: string,
  departure: string,
  arrival: string,
  airline: string,
  popup_url: string
}

export interface SliceInfo {
  id: number,
  duration: string,
  max_duration: any,
  connection_count: number,
  max_connection_duration: any,
  stop_count: number,
  max_stops: any,
  notes: {
    note_0?: Note,
    note_1?: Note,
    note_2?: Note,
    note_3?: Note,
    note_4?: Note,
    note_5?: Note,
    note_6?: Note,
  }
}

export interface SliceAirline {
  code: string,
  name: string,
  logo: string,
  airline_count: number
}

export interface SliceAirport {
  code: string,
  city_id: any,
  name: string,
  city: string,
  state: string,
  country: string
}

export interface SliceDateTime {
  date: string,
  date_display: string,
  time_24h: string,
  time_12h: string,
  time_window: any[],
  date_time: string
}

export interface SliceDepartArr {
  airport: SliceAirport,
  datetime: SliceDateTime
}


export interface SliceFlightInfo {
  id: number,
  bkg_class: string,
  cabin_class: string,
  cabin_name: string,
  marketing_airline: string,
  marketing_airline_code: string,
  operating_airline: string,
  operating_airline_code: string,
  flight_number: string,
  stop_count: number,
  aircraft: string,
  aircraft_type: string,
  duration: string,
  carrier_locator: string,
  disinsection: boolean,
  notes: {
    note_1?: Note,
    note_2?: Note,
    note_3?: Note,
    note_4?: Note,
    note_5?: Note,
    note_6?: Note,
  },
  seat_map_available: boolean,
  seat_selection_allowed: boolean,
  seat_free_assignment: boolean,
  premium_seating_flag: boolean,
  brand_id: string
}

export interface SliceFlightData {
  info: SliceFlightInfo,
  departure: SliceDepartArr,
  arrival: SliceDepartArr
}

export interface ItineraryList {
  itinerary_0?: Itinenary,
  itinerary_1?: Itinenary,
  itinerary_2?: Itinenary,
  itinerary_3?: Itinenary,
  itinerary_4?: Itinenary,
  itinerary_5?: Itinenary,
  itinerary_6?: Itinenary,
  itinerary_7?: Itinenary,
  itinerary_8?: Itinenary,
  itinerary_9?: Itinenary,
  itinerary_10?: Itinenary,
  itinerary_11?: Itinenary,
  itinerary_12?: Itinenary,
  itinerary_13?: Itinenary,
  itinerary_14?: Itinenary,
  itinerary_15?: Itinenary,
  itinerary_17?: Itinenary,
  itinerary_18?: Itinenary,
  itinerary_19?: Itinenary,
  itinerary_20?: Itinenary,
  itinerary_21?: Itinenary,
  itinerary_22?: Itinenary,
  itinerary_23?: Itinenary,
  itinerary_24?: Itinenary,
  itinerary_25?: Itinenary,
  itinerary_27?: Itinenary,
  itinerary_28?: Itinenary,
  itinerary_29?: Itinenary,
  itinerary_30?: Itinenary,
  itinerary_31?: Itinenary,
  itinerary_32?: Itinenary,
  itinerary_33?: Itinenary,
  itinerary_34?: Itinenary,
  itinerary_35?: Itinenary,
  itinerary_37?: Itinenary,
  itinerary_38?: Itinenary,
  itinerary_39?: Itinenary,
  itinerary_40?: Itinenary,
  itinerary_41?: Itinenary,
  itinerary_42?: Itinenary,
  itinerary_43?: Itinenary,
  itinerary_44?: Itinenary,
  itinerary_45?: Itinenary,
  itinerary_47?: Itinenary,
  itinerary_48?: Itinenary,
  itinerary_49?: Itinenary,
  itinerary_50?: Itinenary,
  itinerary_51?: Itinenary,
  itinerary_52?: Itinenary,
  itinerary_53?: Itinenary,
  itinerary_54?: Itinenary,
  itinerary_55?: Itinenary,
  itinerary_57?: Itinenary,
  itinerary_58?: Itinenary,
  itinerary_59?: Itinenary,
  itinerary_60?: Itinenary,
  itinerary_61?: Itinenary,
  itinerary_62?: Itinenary,
  itinerary_63?: Itinenary,
  itinerary_64?: Itinenary,
  itinerary_65?: Itinenary,
  itinerary_67?: Itinenary,
  itinerary_68?: Itinenary,
  itinerary_69?: Itinenary,
  itinerary_70?: Itinenary,
  itinerary_71?: Itinenary,
  itinerary_72?: Itinenary,
  itinerary_73?: Itinenary,
  itinerary_74?: Itinenary,
  itinerary_75?: Itinenary,
  itinerary_77?: Itinenary,
  itinerary_78?: Itinenary,
  itinerary_79?: Itinenary,
  itinerary_80?: Itinenary,
}

export interface Itinenary{
  opaque: boolean,
  is_fused: any,
  void_window_close: string,
  price_details: PriceDetail,
  baggage_carrier: BaggageCarrier,
  slice_data: {
    slice_0: {
      info: SliceInfo,
      airline: SliceAirline,
      departure: SliceDepartArr,
      arrival: SliceDepartArr,
      flight_data: {
        flight_0: SliceFlightData,
        flight_1: SliceFlightData
      }
    }
  },
  displayable_airlines: {
    airline_0?: string,
    airline_1?: string,
    airline_2?: string,
    airline_3?: string,
    airline_4?: string,
    airline_5?: string,
    airline_6?: string,
    airline_7?: string,
    airline_8?: string,
    airline_9?: string,
    airline_10?: string,
    airline_11?: string,
    airline_12?: string,
    airline_13?: string,
    airline_14?: string,
    airline_15?: string,
    airline_16?: string,
    airline_17?: string,
    airline_18?: string,
    airline_19?: string,
    airline_20?: string,
  },
  ppn_contract_bundle: string,
  contract_page_url: string,
  ppn_seat_bundle: string
}
export interface OneWayRespond {
  getAirFlightDepartures: {
    results: {
      status: string;
      status_code: number;
      result: {
        sid: string,
        search_type: string,
        search_data: {
          search_0?: SearchResult,
          search_1?: SearchResult,
          search_2?: SearchResult,
          search_3?: SearchResult,
          search_4?: SearchResult,
          search_5?: SearchResult,
          search_6?: SearchResult,
        },
        itinerary_count: number,
        airport_data: {
          airport_1?: AirportData,
          airport_2?: AirportData,
          airport_3?: AirportData,
          airport_4?: AirportData,
          airport_5?: AirportData,
          airport_6?: AirportData,
          airport_7?: AirportData,
          airport_8?: AirportData,
          airport_9?: AirportData,
          airport_10?: AirportData,
          airport_11?: AirportData,
          airport_12?: AirportData,
          airport_13?: AirportData,
          airport_14?: AirportData,
          airport_15?: AirportData,
          airport_16?: AirportData,
          airport_17?: AirportData,
          airport_18?: AirportData,
          airport_19?: AirportData,
          airport_20?: AirportData,
        }
      },
      airline_data: {
        airline_0?: AirlineData,
        airline_1?: AirportData,
        airline_2?: AirlineData,
        airline_3?: AirportData,
        airline_4?: AirlineData,
        airline_5?: AirlineData,
        airline_6?: AirlineData,
        airline_7?: AirlineData,
        airline_8?: AirlineData,
        airline_9?: AirlineData,
        airline_10?: AirlineData,
        airline_11?: AirportData,
        airline_12?: AirlineData,
        airline_13?: AirportData,
        airline_14?: AirlineData,
        airline_15?: AirlineData,
        airline_16?: AirlineData,
        airline_17?: AirlineData,
        airline_18?: AirlineData,
        airline_19?: AirlineData,
        airline_20?: AirlineData
      },
      cabin_restrictions: {},
      nearby_airports: {
        airport_0: AirportData,
        airport_1: AirportData
      },
      branding_data: {
        brand_0?: Brand,
        brand_1?: Brand,
        brand_2?: Brand,
        brand_3?: Brand,
        brand_4?: Brand,
        brand_5?: Brand,
        brand_6?: Brand,
        brand_7?: Brand,
        brand_8?: Brand,
        brand_9?: Brand,
        brand_10?: Brand,
        brand_11?: Brand,
        brand_12?: Brand,
        brand_13?: Brand,
        brand_14?: Brand,
        brand_15?: Brand,
        brand_16?: Brand,
        brand_17?: Brand,
        brand_18?: Brand,
        brand_19?: Brand,
        brand_20?: Brand,
      },
      page_number: string,
      itinerary_data: ItineraryList
      time: "1.9262"
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface SearchRspAirport {
  code: string,
  name: string,
  city: string,
  state: any,
  country: string,
  latitude: number,
  longitude: number,
  iso_country_code: string,
  city_id: string,
  city_gis_id: string,
  gmt_time_zone_offset: string
}

export interface SearchRspAirline {
  code: string,
  name: string,
  baggage_content_available: boolean,
  baggage_fee_url: string,
  seats_url: string,
  check_in_url: string,
  website_url: string,
  small_image: string,
  large_image: string,
  alliance_code: string,
  frequent_flyer_program: string,
  phone_number: string,
  airline_phone_numbers: any[],
  logo: string,
  accepted_credit_cards: string[]
  international_phone_number: string,
}

export interface SearchRspEquipment{
  code: string,
  name: string,
  type: string
}

export interface SearchRspAlliance {
  code: string,
  name: string,
  member_codes: string[]
}

export interface SearchRspReferrals {
  external: {
    referral_source_id: string
  }
}

export interface Fee {
  amount: number,
  fee_code: string,
  source_amount: number,
  display_amount: number,
  baseline_amount: number
}

export interface PriceByType {
  currencyCode: string,
  baseFare: number,
  totalTaxes: number,
  fees: Fee,
  totalFare: number
}

export interface PaxTypePrice {
  pointOfSale: number,
  transaction: number,
  display: number
}

export interface PricingInfo {
  ticketing_airline: string,
  currency_code: string,
  base_fare: number,
  total_taxes: number,
  fees: Fee[],
  total_fare: number,
  unique_baggage_id: number[],
  itinerary_reference: SearchRspItineraryRef,
  void_window_close: string,
  void_window_close_t_z_designator: string,
  prices_by_type: {
    1?: PriceByType,
    2?: PriceByType,
    3?: PriceByType,
    4?: PriceByType,
    5?: PriceByType,
  },
  pax_type_prices: {
    ADT: PaxTypePrice
  },
  fare_infos: any[],
  change_infos: any[],
  source_base_fare: number,
  display_base_fare: number,
  baseline_base_fare: number,
  source_total_taxes: number,
  display_total_taxes: number,
  baseline_total_taxes: number,
  source_total_fare: number,
  display_total_fare: number,
  baseline_total_fare: number
}

export interface SearchRspItineraryRef {
  group_id: string,
  ref_id: string,
  ref_key: string,
  token: string
}

export interface SearchRspItinerarySlice {
  slice_ref_id: number,
  unique_slice_id: number
}

export interface SearchRspItinerary{
  changes_allowed: boolean,
  id: number,
  lap_infants_allowed: boolean,
  merchant_of_record: string,
  num_seats: number,
  passport_required: boolean,
  pax_min_age: number,
  pricing_info: PricingInfo,
  slice: SearchRspItinerarySlice[],
  total_trip_duration_in_hours: number,
  baggage_u_r_l: string,
  is_synthesized: boolean,
  open_jaw: boolean,
  is_fused: boolean,
  merchandising_values: number[],
  is_fare_family: boolean,
  is_cug_eligible: boolean,
  is_sale_eligible: boolean,
  upsell_options: any[],
  marriage_group: number[][],
  interline: boolean,
  baggages: [],
  ppn_contract_bundle: string,
  ppn_seat_bundle: string,
  ppn_filter_depart_bundle: string,
  ppn_filter_return_bundle: string
}

export interface SliceSegment {
  bkg_class: string,
  cabin_class: string,
  cabin_name: string,
  generic_seat_assgn_cost: {
    amount: number,
    currency_code: string
  },
  generic_seat_assgn_flag: boolean,
  id: number,
  num_seats: number,
  seatmap_available: boolean,
  seat_selection_allowed: boolean,
  allow_standby: boolean,
  allow_cabin_upgrades: boolean,
  allow_preferred_seating: boolean,
  allow_priority_boarding: boolean,
  unique_seg_id: number,
  brand_id: any,
  intermediate_stops: any[],
}

export interface Slice {
  duration: number,
  overnight_layover: boolean,
  slice_key: string,
  unique_slice_id: number,
  segment: SliceSegment[],
  overnight_connection: number[]
}

export interface FirstClassSegment {
  arrival_date_time: string,
  depart_date_time: string,
  dest_airport: string,
  duration: number,
  equipment_code: string,
  flight_number: string,
  generic_seat_assgn_cost: {
    amount: number,
    currency_code: string
  },
  generic_seat_assgn_flag: boolean,
  marketing_airline: string,
  orig_airport: string,
  premium_seating_flag: boolean,
  seatmap_available: boolean,
  subject_to_govt_approval: boolean,
  stop_quantity: number,
  unique_seg_id: number,
  intermediate_stops: any[]
}

export interface Baggage {
  unique_baggage_id: number,
  airline: string,
  orig_airport: string,
  dest_airport: string
}

export interface Carrier {
  code: string,
  airport: [
    {
      origAirport: string,
      destAirport: string,
      stops: [
        {
          stop: number,
          lowestTotalFare: number,
          numberOfItineraries: number
        },
        {
          stop: number,
          lowestTotalFare: number,
          numberOfItineraries: number
        }
      ]
    }
  ]
}

export interface Stop {
  numberOfStops: number,
  lowestTotalFare: {
    currency: string,
    amount: number
  },
  numberOfItineraries: number
}

export interface RoundTripAirline {
  code: string,
  lowestTotalFare: {
    currency: string,
    amount: number
  },
  numItineraries: number,
  sponsored: boolean
}

export interface RoundTripAirport {
  origin: string,
  destination: string,
  lowestTotalFare: {
    currency: string,
    amount: number
  },
  numItineraries: number
}

export interface LayoverAirport {
  code: string,
  name: string,
  lowestTotalFare: {
    currency: string,
    amount: number
  }
}

export interface Summary {
  exactDateMinTotalFareWithTaxesAndFees?: number,
  itineraries: number,
  minTotalFare: number,
  maxTotalFare: number,
  minTotalFareWithTaxesAndFees: number,
  maxTotalFareWithTaxesAndFees: number,
  minDurationFareWithTaxesAndFees: number,
  minDuration: number,
  maxDuration: number,
  minLayover: number,
  maxLayover: number,
  carrier: Carrier[],
  stop: Stop[],
  airline: RoundTripAirline[],
  airport: RoundTripAirport[],
  layoverAirport: LayoverAirport[],
  lowestInterlineTotalFare: number,
  minTotalFareWithTaxesAndFeesNonSplit: number
}

export interface SliceSummary {
  slice_ref_id: number,
  min_duration: number,
  max_duration: number,
  min_layover:number,
  max_layover: number,
  min_takeoff_time: string,
  max_takeoff_time: string,
  min_landing_time: string,
  max_landing_time: string
}

export interface MerchandisingLabel {
  label: string,
  value: number
}

export interface RoundTripBrand {
  brandId: string,
  name: string,
  tier: number,
  brandAttributes: BrandAttribute[]
}

export interface RoundTripRespond {
  getAirFlightRoundTrip: {
    results: {
      status: string,
      status_code: number,
      result_code: number,
      result_message: string,
      air_search_rsp: {
        client_session_id: string,
        point_of_sale: {
          request_source_country: any,
          country: string,
          currency: string
        },
        image_path: string,
        airport: SearchRspAirport[],
        airline: SearchRspAirline[],
        equipment: SearchRspEquipment,
        alliance: SearchRspAlliance[],
        referrals: SearchRspReferrals[],
        elapsed_time: string,
        response_time_stamp: string,
        cabin_restrictions: string,
        search_id: string,
        search_session_key: string,
        priced_itinerary: {
          itinerary_0?: SearchRspItinerary,
          itinerary_1?: SearchRspItinerary,
          itinerary_2?: SearchRspItinerary,
          itinerary_3?: SearchRspItinerary,
          itinerary_4?: SearchRspItinerary,
          itinerary_5?: SearchRspItinerary,
          itinerary_6?: SearchRspItinerary,
          itinerary_7?: SearchRspItinerary,
          itinerary_8?: SearchRspItinerary,
          itinerary_9?: SearchRspItinerary,
          itinerary_10?: SearchRspItinerary,
          itinerary_11?: SearchRspItinerary,
          itinerary_12?: SearchRspItinerary,
          itinerary_13?: SearchRspItinerary,
          itinerary_14?: SearchRspItinerary,
          itinerary_15?: SearchRspItinerary,
          itinerary_17?: SearchRspItinerary,
          itinerary_18?: SearchRspItinerary,
          itinerary_19?: SearchRspItinerary,
          itinerary_20?: SearchRspItinerary,
          itinerary_21?: SearchRspItinerary,
          itinerary_22?: SearchRspItinerary,
          itinerary_23?: SearchRspItinerary,
          itinerary_24?: SearchRspItinerary,
          itinerary_25?: SearchRspItinerary,
          itinerary_27?: SearchRspItinerary,
          itinerary_28?: SearchRspItinerary,
          itinerary_29?: SearchRspItinerary,
          itinerary_30?: SearchRspItinerary,
          itinerary_31?: SearchRspItinerary,
          itinerary_32?: SearchRspItinerary,
          itinerary_33?: SearchRspItinerary,
          itinerary_34?: SearchRspItinerary,
          itinerary_35?: SearchRspItinerary,
          itinerary_37?: SearchRspItinerary,
          itinerary_38?: SearchRspItinerary,
          itinerary_39?: SearchRspItinerary,
          itinerary_40?: SearchRspItinerary,
          itinerary_41?: SearchRspItinerary,
          itinerary_42?: SearchRspItinerary,
          itinerary_43?: SearchRspItinerary,
          itinerary_44?: SearchRspItinerary,
          itinerary_45?: SearchRspItinerary,
          itinerary_47?: SearchRspItinerary,
          itinerary_48?: SearchRspItinerary,
          itinerary_49?: SearchRspItinerary,
          itinerary_50?: SearchRspItinerary,
          itinerary_51?: SearchRspItinerary,
          itinerary_52?: SearchRspItinerary,
          itinerary_53?: SearchRspItinerary,
          itinerary_54?: SearchRspItinerary,
          itinerary_55?: SearchRspItinerary,
          itinerary_57?: SearchRspItinerary,
          itinerary_58?: SearchRspItinerary,
          itinerary_59?: SearchRspItinerary,
          itinerary_60?: SearchRspItinerary,
        },
        travel_insurance: any[],
        insurance_cost: any,
        slice: {
          slice_0?: Slice,
          slice_1?: Slice,
          slice_2?: Slice,
          slice_3?: Slice,
          slice_4?: Slice,
          slice_5?: Slice,
          slice_6?: Slice,
          slice_7?: Slice,
          slice_8?: Slice,
          slice_9?: Slice,
          slice_10?: Slice,
          slice_11?: Slice,
          slice_12?: Slice,
          slice_13?: Slice,
          slice_14?: Slice,
          slice_15?: Slice,
          slice_16?: Slice,
          slice_17?: Slice,
          slice_18?: Slice,
          slice_19?: Slice,
          slice_20?: Slice,
          slice_21?: Slice,
          slice_22?: Slice,
          slice_23?: Slice,
          slice_24?: Slice,
          slice_25?: Slice,
          slice_26?: Slice,
          slice_27?: Slice,
          slice_28?: Slice,
          slice_29?: Slice,
          slice_30?: Slice,
          slice_31?: Slice,
          slice_32?: Slice,
          slice_33?: Slice,
          slice_34?: Slice,
          slice_35?: Slice,
          slice_36?: Slice,
          slice_37?: Slice,
          slice_38?: Slice,
          slice_39?: Slice,
          slice_40?: Slice,
          slice_41?: Slice,
          slice_42?: Slice,
          slice_43?: Slice,
          slice_44?: Slice,
          slice_45?: Slice,
          slice_46?: Slice,
          slice_47?: Slice,
          slice_48?: Slice,
          slice_49?: Slice,
          slice_50?: Slice,
          slice_51?: Slice,
          slice_52?: Slice,
          slice_53?: Slice,
          slice_54?: Slice,
          slice_55?: Slice,
          slice_56?: Slice,
          slice_57?: Slice,
          slice_58?: Slice,
          slice_59?: Slice,
          slice_60?: Slice,
        },
        segment: {
          segment_0?: FirstClassSegment,
          segment_1?: FirstClassSegment,
          segment_2?: FirstClassSegment,
          segment_3?: FirstClassSegment,
          segment_4?: FirstClassSegment,
          segment_5?: FirstClassSegment,
          segment_6?: FirstClassSegment,
          segment_7?: FirstClassSegment,
          segment_8?: FirstClassSegment,
          segment_9?: FirstClassSegment,
          segment_10?: FirstClassSegment,
          segment_11?: FirstClassSegment,
          segment_12?: FirstClassSegment,
          segment_13?: FirstClassSegment,
          segment_14?: FirstClassSegment,
          segment_15?: FirstClassSegment,
          segment_16?: FirstClassSegment,
          segment_17?: FirstClassSegment,
          segment_18?: FirstClassSegment,
          segment_19?: FirstClassSegment,
          segment_20?: FirstClassSegment,
          segment_21?: FirstClassSegment,
          segment_22?: FirstClassSegment,
          segment_23?: FirstClassSegment,
          segment_24?: FirstClassSegment,
          segment_25?: FirstClassSegment,
          segment_26?: FirstClassSegment,
          segment_27?: FirstClassSegment,
          segment_28?: FirstClassSegment,
          segment_29?: FirstClassSegment,
          segment_30?: FirstClassSegment,
          segment_31?: FirstClassSegment,
          segment_32?: FirstClassSegment,
          segment_33?: FirstClassSegment,
          segment_34?: FirstClassSegment,
          segment_35?: FirstClassSegment,
          segment_36?: FirstClassSegment,
          segment_37?: FirstClassSegment,
          segment_38?: FirstClassSegment,
          segment_39?: FirstClassSegment,
          segment_40?: FirstClassSegment,
          segment_41?: FirstClassSegment,
          segment_42?: FirstClassSegment,
          segment_43?: FirstClassSegment,
          segment_44?: FirstClassSegment,
          segment_45?: FirstClassSegment,
          segment_46?: FirstClassSegment,
          segment_47?: FirstClassSegment,
          segment_48?: FirstClassSegment,
          segment_49?: FirstClassSegment,
          segment_50?: FirstClassSegment,
          segment_51?: FirstClassSegment,
          segment_52?: FirstClassSegment,
          segment_53?: FirstClassSegment,
          segment_54?: FirstClassSegment,
          segment_55?: FirstClassSegment,
          segment_56?: FirstClassSegment,
          segment_57?: FirstClassSegment,
          segment_58?: FirstClassSegment,
          segment_59?: FirstClassSegment,
          segment_60?: FirstClassSegment,
          rsp_meta_data: {
            lowerBound: number,
            upperBound: number,
            sliceRefId: number[],
            totalItineraries: number,
            filteredCount: number
          },
          baggage: Baggage[],
          total_trip_summary: Summary,
          filtered_trip_summary: Summary
          slice_summary: SliceSummary[],
          express_deal: any,
          provider_coverage: string,
          itinerary_type: string,
          merchandising_labels: MerchandisingLabel[],
          has_closed_user_group_deals: boolean,
          brand_reference: RoundTripBrand,
          cheapest_flight_non_stop: boolean,
          request_id: string,
          nearby_airports: AirportData[],
          itinerary_count: {
            count: number,
            opaqueCount: number
          }
        },
        processor_i_d: string,
        time: string
      }
    }
  }
}
