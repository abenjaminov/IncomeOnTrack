import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import {useFilteredClients} from "@shared/hooks";
import {IGetClientsArgs} from "@income-on-track/shared";
import {AutocompleteProps} from "@mui/material/Autocomplete/Autocomplete";

type ClientsDropdownProps = {
  defaultClientId?: string
  onClientChange?: (clientId: string) => void
} & Omit<AutocompleteProps<any, any, any, any>, 'renderInput' | 'onChange' | 'onFocus' | 'inputValue' | 'onInputChange' | 'options' | 'defaultValue' | 'value'>

export const ClientsDropdown: React.FC<ClientsDropdownProps> = ({ defaultClientId, onClientChange, ...divProps }) => {
  const [clientsFilter, setClientsFilter] = React.useState<IGetClientsArgs>({
    filterText: '',
  })

  const [selectedClientId, setSelectedClientId] = React.useState<string | undefined>(defaultClientId)

  const updateFilterText = (filterText: string) => {
    setClientsFilter({ ...clientsFilter, filterText })
  }

  const onClientSelected = (clientId?: string) => {
    setSelectedClientId(clientId)
    clientId && onClientChange && onClientChange(clientId)

    if(!clientId) {
      setClientsFilter({ ...clientsFilter, filterText: undefined })
    }
  }

  const {clients} = useFilteredClients(clientsFilter);

  const clientsOptions = clients.map(client => ({ label: client.name, value: client.id }))

  const selectedOption = clientsOptions.find(option => option.value === selectedClientId);

  return <Autocomplete renderInput={( params) => <TextField {...params} placeholder='Clients' />} {...divProps}
                       onChange={(e, value) => onClientSelected(value?.value)}
                       onFocus={() => updateFilterText('')}
                       inputValue={clientsFilter.filterText ?? ''}
                       value={selectedClientId ? selectedOption : undefined}
                       onInputChange={(e, value) => updateFilterText(value)}
                       options={clientsOptions}
                       defaultValue={selectedOption}/>
}
